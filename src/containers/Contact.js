import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Contact.css';
import preview_jpg from '../assets/img/preview.jpg';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Component: Contact.Main
 */
class Main extends Component
{
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="mb-1">Contact Us</h1>
            <p className="mb-1">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible.</p>
            <form name="sentMessage" id="contactForm">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Your Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" id="name" required />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Email Address" id="email" required />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Message</label>
                  <textarea rows="5" className="form-control" placeholder="Message" id="message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-secondary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component: Contact.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta name="author" content="@prianto" />
          <meta property="og:title" content="Contact - Artika React: Single-page Application (SPA) Template" />
          <meta property="og:description" content="Clean and responsive template built with React and Bootstrap. This theme features home page, category page, about page, contact page, search page, and post page." />
          <meta property="og:image" content={preview_jpg} />
          <meta property="og:url" content="https://artika-react.herokuapp.com/contact" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Artika React" />
          <title>Contact - Artika React: Single-page Application (SPA) Template</title>
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

const Contact = {Main, Page};

export default Contact;
