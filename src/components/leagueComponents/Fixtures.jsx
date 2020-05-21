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
                score:[2,5],
                psId:['aastha03','ishaan01'],
                team:['liv','liverpool']
                },
                {
                    games:['Amrit','Ishaan'],
                    score:[2,3],
                    psId:['aastha03','ishaan01'],
                team:['liv','liverpool']
                },
                {
                    games:['Amrit','Sunil'],
                    score:[2,1],
                    psId:['aastha03','ishaan01'],
                team:['liv','liverpool']
                },
                {
                    games:['Adarsh','Sunil'],
                    score:[5,6],
                    psId:['aastha03','ishaan01'],
                team:['liv','liverpool']
                },
                {
                    games:['Sunil','Amrit'],
                    score:[3,4],
                    psId:['aastha03','ishaan01'],
                team:['liv','liverpool']
                },
                {
                    games:['Ishaan','Sunil'],
                    score:[5,3],
                    psId:['aastha03','ishaan01'],
                team:['liv','liverpool']
                }

                ]
        }
    }

    render(){
        
        return(
            <Row>
            {
            this.state.data.map(({games,score,psId,team},index)=>
                <Game game={games} score={score} psId={psId} team={team} key = {index}></Game>
            )
            }
            </Row>
        )
    }
}