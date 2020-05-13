import  React, {Component} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import LeagueGroup from "../components/leagueComponents/LeagueGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HighestScorer from "../components/leagueComponents/HighestScorer";

export default class League extends Component{


    constructor(props){
        super(props);
        this.state={
            id:props.match.params.leagueId,
            groups:[],
            processing:true,
            leagueName:''

        }
        this.wrapper = React.createRef();
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
         /*  axios.get("/league/:id")
           .then(res=>{
               this.setState({formats:res.data,loading:false,selectedField:res.data[0]});
           })
           .catch(err=>console.error(err));*/
           if(this.state.id==='23'){
               this.setState({
                   processing:false,
                   leagueName:'Weekend League'
                });
           }
           

    }

    render(){ 

        console.log(this.state)
        if(this.state.processing)
            return ( <section className="bg-light page-section" id="fullHeight">
                    <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h3 className="section-subheading text-muted">Processing</h3>
                    </div>
                    </div>
                    </div>
                </section>)
        return (
            <div >
            <section className="bg-light page-section" id="fullHeight">
            <div className="container">
           <div className="row">
               <div className="col-lg-12 text-center">
               <h2 className="section-heading text-uppercase">{this.state.leagueName}</h2>
               </div>
            </div>
            <Tabs ref={this.wrapper} defaultActiveKey="profile" id="uncontrolled-tab-example" >
            <Tab eventKey="home" title="Group A">
              <LeagueGroup groupName="Group Number A"></LeagueGroup>
            </Tab>
            <Tab eventKey="profile" title="Group B">
            <LeagueGroup groupName="Group Number B"></LeagueGroup>
            </Tab>
            <Tab eventKey="contact" title="Group C">
            <LeagueGroup groupName="Group Number C"></LeagueGroup>
            </Tab>
            </Tabs>
            {//On Going Games
            }
            <hr />
            <Row xs={1} md={2}>
                <Col>
                <Row><Col>Highest Scorers </Col></Row>
                <hr />
                <Row> <HighestScorer groupName="Group Number C"></HighestScorer> </Row>
                </Col>
                <Col>  <div> Live and Recent games
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>  
                <div> Live and Recent games
                </div>
                </Col>
            </Row>
            </div>
            </section>
            </div>
        )
    }
}