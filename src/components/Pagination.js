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
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <NavLink to={this.props.dataHref} class="page-link">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Prev</span>
          </NavLink>
        </li>
        <li class="page-item">
          <NavLink to={this.props.dataHref} class="page-link">1</NavLink>
        </li>
        <li class="page-item active">
          <NavLink to={this.props.dataHref} class="page-link">2</NavLink>
        </li>
        <li class="page-item">
          <NavLink to={this.props.dataHref} class="page-link">3</NavLink>
        </li>
        <li class="page-item">
          <NavLink to={this.props.dataHref} class="page-link">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Pagination;
