import React,{useContext} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {LeagueContext} from '../../_provider/LeagueContext';

import { authenticationService } from '../../_services';
import {gameService} from  '../../_services';
export default class Game extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showModal: false,
            file:[],
            image:{
                clicked:false,
                selectedItem:0
            },
            auth:false,
            groupId:this.props.groupId,
            homePlayerScore:this.props.score[0]?this.props.score[0]:0,
            awayPlayerScore:this.props.score[1]?this.props.score[1]:0,
            videoLinks:[],
            videoLink:'',
            consumed:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onImageClick=this.onImageClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addVideoLinks = this.addVideoLinks.bind(this);
        this.auth = this.auth.bind(this)
    }

    handleClick(event){
        this.setState({showModal:true});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        });
      }

    handleClose(){
        this.setState({showModal:false});
    }
    handleSave(event){
        event.preventDefault();
        var saveObject={
            homePlayerScore:this.state.homePlayerScore,
            awayPlayerScore:this.state.awayPlayerScore,
            groupId:this.state.groupId,
            videoLinks:this.state.videoLinks,
            images:this.state.file,
            gameId:this.props.gameId
        }
        let formData = new FormData();
        formData.append('homePlayerScore',saveObject.homePlayerScore)
        formData.append('awayPlayerScore',saveObject.awayPlayerScore)
        formData.append('groupId',saveObject.groupId)
        formData.append('gameId',saveObject.gameId)
        formData.append('videoLinks',saveObject.videoLinks)
        
        this.state.file.map((file)=>{
            formData.append('images',file)
        })


        gameService._gameUpdate(formData)
        .then( res=> {
            console.log(res);
            this.setState({showModal:false});
            window.location.reload(false);
        })
        .catch(err=>this.setState({showModal:false}));
        this.setState({showModal:false});
    }

    onChangeFile(event){
        event.preventDefault();
        console.log(event.target.files)
        var files=[...event.target.files,...this.state.file];
         this.setState({
            file:files
         })
    }

    onImageClick(event,index){
        event.preventDefault();
        this.setState({
            showModal: false,
            image:{
                clicked:true,
                selectedItem:index
            }
        });
    }

    ulStyle={
        overflowX: 'scroll',
        listStyle: 'none',
        whiteSpace: 'nowrap',
        padding: '0',
        position:'relative'

    }
    addVideoLinks(event){
        event.preventDefault();
        if(this.state.videoLink){
            this.setState({videoLinks:[...this.state.videoLinks,this.state.videoLink],videoLink:''})
        }
    }

    auth(leagueData, groupId){
        const currentUser = authenticationService.currentUserValue;
        if(!currentUser){
            return false;
        }
        const username =  currentUser.username;
        if(currentUser.roles.includes("ROLE_ADMIN")){
            console.log("User is admin allow");
            return true;
        }
        leagueData.leagueData[0].league_admins.find(
            (admins)=>{
                if(admins.psId===username){
                    console.log("LeagueAdmin");
                    return true;
                }
            }
        )
        const element = leagueData.groups.filter((group)=>
            group.group_id===groupId
        ).map(
            (items)=>
                items.group_admins 
        ).find((item)=>{
            return item.psId===username });
        return typeof element === "undefined" ? false : true;
           
        //return false;
    }
    l1Style={
        display: 'inline-block',
        padding: '8px 16px',
        marginRight: '16px'
    }


    render(){
        return(
            <div>
            <Card style={{ width: '16rem' }}>
            <Card.Body>
                <Card.Text>
                    {this.props.game[0]} <Button variant="dark" onClick={this.handleClick}>{this.props.stat==="NOT_PLAYED"?"TBD":this.props.score[0]+"-"+this.props.score[1]}</Button> {this.props.game[1]}</Card.Text>
            </Card.Body>
            </Card>
             <Modal size="md" show={this.state.showModal} onHide={this.handleClose} centered> 
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title> {this.props.game[0]} vs {this.props.game[1]}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    {
                        this.state.consumed?null:
                    <LeagueContext.Consumer>
                            {
                            (context)=>(
                               this.setState({consumed:true,auth:this.auth(context.state,this.state.groupId)}) 
                            )}
                    </LeagueContext.Consumer>
                    }
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                            <Row><p>psId: {this.props.psId[0]}</p></Row>
                            <Row><p>team: {this.props.team[0]}</p></Row>
                            <Row><label><p>score: 

                            <div className="col col-md-1" >
                            { this.state.auth? 
                            <input
                             name="homePlayerScore"
                             type="number"
                             value={this.state.homePlayerScore}
                             onChange={this.handleInputChange} />
                             : this.props.score[0]
                            }
                        </div>
                            </p></label></Row>
                            </Col>
                            <Col xs={6} md={6}>
                            <Row><p>psId: {this.props.psId[1]}</p></Row>
                            <Row><p>team: {this.props.team[1]}</p></Row>
                            <Row><label><div>score: <div className="col col-md-1" >
                            {
                             this.state.auth? 
                             <input
                             name="awayPlayerScore"
                             type="number"
                             value={this.state.awayPlayerScore}
                             onChange={this.handleInputChange} />: this.props.score[1]
                            }
                            </div>
                            </div></label>
                        </Row>
                            </Col>
                        </Row>
                        <Row>
                           Images: 
                            {this.state.auth? 
                                <div>
                                <label htmlFor="imageUpload" className="btn btn-light btn-block btn-outlined">Upload Image</label>
                                <input type='file' id="imageUpload" accept="image/*" style={{display: 'none'}} onChange={this.onChangeFile} multiple/>
                                </div>
                            :
                             null
                            }
                              <ul style={this.ulStyle}>{
                               this.state.file.length !==0 &&  
                              this.state.file.map((x,index)=> 
                                <li key={index} style={this.l1Style}>
                              <Card style={{ width: '10rem' }}>
                              <Link>
                              <Card.Img variant="top" src={URL.createObjectURL(x)} key={index} onClick={(event)=>this.onImageClick(event,index)}/>
                              </Link>
                              </Card>
                              </li>
                            )
                            }
                            </ul>
                        </Row>
                            Videos: 
                            {
                             this.state.auth?
                             <div> 
                            <Row>
                             <input
                             name="videoLink"
                             type="text"
                             placeholder="provide video url"
                             className="form-control"
                             value={this.state.videoLink}
                             onChange={this.handleInputChange} />
                             <button onClick={this.addVideoLinks}>Add Url</button> 
                             </Row>
                             <u1>{
                                 this.state.videoLinks.map((element,index)=>
                                    <li key={index}>
                                            {element}
                                    </li>
                                 )
                                }
                                 
                             </u1>
                             </div>
                             : 
                             null
                            }
                         <ul style={this.ulStyle}>
                            {/* {
                            
                                this.props.games.map((ele,index)=>
                                
                                <li key={index} style={this.l1Style}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ele[2]} />
                                <Card.Title>{ele[0]}</Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                    <Button variant="success" onClick={()=>this.props.watch(ele[1])}>Watch</Button>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                                </li>
                                ) */}
                                
                        </ul>
                         <ul style={this.ulStyle}>{
                            this.props.team.map((element, index)=>
                
                            <li key={index} style={this.l1Style}>
                            {/* <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/qFwcahcDzP4/hqdefault.jpg" />
                            <Card.Title>Ishaan</Card.Title>
                            </Card> */}
                            </li>
                            )
                            }
                            </ul>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="dark" onClick={this.handleClose}>Close</Button>
                        {
                             this.state.auth? <Button variant="dark" onClick={this.handleSave}>Update changes</Button> : null
                        }
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
            {
                                this.state.image.clicked && (
                                    <Lightbox
                                        mainSrc={URL.createObjectURL(this.state.file[this.state.image.selectedItem])}
                                        nextSrc={this.state.file[(this.state.image.selectedItem + 1) % this.state.file.length]}
                                        prevSrc={this.state.file[(this.state.image.selectedItem + this.state.file.length - 1) % this.state.file.length]}
                                        onCloseRequest={() => this.setState({ image: {
                                            clicked:false
                                        } })}
                                        onMovePrevRequest={() =>
                                            this.setState({
                                                image:{
                                                    clicked:true,
                                                    selectedItem: (this.state.image.selectedItem + this.state.file.length - 1) % this.state.file.length
                                                }
                                              
                                            })
                                          }
                                          onMoveNextRequest={() =>
                                            this.setState({
                                                image:{
                                                clicked:true,
                                                selectedItem: (this.state.image.selectedItem + 1) % this.state.file.length
                                            }
                                            })
                                          }
                                    />
                                )
            }
             </div>
        )
    }
}