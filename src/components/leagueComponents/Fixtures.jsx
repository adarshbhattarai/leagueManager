import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Game from "./Game";
export default class Fixtures extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[
                {
                games:['Adarsh','Ishaan'],
                score:[2,5]
                },
                {
                    games:['Amrit','Ishaan'],
                    score:[2,3]
                },
                {
                    games:['Amrit','Sunil'],
                    score:[2,1]
                },
                {
                    games:['Adarsh','Sunil'],
                    score:[5,6]
                },
                {
                    games:['Sunil','Amrit'],
                    score:[3,4]
                },
                {
                    games:['Ishaan','Sunil'],
                    score:[5,3]
                }

                ]
        }
    }

    render(){
        
        return(
            <Row>
            {
            this.state.data.map(({games,score},index)=>
                <Game game={games} score={score} key = {index}></Game>
            )
            }
            </Row>
        )
    }
}