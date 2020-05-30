import React from "react";
import Table from 'react-bootstrap/Table';
import { leagueService } from '../../_services';
export default class HighestScorer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            table:[]
        }
    }

    componentDidMount(){
      leagueService.fetchHighestScorers(this.props.leagueId)
      .then(res=>{
          this.setState({table:[...res.data]})
      }).
      catch(err=> this.setState({message:err.response}));
    }

    render(){
        
        return(
            <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>T.G.F</th>
            <th>Highest</th>
            <th>Fav.Team</th>
            <th>Match Played</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.table.map(
              ({player,goalsFor,highestScore,gamesPlayed},index)=>
              <tr>
                  <td>{index+1}</td>
                  <td>{player.fullname}</td>
                  <td>{goalsFor}</td>
                  <td>{highestScore}</td>
                  <td>{player.favoriteTeam || " - "}</td>
                  <td>{gamesPlayed}</td>
                </tr>
              
            )
          }
        </tbody>
      </Table>
      )
    }
}