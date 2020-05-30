import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
export default class Game extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showModal: false,
            file:[],
            image:{
                clicked:false,
                selectedItem:0
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onImageClick=this.onImageClick.bind(this);
    }

    handleClick(event){
        this.setState({showModal:true});
    }

    handleClose(){
        this.setState({showModal:false});
    }
8
    handleSave(){
        this.setState({showModal:false});
    }

    onChangeFile(event){
        event.preventDefault();
        var files=[...event.target.files,...this.state.file];
         this.setState({
            file:files
         })
    }

    onImageClick(event,index){
        event.preventDefault();
        console.log(event.target)
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
                    {this.props.game[0]} <Button variant="dark" onClick={this.handleClick}>{this.props.score[0]+"-"+this.props.score[1]}</Button> {this.props.game[1]}</Card.Text>
            </Card.Body>
            </Card>
             <Modal size="md" show={this.state.showModal} onHide={this.handleClose} centered> 
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title> {this.props.game[0]} vs {this.props.game[1]}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                            <Row><p>psId: {this.props.psId[0]}</p></Row>
                            <Row><p>team: {this.props.team[0]}</p></Row>
                            <Row><p>score: {this.props.score[0]}</p></Row>
                            </Col>
                            <Col xs={6} md={6}>
                            <Row><p>psId: {this.props.psId[1]}</p></Row>
                            <Row><p>team: {this.props.team[1]}</p></Row>
                            <Row><p>score: {this.props.score[1]}</p></Row>
                            </Col>
                        </Row>
                        <Row>
                            Images:  </Row>
                            <label htmlFor="imageUpload" className="btn btn-light btn-block btn-outlined">Upload Image</label>
                            <input type='file' id="imageUpload" accept="image/*" style={{display: 'none'}} onChange={this.onChangeFile} multiple/>
                            <Row>  <ul style={this.ulStyle}>{
                               this.state.file.length !==0 &&  
                              this.state.file.map((x,index)=> 
                                <li style={this.l1Style}>
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
                        <Row>
                            Videos: <input type="text" className="form-control" placeholder="provide video url" min="1"/>
                         <button>Add Url</button> </Row>
                         <ul style={this.ulStyle}>{
                            this.props.team.map((index)=>
                
                            <li style={this.l1Style}>
                            <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/qFwcahcDzP4/hqdefault.jpg" />
                            <Card.Title>Ishaan</Card.Title>
                            </Card>
                            </li>
                            
                            )
                            }
                            </ul>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="dark" onClick={this.handleClose}>Close</Button>
                        <Button variant="dark" onClick={this.handleSave}>Save changes</Button>
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