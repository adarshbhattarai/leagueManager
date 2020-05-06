import React from "react";
import ListView from "./ListView";

export default class GridView extends React.Component{
    render(){
        return(<div className="row">
           
             { 
                 this.props.groupedItems.map((item,index)=>(
                <div className="col-md-4 col-sm-6 gamesstreams-item" style={{marginTop:'1em'}}  key={index}>
                    <div className="border border-secondary">
                    <div className="gamesstreams-caption border border-success" >
                            <p className="text-muted">Group { index +1 }</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ListView listItems={item}/>
                    </div>
                    </div>
                 </div>
                 ))
            }
        </div>);
    }
}
