import  React, {Component} from "react";
import OrganizeWithGroups from "../components/organizerComponents/OrganizeWithGroups";
import OrganizeWithoutGroups from "../components/organizerComponents/OrganizeWithoutGroups";


export default class Organizer extends Component{

    constructor(props){
        super(props);
        this.state=props.location.state;
    }

    render(){
        if(this.state==null){
            return <OrganizeWithoutGroups></OrganizeWithoutGroups>
        }
        else return <OrganizeWithGroups groups={this.state.groups.groupedItems} location={this.props.location}></OrganizeWithGroups>
    }
}