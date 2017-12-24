import React from 'react';
import { NavLink } from 'react-router-dom';

import './MenuItem.css';

/**
 * Component: MenuItem
 * Props: dataHref, dataIcon, dataLabel
 */
class MenuItem extends React.Component
{
  render() {
    return (
      <li className="nav-item">
        <NavLink to={this.props.dataHref} className="nav-link">
          <i className={`fa ${this.props.dataIcon} fa-fw`} aria-hidden="true"></i>&nbsp; {this.props.dataLabel}
        </NavLink>
      </li>
    );
  }
}

export default MenuItem;
