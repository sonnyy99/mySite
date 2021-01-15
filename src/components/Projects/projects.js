import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return (
        <div>
            <h1>Projects</h1>
                <div class ="project">
                    <h3> Food Delivery Web Application </h3>

                    My team and I built a database by modelling customers, restaurants, drivers, and orders.
                    <br></br>
                    <br></br>
                    We then formulated the SQL queries necessary to retrieve data to display to users.
                    <br></br>
                    <br></br>
                    Finally, we implemented functionality including user accounts, ordering food, and leaving reviews.
                    <br></br>
                    <br></br>

                    <h4> Technologies: MySQL, Node.js with Express, Vue.js, Git </h4>
                </div>
                
                <div class ="project">
                    <h3> Discord Server Bot </h3>

                    Discord is a voice chat application where rooms are open for multiple people to join at any time.
                    <br></br>
                    <br></br>
                    A problem my friends and I had was that we didn't know who joined a voice room without checking.
                    <br></br>
                    <br></br>
                    To solve this, I created a bot to give an auditory greeting with the person's name when they joined.
                    <br></br>
                    <br></br>
                    
                    <h4> Technologies: Node.js </h4>
                </div>
                
                <div class ="project">
                  <h3> Water Fountain Tracker </h3>

                  Often times at UBC I would need drinking water but wouldn't know where to get any near me.
                  <br></br>
                  <br></br>
                  To save time, I made this project to find the closest water fountain to my current location.
                  <br></br>
                  <br></br>
                  First, I represented water fountains and their locations using object-oriented programming in Java.
                  <br></br>
                  <br></br>
                  I then created a GUI using JavaFX allowing users to create, remove, and view the water fountains.

                  <h4> Technologies: JavaFX, JUnit, Git </h4>
                </div>
        </div>
    );
  }
}

export default Projects;
