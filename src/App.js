import React, { Component } from 'react';
import { Button, WingBlank, Flex } from 'antd-mobile';
import logo from './logo.svg';
import './App.css';
//import { DistrictSelectortWrapper } from './districtSelector';
import { RoomSelectortWrapper } from './roomSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://images.clickfunnels.com/c1/f69681499411e7855f5dca53cab33b/logo-.jpg" className="App-logo" alt="logo" />
          <h2>Match WELL. Match FAST. Match at DREAM COST.</h2>
        </div>
        <RoomSelectortWrapper/>
        <p className="App-intro">
          So.... What is HoMatching all about?<br />

          And Why do WE even CARE?<br />

          Have you ever wondered managing property with just one click?<br />
           Just like washing your clothes by pressing the start button on the washing machine?<br />

          Well, HoMatching is a real estate app that works on the same concept.<br />

          Whether you are looking to buy or sell a house, finding a place to rent, or hoping to earn some cash from leasing your property, HoMatching is what you need!<br />

          It is a simple tool which seeks to MATCH ALL types of housing services between YOU and OTHER users.<br />

          HoMatching aims for 3 things; Match well. Match fast. Match at dream cost.<br />
        </p>
      </div>
    );
  }
}

export default App;
