import React, { useState, useEffect } from 'react'

export default () => {
    const [header, setHeader] = useState("navbar navbar-expand-lg navbar-dark fixed-top" + 
                    (window.location.pathname===process.env.PUBLIC_URL+"/" ?"" : " navbar-shrink"));
    
    const listenScrollEvent = (event) => {
        if (window.scrollY < 110 && window.location.pathname===process.env.PUBLIC_URL+"/") {
          return setHeader("navbar navbar-expand-lg navbar-dark fixed-top")
        } else if (window.scrollY > 100) {
          return setHeader("navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink")
        } 
      }
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);


    return (
<nav className={header} id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href={process.env.PUBLIC_URL+"/"}>Soccer League Manager</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href={process.env.PUBLIC_URL+"/#services"}>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href={process.env.PUBLIC_URL+"/#gamesstreams"}>Streams</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href={process.env.PUBLIC_URL+"/#favorites"}>Favorites</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href={process.env.PUBLIC_URL+"/#team"}>Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href={process.env.PUBLIC_URL+"/#contact"}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}