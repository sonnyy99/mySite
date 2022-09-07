import React, { Component } from 'react';
import './hobbies.css';

class Hobbies extends Component {
  render() {
    return (
        <div>
          <h1>Hobbies</h1>
            <div class ="hobbie">
              <h3> Team Sports </h3>
              I love sports because they are good exercise and can be a group bonding experience.
              <br></br>
              <br></br>
              My favorite sports to play are Ultimate Frisbee and Basketball.
              <br></br>
              <br></br>
              <img src={process.env.PUBLIC_URL + '/images/UltiChampions.jpg'} style={{width: 600}} alt='Team Photo' />
            </div>


            <div class ="hobbie">
              <h3> Enjoying Nature </h3>
              When I want to relax, I like to head down to the beach or go for a walk.
              <br></br>
              <br></br>
              Here is one of my favourite spots!
              <br></br>
              <br></br>
              <img src={process.env.PUBLIC_URL + '/images/Beach.jpg'} width={600} height = {450} alt='Beach' />
              
            </div>
        </div>
    );
  }
}

export default Hobbies;
