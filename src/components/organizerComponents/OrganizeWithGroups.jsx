import React from "react";
import { Form, Col,Row } from 'react-bootstrap'; 
import OrganizeWithoutGroups from "./OrganizeWithoutGroups";
import GridView from "../randomized/GridView";
import './Org.css'


export default class OrganizeWithGroups extends React.Component{

    render(){
        if(this.props==null)
        return(<OrganizeWithoutGroups/>)
        return(
            <section className="bg-light page-section" id="fullHeight">
                <div className="container">
               <div className="row">
                   <div className="col-lg-12 text-center">
                   <h2 className="section-heading text-uppercase">Create New League</h2>
                   <h3 className="section-subheading text-muted">Organize League here</h3>
                
                   <Form className='col-md-9 center'> 
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2} >
                            League Name
                            </Form.Label>
                            <Col sm={10}  className='col-md-3 center'>
                            <Form.Control type="email" placeholder="League Name" />
                            </Col>
                        </Form.Group>
                    </Form>
                   </div>
               </div>
                <GridView groupedItems={this.props.groups}></GridView>
                </div>
           </section>
        )
    }
}