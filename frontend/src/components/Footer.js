import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiMail, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import logo from '../assets/logo.png';
import './Footer.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Salvo Meet - Dating & Video Chat" className="footer-logo-img" />
              <span className="logo-text">Salvo<span>Meet</span></span>
            </div>
            <p className="footer-tagline">Dating & Video Chat</p>
            <p className="footer-desc">
              India's most trusted 18+ dating app. Find real connections, meaningful relationships, and your perfect match.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FiInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter"><FiTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FiFacebook /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/features" className="footer-link">Features</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>

          <div className="footer-links-group">
            <h4>Download</h4>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="footer-link">Google Play Store</a>
            <span className="footer-link disabled">App Store (Coming Soon)</span>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <div className="footer-contact">
              <FiMail /> <span>support@salvomeet.com</span>
            </div>
            <div className="footer-contact">
              <FiMapPin /> <span>India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Salvo Meet - Dating & Video Chat. All rights reserved.</p>
          <p className="made-with">Made with <FiHeart className="heart-icon" /> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
