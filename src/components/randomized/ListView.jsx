import React, { Component } from "react";


export default class ListView extends Component{
    render(){
        return(
            <ol className="list-group" style={{margin: 0, padding: 0}}>
            { this.props.listItems.map((item,index)=>(
            <li className="list-group-item" key={index} style={{textAlign: 'left', display:'list-item'  }}>{item}</li>
            ))
            }
            </ol>
        );
    };
} 