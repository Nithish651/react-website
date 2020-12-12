import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button.js";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure news letter to receive our best vacation deals!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">careers</Link>
            <Link to="/sign-up">Terms of service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to="/sign-up">Contact</Link>
            <Link to="/sign-up">Support</Link>
            <Link to="/sign-up">Destination</Link>
            <Link to="/sign-up">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Video</h2>
            <Link to="/sign-up">Submit video</Link>
            <Link to="/sign-up">Ambassador</Link>
            <Link to="/sign-up">Agency</Link>
            <Link to="/sign-up">Influencor</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Instagram</Link>
            <Link to="/sign-up">Facebook</Link>
            <Link to="/sign-up">Youtube</Link>
            <Link to="/sign-up">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              CAMP<i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">CAMP @ 2020</small>
          <div className="social-icons">
            <Link
              to="www.facebook.com"
              target="_blank"
              className="social-icon-link"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="www.instagram.com"
              target="_blank"
              className="social-icon-link"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="www.twitter.com"
              target="_blank"
              className="social-icon-link"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
