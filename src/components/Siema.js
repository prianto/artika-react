import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Siema from 'siema';

import './Siema.css';

import Data from '../data';

/**
 * Component: Slide
 * Props: dataImage, dataTitle
 */
class Slide extends Component
{
  render() {
    return(
      <div className="siema-slide">
        <img src={this.props.dataImage} alt="" />
        <div className="siema-caption">
          <h4>
            <NavLink to="post">
              {this.props.dataTitle}
            </NavLink>
          </h4>
        </div>
      </div>
    );
  }
}

/**
 * Component: Slider
 */
class Slider extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedSiema: null
    };
  }

  componentWillMount() {
    const dataSlides = Data.slides;
    const preparedSiema = [];
    dataSlides.forEach(function(item){
      preparedSiema.push(<Slide dataImage={item.image} dataTitle={item.title} />);
    });
    this.setState({preparedSiema: preparedSiema});
  }

  componentDidMount() {
    new Siema({
      selector: '.siema-container',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false
    });
  }

  render() {
    return (
      <div className="siema-container">
        {this.state.preparedSiema}
      </div>
    );
  }
}

export {Slide, Slider};
