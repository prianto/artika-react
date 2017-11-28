import React, { Component } from 'react';

import './Footer.css';

/**
 * Component: FooterIcon
 * Props: dataHref, dataIcon
 */
class FooterIcon extends Component
{
  render() {
    return (
      <li class="list-inline-item">
        <a target="_blank" href={this.props.dataHref} rel="noopener noreferrer">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class={`fa ${this.props.dataIcon}  fa-stack-1x fa-inverse`}></i>
          </span>
        </a>
      </li>
    );
  }
}

/**
 * Component: Footer
 */
class Footer extends Component
{
  render() {
    const thisYear = new Date().getFullYear();
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <p class="copyright text-muted">
                Copyright &copy; {thisYear}
              </p>
              <ul class="list-inline text-center">
                <FooterIcon dataHref="https://twitter.com" dataIcon="fa-twitter" />
                <FooterIcon dataHref="https://github.com" dataIcon="fa-github" />
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
