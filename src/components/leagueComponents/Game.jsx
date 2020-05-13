import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default class Game extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        
        return(
            <Card style={{ width: '16rem' }}>
            <Card.Body>
                <Card.Text>
                    {this.props.game[0]} <Button variant="dark">{this.props.score[0]+"-"+this.props.score[1]}</Button> {this.props.game[1]}</Card.Text>
            </Card.Body>
            </Card>
            
        )
    }
}