import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
// import './Example.scss';

export class Example extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="Example">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Link to="/Example2" className="pure-menu-link">this is Example, click to Example2</Link>
          </p>
        </header>
      </div>
    );
  }
}

