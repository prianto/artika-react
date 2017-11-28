import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';

import './About.css';
import preview_jpg from '../assets/img/preview.jpg';

import Data from '../data';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Component: About.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedAbout: {}
    }
  }

  componentWillMount() {
    const dataAbout = Data.about;
    this.setState({preparedAbout: dataAbout});
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <h1>{this.state.preparedAbout.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.state.preparedAbout.content) }} />
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component: About.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta name="author" content="@prianto" />
          <meta property="og:title" content="About Us - Artika React: Single-page Application (SPA) Template" />
          <meta property="og:description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta property="og:image" content={preview_jpg} />
          <meta property="og:url" content="https://artika-react.herokuapp.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Artika HTML" />
          <title>About Us - Artika React: Single-page Application (SPA) Template</title>
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

const About = {Main, Page};

export default About;
