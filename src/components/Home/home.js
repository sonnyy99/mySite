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
        <div class ="mainText">
          <p>
            Hello! I'm a 4th year Computer Science student studying at the University of British Columbia.
            <br></br>
            <br></br> 
            I am passionate about how technology can be used to improve people's lives.
            <br></br>
            <br></br>
            Feel free to reach out and learn more about me!
          </p>   
        
          <a href="mailto:sonnyy99@gmail.com">
            <img border="0" alt="Email" src={process.env.PUBLIC_URL + "/images/EmailIcon.png"} width="50" height="50"/>
          </a>  

          <a href="https://www.linkedin.com/in/sonnyyoung/" target="_blank"> 
            <img border="0" alt="LinkedIn" src={process.env.PUBLIC_URL + "/images/LinkedInLogo.png"} width="50" height="50"/>
          </a>
        </div>
        <br></br>
        <br></br>
      </div>
      );
    }
  }
export default Home;