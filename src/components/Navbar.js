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
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container-fluid">
          <NavLink to="/" class="navbar-brand">
            <img src={logo_png} alt="" />
          </NavLink>
          <button class="navbar-toggler navbar-toggler-left toggle-button" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              {this.state.preparedMenu}
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/prianto/artika-react" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-cloud-download" aria-hidden="true"></i>&nbsp; Download
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
