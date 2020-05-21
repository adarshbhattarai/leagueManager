import React from "react";
import {Typeahead} from 'react-bootstrap-typeahead';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default class PlayerCompare extends React.Component{


    constructor(props){
        super(props);
        this.state={
            selectedPlayerA:{},
            selectedPlayerB:{},
            data:[{
                name:'Adarsh',
                won:'5',
                id:'1'
            },{
                name:'Ishaan',
                won:'9',
                id:'2'
            },{
                name:'Amrit',
                won:'3',
                id:'3'
            },{
                name:'Sunil',
                won:'8',
                id:'4'
            },{
                name:'Sarin',
                won:'6',
                id:'5'
            },{
                name:'Sarah',
                won:'10',
                id:'6'
            }]

        }
    }



    render(){
        return(
    <div className="container"> 
    <Row>
        <Col> <Typeahead
        {...this.state}
        labelKey="name"
        id="basic-example"
        onChange={selected => this.setState({selectedPlayerA:selected[0]})}
        options={this.state.data}
        placeholder="Player First"
      />
       </Col>
        <Col>
        <Typeahead
        {...this.state}
        labelKey="name"
        id="basic-example"
        onChange={selected => this.setState({ selectedPlayerB:selected[0]})}
        options={this.state.data}
        placeholder="Player Second"
      />
        </Col>
    </Row>
    <Row>
        <Col><Button
        variant="dark"
        color="default"
        size="sm"
        style={{margin:'1em'}}
      >
        Compare
      </Button></Col>
    </Row>
    </div>);
    }
    
}