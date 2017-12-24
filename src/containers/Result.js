import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import './Result.css';
import preview_jpg from '../assets/img/preview.jpg';

import Data from '../data';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

/**
 * Component: Result.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedResults: null
    };
  }

  componentWillMount() {
    const dataResults = Data.results;
    const preparedResults = [];

    let i = 0;

    dataResults.forEach(function(item){
      preparedResults.push(
        <div className="post-preview">
          <h4>
            <NavLink to="post">{item.title}</NavLink>
          </h4>
          <small className="post-meta">
            <NavLink to="post">{item.author}</NavLink>,&nbsp;
            <NavLink to="category">{item.category}</NavLink>,&nbsp;
            <NavLink to="post">{item.published}</NavLink>
          </small>
          <p>
            {item.excerpt}
          </p>
        </div>
      );
      if(i < (dataResults.length - 1)) {
        preparedResults.push(<hr/>);
      }
      i++;
    });
    this.setState({preparedResults: preparedResults});
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="mb-4">Search</h1>
            <form name="sentKeyword">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Please type keywords..." />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </form>
            {this.state.preparedResults}
          </div>
        </div>
        <Pagination dataHref="result" />
      </div>
    );
  }
}

/**
 * Component: Result.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta name="author" content="@prianto" />
          <meta property="og:title" content="Search - Artika React: Single-page Application (SPA) Template" />
          <meta property="og:description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta property="og:image" content={preview_jpg} />
          <meta property="og:url" content="https://artika-react.herokuapp.com/result" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Artika React" />
          <title>Search - Artika React: Single-page Application (SPA) Template</title>
        </Helmet>
        <Menu />
        <main id="panel">
          <div id="panel-content">
            <Navbar />
            <Main />
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

const Result = {Main, Page};

export default Result;
