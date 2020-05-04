import React from 'react';

//Components
import GamesNStreams from '../components/GamesStreams';
import Services from '../components/Services';
import Favorites from '../components/Favorites';
import Team from '../components/Team';
import Contact from '../components/Contact';

const MainPage = () => {

    const topGames = [
        {
          title: 'Threads',
          caption: 'Illustration'
        },
        {
          title: 'Explore',
          caption: 'Graphic Design'
        },
        {
          title: 'Finish',
          caption: 'Identity'
        },
        {
          title: 'Lines',
          caption: 'Branding'
        },
        {
          title: 'Southwest',
          caption: 'Website Design'
        },
        {
          title: 'Window',
          caption: 'Photography'
        },
        {
          title: 'Pizza',
          caption: 'I love pizza!'
        }
      ]

    return(
        <div>
          <header className="masthead" id="page-top">
            <div className="container">
              <div className="intro-text">
                <div className="intro-lead-in">Welcome To Create A Fierce Competition!</div>
                <div className="intro-heading text-uppercase">Let's Fight COVID</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
              </div>
            </div>
          </header>
          <Services></Services>
          <GamesNStreams gamesStreams={topGames}></GamesNStreams>
          <Favorites></Favorites>     
          <Team></Team>
          <Contact></Contact>
          </div>
    );

}

export default MainPage;