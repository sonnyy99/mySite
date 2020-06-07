import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="#home">
        Home
      </a>

      <a className="menu-item" href="#projects">
        Projects
      </a>

      <a className="menu-item" href="#hobbies">
        Hobbies
      </a>

    </Menu>
  );
};