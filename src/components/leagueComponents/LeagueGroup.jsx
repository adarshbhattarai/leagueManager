import React from "react";
import Table from 'react-bootstrap/Table'
import Fixtures from "./Fixtures";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { groupService } from '../../_services';
export default class LeagueGroup extends React.Component{

    constructor(props){
        super(props);
        this.state={
          table:[],
          games:[]
        }
    }

    componentDidMount(){
      //Get group table
      groupService.fetchTable(this.props.leagueId, this.props.groupId)
      .then(res=>{
        console.log(res);
          this.setState({table:[...res.data]})
      }).catch(err=> console.log(err.response));
    }
    render(){
        
        return(

        <div>
        <Accordion defaultActiveKey="1">
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
            <Button size="lg" variant="dark">Fixtures</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
         <Card.Body> <Fixtures leagueId={this.props.leagueId} groupId={this.props.groupId}></Fixtures> </Card.Body>
         </Accordion.Collapse>
        </Card>
        </Accordion>
        <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Played</th>
            <th>Win</th>
            <th>Draw</th>
            <th>Loss</th>
            <th>G.F</th>
            <th>G.A</th>
            <th>G.D</th>
            <th>Pts</th>
            <th>Avg</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.table && 
            this.state.table.map(({name,gamesPlayed,gamesWon,gamesDrawn,gamesLost,goalsFor,goalAgainst,goalDiff,points,average},index)=>
              <tr key={index}>
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{gamesPlayed}</td>
                <td>{gamesWon}</td>
                <th>{gamesDrawn}</th>
                <th>{gamesLost}</th>
                <th>{goalsFor}</th>
                <th>{goalAgainst}</th>
                <th>{goalDiff}</th>
                <th>{points}</th>
                <th>{average}</th>
              </tr>
            )
          }
        </tbody>
      </Table>
      </div>)
    }
}