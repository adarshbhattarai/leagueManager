import React, { Component } from 'react'
export default class Favorites extends Component{
    render(){
        return(
            <section className="page-section" id="favorites">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Favorites</h2>
                  <h3 className="section-subheading text-muted">Highly Rated Games. Play an excellent game so that your name comes up here</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>June 2017</h4>
                          <h4 className="subheading">Treezz Vs Kamil</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">A great comback from kamil in the second half. He was 3-0 down on the first half and by the twist of turn he scored magnificient 4 goals and all three from Salah. What a match!!</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>Dec 2018</h4>
                          <h4 className="subheading">Emerging player sp2959</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">No one had speculated this magnificient lad coming to take over the title playing against the defending champion Treekezz. Brilliant game by a 19 year old. The match was over for Treekezz when this young lad score 4 in 40 mins. Yay !,,!</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>June 2019</h4>
                          <h4 className="subheading">amrit008 vs sp2959</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Our defending champion is back again this year. Watch out this incredible game between the two. How incredible both players were and how tight the game was. It's 5-5 fulltime. Watch who wins. </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>Feb 2020</h4>
                          <h4 className="subheading">Liv34234 vs Bar213na</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Semifinal game for Liv34234 was devastating.3-0 down was truly shattering for Liv34234. Watch out how Liv34234 overcame the 3-0 loss and win to win it on aggregate by 5-3. Can you believe that. Check out for yourself. </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <h4>Be Part
                          <br/>Of Our
                          <br/>Story!</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );

    }
}