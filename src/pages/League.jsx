import  React, {Component} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import LeagueGroup from "../components/leagueComponents/LeagueGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HighestScorer from "../components/leagueComponents/HighestScorer";
import PlayerCompare from "../components/leagueComponents/PlayerCompare";
import Streams from '../components/leagueComponents/Streams';
import ReactPlayer from 'react-player';
import YouTubePlayer from 'react-player/lib/players/YouTube'
export default class League extends Component{


    constructor(props){
        super(props);
        this.state={
            id:props.match.params.leagueId,
            groups:[],
            processing:true,
            leagueName:'',
            playVideo:false,
            link:'',
            games:[{
                name:'Adarsh v Sunil',
                link:'5',
                id:'1'
            },
            {
                name:'Ishaan vs Amrit',
                link:'5',
                id:'2'
            },
            {
                name:'Amrit vs Sunil',
                link:'5',
                id:'3'
            },
            {
                name:'Saugat vs Adarsh',
                link:'5',
                id:'4'
            },
            {
                name:'Adarsh vs Bharat',
                link:'5',
                id:'5'
            },
            {
                name:'Adarsh vs Amrit',
                link:'5',
                id:'6'
            },
            {
                name:'Adarsh vs Sunil',
                link:'5',
                id:'7'
            }]

        }
        this.wrapper = React.createRef();
        this.play=this.play.bind(this);
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

    play(id){
        this.setState({playVideo:true,link:id});
    }



    render(){ 
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
                <Col> <Row><Col>Compare Players </Col></Row> 
                <hr />
                 <Row><PlayerCompare></PlayerCompare>
                </Row>
                </Col>
            </Row>
            <hr />
            {this.state.playVideo?
            <Row>
                <hr />
                <ReactPlayer
                    url="https://vimeo.com/417790753"
                    width="100%"
                    height="500px"
                    controls={true}
                    playing
                    />
            </Row> 

            : null
            }
            <Row style={{width:'100%'}}>
                            <Streams games={this.state.games} watch={this.play}></Streams></Row> 
            </div>
            </section>
            </div>
        )
    }
}