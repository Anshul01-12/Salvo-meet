import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import logo from '../assets/logo.png';
import './Header.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Salvo Meet - Dating & Video Chat" className="logo-img" />
          <span className="logo-text">Salvo<span>Meet</span></span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features</Link>
          <Link to="/privacy" className={`nav-link ${location.pathname === '/privacy' ? 'active' : ''}`}>Privacy</Link>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-btn">
            <FiDownload /> Download
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
