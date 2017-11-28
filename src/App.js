import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home';
import Category from './containers/Category';
import About from './containers/About';
import Contact from './containers/Contact';
import Result from './containers/Result';
import Post from './containers/Post';

class App extends Component
{
  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta property="og:site_name" content="Prianto" />
            <meta name="twitter:site" content="@prianto" />
          </Helmet>

          <Route exact path="/" component={Home.Page} />
          <Route path="/category" component={Category.Page} />
          <Route path="/about" component={About.Page} />
          <Route path="/contact" component={Contact.Page} />
          <Route path="/result" component={Result.Page} />
          <Route path="/post" component={Post.Page} />
        </div>
      </Router>
    );
  }
}

export default App;
