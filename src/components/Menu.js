import React, { Component } from 'react';
import Slideout from 'slideout';

import './Menu.css';

import MenuItem from './MenuItem';
import Data from '../data';

/**
 * Component: Menu
 */
class Menu extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedMenu: null
    }
  }

  componentDidMount() {
    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });

    document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
    });
  }

  componentWillMount() {
    const dataMenu = Data.menu;
    const preparedMenu = [];
    dataMenu.forEach(function (item) {
      preparedMenu.push(<MenuItem dataHref={item.href} dataIcon={item.icon} dataLabel={item.label} />);
    });
    this.setState({preparedMenu: preparedMenu});
  }

  render() {
    return (
      <nav id="menu">
        <ul className="navbar-nav ml-auto">
          {this.state.preparedMenu}
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/prianto/artika-react" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-cloud-download" aria-hidden="true"></i>&nbsp; Download
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
