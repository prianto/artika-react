import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo_png from '../assets/img/logo.png';

import Data from '../data';
import MenuItem from './MenuItem';

/**
 * Component: Navbar
 */
class Navbar extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedMenu: null
    }
  }

  componentWillMount() {
    const dataMenu = Data.menu;
    const preparedMenu = [];
    dataMenu.forEach(function(item){
      preparedMenu.push(<MenuItem dataHref={item.href} dataIcon={item.icon} dataLabel={item.label} />);
    });
    this.setState({preparedMenu: preparedMenu});
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img src={logo_png} alt="" />
          </NavLink>
          <button className="navbar-toggler navbar-toggler-left toggle-button" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {this.state.preparedMenu}
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/prianto/artika-react" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-cloud-download" aria-hidden="true"></i>&nbsp; Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
