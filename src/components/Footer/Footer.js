import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => (
  <footer className="footer">
    <div className="container" id="footer">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h3>Coin Search</h3>
          <p> Our mission is to inform the world with latest cryprocurrency data</p>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
            <li><a href="/about"><i className="fa fa-angle-double-right"></i>About</a></li>
            <li><a href="/discover"><i className="fa fa-angle-double-right"></i>Discover</a></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>My Works</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>My Github</a></li>
            <li><a href="https://my-portfolio-mattkim712.herokuapp.com/"><i className="fa fa-angle-double-right"></i>My Portfolio</a></li>

          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href="mailto:matt.kim712@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        
      </div>
      </div>
  </footer>
);

export default Footer;