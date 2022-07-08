import React from "react";
import Logo from "../assets/logo2.png";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
        <h4>Memory Game</h4>
      </div>
      <div className="points-container">
        <div>Score:{score}</div>
        <div>High Score:{highScore}</div>
      </div>
    </div>
  );
};

export default Header;
