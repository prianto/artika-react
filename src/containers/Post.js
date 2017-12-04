import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import DOMPurify from 'dompurify';

import './Post.css';
import preview_jpg from '../assets/img/preview.jpg';

import Data from '../data';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Component: Post.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedArticle: null
    };
  }

  componentWillMount() {
    const dataArticle = Data.article;
    this.setState({preparedArticle: dataArticle});
  }

  render() {
    return (
      <article>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <h1>{this.state.preparedArticle.title}</h1>
              <small class="post-meta">
                <NavLink to="post">{this.state.preparedArticle.title}</NavLink>,&nbsp;
                <NavLink to="category">{this.state.preparedArticle.category}</NavLink>,&nbsp;
                <NavLink to="post">{this.state.preparedArticle.published}</NavLink>
              </small>
              <p class="subtitle">{this.state.preparedArticle.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.preparedArticle.content) }} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

/**
 * Component: Post.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta name="author" content="@prianto" />
          <meta property="og:title" content="Post - Artika React: Single-page Application (SPA) Template" />
          <meta property="og:description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta property="og:image" content={preview_jpg} />
          <meta property="og:url" content="https://artika-react.herokuapp.com/post" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Artika React" />
          <title>Post - Artika React: Single-page Application (SPA) Template</title>
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

const Post = {Main, Page};

export default Post;
