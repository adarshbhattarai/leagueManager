import React,{useContext} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Streams extends React.Component{


    constructor(props){
        super(props);
    }
    ulStyle={
        overflowX: 'scroll',
        listStyle: 'none',
        whiteSpace: 'nowrap',
        padding: '0',
        position:'relative'

    }

    l1Style={
        display: 'inline-block',
        padding: '8px 16px',
        marginRight: '16px'
    }

    render(){
        return(
        
            <ul style={this.ulStyle}>
            {
            
                this.props.games.map((ele,index)=>
                
                <li key={index} style={this.l1Style}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ele[2]} />
                <Card.Title>{ele[0]}</Card.Title>
                <Card.Body>
                    <Card.Text>
                    <Button variant="success" onClick={()=>this.props.watch(ele[1])}>Watch</Button>
                    </Card.Text>
                </Card.Body>
                </Card>
                </li>
                )
                
            }
        </ul>
        );
    }
}