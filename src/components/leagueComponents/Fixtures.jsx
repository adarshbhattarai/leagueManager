import React from "react";
import Row from 'react-bootstrap/Row';
import Game from "./Game";
import { groupService } from '../../_services';
export default class Fixtures extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){

        groupService.getGames(this.props.leagueId, this.props.groupId)
        .then(res=>{
            var values=[];
            res.data.map((game,i)=>{
               var games = [game.homePlayer, game.awayPlayer];
               var psId=[game.homePlayerId.psId, game.awayPlayerId.psId];
               var team=[game.homePlayerId.favoriteTeam, game.awayPlayerId.favoriteTeam];
               var ids=[game.homePlayerId, game.awayPlayerId];
               var score=[]
               if(game.stat!=="NOT_PLAYED"){
                    score=[game.homeScore, game.awayScore]
               }
               values.push({
                games:games,
                score:score,
                psId:psId,
                team:team,
                ids:ids,
                stat:game.stat
            });
            })
            this.setState({data:[...values]});
        }).catch(err=> console.log(err.response));
    }

    render(){
        
        return(
            <Row>
             {
            this.state.data.map(({games,score,psId,team,stat},index)=>
                <Game game={games} score={score} psId={psId} team={team} stat={stat} groupId={this.props.groupId} key = {index}></Game>
            )
            }
            </Row>
        )
    }
}