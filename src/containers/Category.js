import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Category.css';
import preview_jpg from '../assets/img/preview.jpg';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Data from '../data';
import Portfolio from '../components/Portfolio';
import Pagination from '../components/Pagination';

/**
 * Component: Category.Main
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
      <div className="container">
        <h1 className="mb-4">Category: <small>Nature &amp; Culture</small></h1>
        <div className="row">
          {this.state.preparedArticles}
        </div>
        <Pagination dataHref="category" />
      </div>
    );
  }
}

/**
 * Component: Category.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta name="author" content="@prianto" />
          <meta property="og:title" content="Category - Artika React: Single-page Application (SPA) Template" />
          <meta property="og:description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta property="og:image" content={preview_jpg} />
          <meta property="og:url" content="https://artika-react.herokuapp.com/category" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Artika React" />
          <title>Category - Artika React: Single-page Application (SPA) Template</title>
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

const Category = {Main, Page};

export default Category;
