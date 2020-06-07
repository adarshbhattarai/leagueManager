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
               var score=[];
               var images=game.images;
               var videos=game.videos;
               if(game.stat!=="NOT_PLAYED"){
                    score=[game.homeScore, game.awayScore]
               }
               values.push({
                gameId:game.gameId,
                games:games,
                score:score,
                psId:psId,
                team:team,
                ids:ids,
                stat:game.stat,
                images:images,
                videos:videos
            });
            })
            this.setState({data:[...values]});
        }).catch(err=> console.log(err.response));
    }

    render(){
        
        return(
            <Row>
             {
            this.state.data.map(({gameId,games,score,psId,team,stat,images,videos},index)=>
                <Game gameId={gameId} game={games} score={score} psId={psId} team={team} stat={stat} images={images} videos={videos} groupId={this.props.groupId} key={index}></Game>
            )
            }
            </Row>
        )
    }
}