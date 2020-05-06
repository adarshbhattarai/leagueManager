import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Services extends Component{
    //href="/"
    render(){
        return (
            <section className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">We Provide Following Services</h3>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                <Link className="services-link" data-toggle="modal"  to="/randomizer">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-random fa-stack-1x fa-inverse"></i>
                  </span>
                </Link>
                  <h4 className="service-heading">Player Randomizer</h4>
                  <p className="text-muted">Add and Shuffle Players into one or many groups. </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">Player History</h4>
                  <p className="text-muted">Search for a Player and Stalk Their Game Stats. You can look also look at your own History. You can also look up your games stat with that player</p>
                </div>
                <div className="col-md-4">
                <Link className="services-link" data-toggle="modal"  to="/organize">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-futbol-o fa-stack-1x fa-inverse"></i>
                  </span>
                  </Link>
                  <h4 className="service-heading">League Organizer</h4>
                  <p className="text-muted">Set the rule for win, loss, and draw features.</p>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Services;