import React, { Component } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/home'
import Projects from './components/Projects/projects';
import Hobbies from './components/Hobbies/hobbies';

class App extends Component {
  render() {
    return (
      <div id = "App">
        <div id = "sidebar">
          <Sidebar></Sidebar>
        </div>

        <div id = "page-wrap">
          <div id = "home">
            <Home></Home>
          </div>

          <div id = "projects">
            <Projects></Projects>
          </div>

          <div id = "hobbies">
            <Hobbies></Hobbies>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
