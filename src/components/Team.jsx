import React from 'react';
//Images
import sunil from '../assets/img/team/sunil.jpg';
import adarsh from '../assets/img/team/adarsh.jpg';
import amrit from '../assets/img/team/amrit.jpg';

class Team extends React.Component{
    render(){
        return(
<section className="bg-light page-section" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 className="section-subheading text-muted">All this would not have been possible without our talented team members. Let's Gather together and embrace it </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={amrit} alt=""/>
                    <h4>Amrit Khatiwada</h4>
                    <p className="text-muted">Lead Mobile Developer</p>
                    <ul className="list-inline social-buttons">
                      <li className="list-inline-item">
                        <a href="https://mobile.twitter.com/amrit00977">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/amrit00977">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/amrit00977">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={sunil} alt=""/>
                    <h4>Sunil Parajuli</h4>
                    <p className="text-muted">Lead Content Creator</p>
                    <ul className="list-inline social-buttons">
                      <li className="list-inline-item">
                        <a href="https://mobile.twitter.com/sunilparajuli0">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/sunilparajuli0">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/sunilparajuli/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={adarsh} alt=""/>
                    <h4>Adarsh Bhattarai</h4>
                    <p className="text-muted">Lead Designer and Developer</p>
                    <ul className="list-inline social-buttons">
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/adarshbhattarai007/">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://github.com/adarshbhattarai/">
                          <i className="fa fa-github"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/adarsh-bhattarai-586785129/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Our team is constantly working on to provide the best platform you need to manage your league and gameplay. If you have any questions or queries, feel free to reach out to us in any social media platform or by leaving a message below.</p>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Team;
