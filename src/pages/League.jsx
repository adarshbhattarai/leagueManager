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
import { leagueService } from '../_services';
import {LeagueContext} from '../_provider/LeagueContext';

export default class League extends Component{


    constructor(props){
        super(props);
        this.state={
            id:props.match.params.leagueId,
            leagueData:[],
            groups:[],
            processing:true,
            leagueName:'',
            playVideo:false,
            link:'',
            games:[],
            message:''
        }
        this.wrapper = React.createRef();
        this.play=this.play.bind(this);
    }

    componentDidMount(){
        leagueService.fetchLeague(this.state.id)
        .then(res=>{
            let data = res.data;
            this.setState({
                processing:false,
                groups:[...data.groups],
                leagueName:data.leagueName,
                leagueData:[data]
            })
           
        }).catch(err=> this.setState({message:err.response.data.message}));

        leagueService.fetchTopGames(this.state.id)
        .then(res=>{
            let games=res.data;
            this.setState({
                games:[...games]
            })
        })

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
                    {this.state.message ? <div className={'alert alert-danger'}>{this.state.message}</div>
                    :<h3 className="section-subheading text-muted">Processing</h3>
                    }
                    </div>
                    </div>
                    </div>
                </section>)
        return (
            <LeagueContext.Provider value={{state:this.state}}>
            <div>
            <section className="bg-light page-section" id="fullHeight">
            <div className="container">
           <div className="row">
               <div className="col-lg-12 text-center">
               <h2 className="section-heading text-uppercase">{this.state.leagueName}</h2>
               </div>
            </div>
            <Tabs ref={this.wrapper} defaultActiveKey='0' id="uncontrolled-tab-example" >
            {
                this.state.groups && this.state.groups.map((element,index) => 
                <Tab key={index} eventKey={index} title={"Group " + element.name}>
                <LeagueGroup groupName={element.name} groupId={element.group_id} leagueId={this.state.id} data={element}></LeagueGroup>
                  </Tab>
                )
            } 
            </Tabs>
            {//On Going Games
            }
            <hr />
            <Row xs={1} md={2}>
                <Col>
                <Row><Col>Highest Scorers </Col></Row>
                <hr />
                <Row> <HighestScorer leagueId={this.state.id}></HighestScorer> </Row>
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
                    url={this.state.link}
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
            </LeagueContext.Provider>
        )
    }
}