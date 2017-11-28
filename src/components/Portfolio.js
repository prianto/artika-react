import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//import '../qazy.min.js';
import './Portfolio.css';
import dummy_png from '../assets/img/dummy.png';

/**
 * Component: Portfolio
 * Props: dataImage, dataAuthor, dataCategory, dataPublished, dataExcerpt
 */
class Portfolio extends Component
{
  componentDidMount() {
    /*
    Lazy images
    */
    var lazy = document.getElementsByClassName('lazy');
    if(lazy.length){
      for (var i=0; i < lazy.length; i++) {
        var lazyDataSrc = lazy[i].getAttribute('data-src');
        if(lazyDataSrc) {
          lazy[i].setAttribute('src', lazyDataSrc);
        }
      }
    }
  }

  render() {
    return (
      <div class="col-12 col-sm-6 portfolio-item">
        <div class="card h-100">
          <NavLink to="post">
            <img class="card-img-top lazy" src={dummy_png} data-src={this.props.dataImage} alt="" />
          </NavLink>
          <div class="card-body">
            <h4 class="card-title">
              <NavLink to="post">{this.props.dataTitle}</NavLink>
            </h4>
            <small class="post-meta">
              <NavLink to="post">{this.props.dataAuthor}</NavLink>,&nbsp;
              <NavLink to="category">{this.props.dataCategory}</NavLink>,&nbsp;
              <NavLink to="post">{this.props.dataPublished}</NavLink>
            </small>
            <p class="card-text">{this.props.dataExcerpt}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
