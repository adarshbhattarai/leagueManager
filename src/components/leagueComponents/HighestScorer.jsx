import React from "react";
import Table from 'react-bootstrap/Table';
export default class HighestScorer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return(
        <div>
            <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>T.G.F</th>
            <th>Highest</th>
            <th>Team</th>
            <th>Match Played</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ishaan</td>
            <td>20</td>
            <td>6</td>
            <td>Liverpool</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Adarsh</td>
            <td>19</td>
            <td>4</td>
            <td>Liverpool</td>
            <td>8</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mane</td>
            <td>15</td>
            <td>8</td>
            <td>Liverpool</td>
            <td>7</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Messi</td>
            <td>15</td>
            <td>8</td>
            <td>Barcelona</td>
            <td>7</td>
          </tr>
        </tbody>
      </Table>
      </div>)
    }
}