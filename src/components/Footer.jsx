import  React, { Component } from 'react';

export default class Footer extends Component{


    render(){
        return(
            <footer className="footer" id='footer'>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <span className="copyright">Copyright &copy; Danta Kuti 2020</span>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://twitter.com/dantakuti">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/Dantakuti">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/dantakuti/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline quicklinks">
                    <li className="list-inline-item">
                      <a href="#something">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}