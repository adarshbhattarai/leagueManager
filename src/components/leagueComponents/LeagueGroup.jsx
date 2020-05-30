import React from "react";
import Table from 'react-bootstrap/Table'
import Fixtures from "./Fixtures";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default class LeagueGroup extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
      
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
         <Card.Body> <Fixtures games="pass games"></Fixtures> </Card.Body>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th>Draw</th>
            <th>Loss</th>
            <th>G.F</th>
            <th>G.A</th>
            <th>G.D</th>
            <th>Pts</th>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <th>Draw</th>
            <th>Loss</th>
            <th>G.F</th>
            <th>G.A</th>
            <th>G.D</th>
            <th>Pts</th>
          </tr>
          <tr>
            <td>3</td>
            <td >Larry the Bird</td>
            <th>3sa</th>
            <td>@twitter</td>
            <th>Draw</th>
            <th>Loss</th>
            <th>G.F</th>
            <th>G.A</th>
            <th>G.D</th>
            <th>Pts</th>
          </tr>
        </tbody>
      </Table>
      </div>)
    }
}