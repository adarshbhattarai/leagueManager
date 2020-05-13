import React from "react";
import { Form, Col,Row } from 'react-bootstrap'; 
import OrganizeWithoutGroups from "./OrganizeWithoutGroups";
import GridView from "../randomized/GridView";
import './Org.css'
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown'
import { Redirect } from 'react-router'
export default class OrganizeWithGroups extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formUpdate = this.formUpdate.bind(this);
        this.state={
            formats:[],
            loading:true,
            selectedField:'',
            leagueName:'',
            leagueCreated:false,

        }
    }

    componentDidMount(){

        var res={
         data:[
            {
                formatId:1,
            formatName:'PremIer LEAGUE'
            } ,{
                formatId:2,
                formatName:'CHAMPIONS LEAGUE'
            },{
                formatId:3,
                formatName:'COPA DEL LEAGUE'
            },{
                formatId:4,
                formatName:'TRACKITT'
            }
            ]
        }
        this.setState({formats:res.data,loading:false,selectedField:res.data[0]});
        //remove above later on.
        console.log('OrganizeWithGroups.jsx component did mount remove')
        axios.get("/formats/")
        .then(res=>{
            this.setState({formats:res.data,loading:false,selectedField:res.data[0]});
        })
        .catch(err=>console.error(err));
        
    }
    handleSubmit(){
        function   format(groups){
                 var items = [] ;
                 var ind=0;
                 groups.map(ele=>{
                    var players=[]
                    items.push({
                        name:ind,
                        players:players
                    });
                    ele.map(pName=>{
                        items[ind].players.push({
                            psId:-1,
                            name:pName
                        })
                    })
                    ind++;
                 })
                 return items;
            }
        const data={
            'leagueName':this.state.leagueName,
            'groups':format(this.props.groups),
            'formatId':this.state.selectedField.formatId
        }
        const header={
            'Content-Type': 'application/json'
        }
        axios.post('/league/create',data,header)
        .then(res=>{
            console.log(res);
            this.setState({...this.state, leagueCreated:true});
        })
        .catch(err=> console.log(err));

        console.log('handleSubmit OrganizeWithGroups reroute only on success');
        //Onsucess set 
        this.setState({...this.state, leagueCreated:true});
    }
    handleChange(val){
       this.setState({...this.state,selectedField:val});
    }
    formUpdate(event){
        let name=event.target.name;
        let val = event.target.value;
        this.setState({...this.state,[name]:val});
     }

    render(){
        if(this.props==null)
        return(<OrganizeWithoutGroups/>)
        if (this.state.leagueCreated) {
            return <Redirect to = {{ pathname: "/league/23" }} />;
          }
        return(

            <section className="bg-light page-section" id="fullHeight">
                <div className="container">
               <div className="row">
                   <div className="col-lg-12 text-center">
                   <h2 className="section-heading text-uppercase">Create New League</h2>
                   <h3 className="section-subheading text-muted">Organize League here</h3>
                
                   <Form className='col-md-9 center'> 
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2} >
                            League Name
                            </Form.Label>
                            <Col sm={10}  className='col-md-3 center'>
                            <Form.Control type="text" placeholder="League Name" name='leagueName' onChange={this.formUpdate}/>
                            </Col>
                            <Form.Label column sm={2} >
                            Format
                            </Form.Label>
                            <Col sm={10}  className='col-md-3 center'>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {this.state.loading?"Processing":this.state.selectedField.formatName}
                                </Dropdown.Toggle>
            
                                <Dropdown.Menu>
                                {this.state.formats.map((val)=>
                                    <Dropdown.Item  key={val.formatId} onClick={()=>this.handleChange(val)}>{val.formatName}</Dropdown.Item>
                                )}
                                </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Form.Group>
                    </Form>
                   </div>
               </div>
                <GridView groupedItems={this.props.groups}></GridView>
                </div>
                <button type="button" style={{marginTop:'3em'}}className="btn btn-outline-success btn-lg" onClick={this.handleSubmit}>Create League</button>
           </section>
        )
    }
}