import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Pagination.css';

/**
 * Component: Navbar
 * Props: dataHref
 */
class Pagination extends Component
{
  render() {
    return(
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <NavLink to={this.props.dataHref} className="page-link">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Prev</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink to={this.props.dataHref} className="page-link">1</NavLink>
        </li>
        <li className="page-item active">
          <NavLink to={this.props.dataHref} className="page-link">2</NavLink>
        </li>
        <li className="page-item">
          <NavLink to={this.props.dataHref} className="page-link">3</NavLink>
        </li>
        <li className="page-item">
          <NavLink to={this.props.dataHref} className="page-link">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Pagination;
