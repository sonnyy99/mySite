import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div class ="nameHeader">
          <h1> Sonny Young </h1>
        </div>

        <img src={process.env.PUBLIC_URL + "/images/Sunset.jpg"} style={{width: 500}} alt='Sunset' />

        <p>
          Hello! I'm a UBC Computer Science student soon to begin my 4th year.
          <br></br>
          <br></br>
          Feel free to contact me at sonnyy99@gmail.com to learn more about me.
        </p>   

        <a href="https://github.com/sonnyy99" target="_blank"> 
          <img border="0" alt="GitHub" src={process.env.PUBLIC_URL + "/images/GitHubLogo.png"}  width="50" height="50"/>
        </a>
            
        <a href="https://www.linkedin.com/in/sonnyyubc/" target="_blank"> 
          <img border="0" alt="LinkedIn" src={process.env.PUBLIC_URL + "/images/LinkedInLogo.png"} width="50" height="50"/>
        </a>

        <br></br>
        <br></br>
      </div>
      );
    }
  }
export default Home;