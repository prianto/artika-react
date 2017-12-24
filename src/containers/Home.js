import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Home.css';
import preview_jpg from '../assets/img/preview.jpg';

import Data from '../data';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Slider } from '../components/Siema';
import Portfolio from '../components/Portfolio';

/**
 * Component: Home.Main
 */
class Main extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      preparedArticles: null
    };
  }

  componentWillMount() {
    const dataArticles = Data.articles;
    const preparedArticles = [];
    dataArticles.forEach(function(item) {
      preparedArticles.push(
        <Portfolio
          dataImage={item.image}
          dataTitle={item.title}
          dataAuthor={item.author}
          dataCategory={item.category}
          dataPublished={item.published}
          dataExcerpt={item.excerpt}
        />
      );
    });
    this.setState({preparedArticles: preparedArticles});
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Slider />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.preparedArticles}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component: Home.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta name="author" content="@prianto" />
          <meta property="og:title" content="Welcome - Artika React: Single-page Application (SPA) Template" />
          <meta property="og:description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta property="og:image" content={preview_jpg} />
          <meta property="og:url" content="https://artika-react.herokuapp.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Artika React" />
          <title>Welcome - Artika React: Single-page Application (SPA) Template</title>
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

const Home = {Main, Page};

export default Home;
