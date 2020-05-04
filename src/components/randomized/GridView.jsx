import React from "react";
import ListView from "./ListView";

export default class GridView extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            groups:[]
        }
        this.createGroups=this.createGroups.bind(this);
    }

    componentDidMount() {
        this.createGroups(this);
   }
    createGroups(event){
        var items=this.props.items;
        var totalGroups = this.props.noOfGroups;
        var totalValuesInEachGroup =  parseInt(items.length/totalGroups);
        var allGroups=[]
        let i=0,namesProcessed=0;
        for(; i<totalGroups;i++){
            var groups = items.slice(namesProcessed,namesProcessed+totalValuesInEachGroup);
            namesProcessed+=totalValuesInEachGroup;
            allGroups.push(groups);
        }
        if(items.length%totalGroups>0){
            var remainingNames= items.length-namesProcessed;
            var index=items.length;
            var chunk=totalGroups;
            while(remainingNames-->0){
                allGroups[this.props.distributeRemaining?--chunk:chunk-1].push(items[--index]);
            }
        }
        this.setState({...this.state,groups:allGroups});
    }
    render(){
        return(<div className="row">
           
             { 
                 this.state.groups.map((item,index)=>(
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
