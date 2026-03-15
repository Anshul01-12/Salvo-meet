import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiStar, FiUsers, FiShield, FiHeart, FiVideo, FiMessageCircle, FiZap, FiMapPin, FiArrowRight } from 'react-icons/fi';
import './Home.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share';

const Home = () => {
  const features = [
    { icon: <FiHeart />, title: 'Smart Matching', desc: 'AI-powered algorithm finds your perfect partner based on interests.' },
    { icon: <FiVideo />, title: 'Video Calls', desc: 'Connect face-to-face with HD video calling before meeting.' },
    { icon: <FiShield />, title: 'Verified Profiles', desc: 'Every profile is verified for genuine connections.' },
    { icon: <FiMessageCircle />, title: 'Private Chat', desc: 'End-to-end encrypted messaging for your privacy.' },
    { icon: <FiMapPin />, title: 'Nearby Matches', desc: 'Discover matches near you with location discovery.' },
    { icon: <FiZap />, title: 'Instant Match', desc: 'Get notified instantly when someone likes you back!' },
  ];

  const reviews = [
    { name: 'Priya S.', rating: 5, text: 'Found my soulmate here! The matching algorithm is incredible.', avatar: 'P' },
    { name: 'Rahul M.', rating: 4, text: 'Great app with genuine profiles. Highly recommend for serious dating.', avatar: 'R' },
    { name: 'Ananya K.', rating: 4, text: 'Love the video call feature! Makes connecting so much easier.', avatar: 'A' },
    { name: 'Vikram D.', rating: 5, text: 'Best dating app in India. Clean interface and real people.', avatar: 'V' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FiShield /> Trusted by 350K+ Users
            </div>
            <h1>Find Your <span>Perfect Match</span> Today</h1>
            <p className="hero-tagline">Dating & Video Chat</p>
            <p>Salvo Meet is India's most loved 18+ dating & video chat app. Connect with real people, build meaningful relationships, and find love — all in one place.</p>
            <div className="hero-buttons">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <FiDownload /> Download Now
              </a>
              <Link to="/features" className="btn btn-outline btn-lg">
                Explore Features <FiArrowRight />
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <FiDownload className="stat-icon" />
                <div>
                  <strong>350K+</strong>
                  <span>Downloads</span>
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <FiStar className="stat-icon" />
                <div>
                  <strong>3.7</strong>
                  <span>Play Store Rating</span>
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <FiUsers className="stat-icon" />
                <div>
                  <strong>18+</strong>
                  <span>Dating App</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <span className="phone-logo">Salvo Meet - Dating & Video Chat</span>
                </div>
                <div className="phone-card">
                  <div className="phone-avatar"></div>
                  <div className="phone-name">Sarah, 24</div>
                  <div className="phone-bio">Loves travel & photography</div>
                  <div className="phone-actions">
                    <button className="phone-btn phone-btn-skip">✕</button>
                    <button className="phone-btn phone-btn-like">♥</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card card-1">
              <FiHeart className="fc-icon" /> New Match!
            </div>
            <div className="floating-card card-2">
              <FiMessageCircle className="fc-icon" /> "Hey! 👋"
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-number">350K+</div>
            <div className="stat-label">App Downloads</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3.7 ★</div>
            <div className="stat-label">Play Store Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Matches Made</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose <span>Salvo Meet?</span></h2>
          <p className="section-subtitle">Discover all the amazing features that make Salvo Meet the best dating app for genuine connections.</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="features-cta">
            <Link to="/features" className="btn btn-primary">
              View All Features <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-section">
        <div className="container">
          <h2 className="section-title">How <span>It Works</span></h2>
          <p className="section-subtitle">Getting started with Salvo Meet is easy! Just 3 simple steps to find your match.</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Create Profile</h3>
              <p>Sign up and create your profile with photos and interests to stand out.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Discover Matches</h3>
              <p>Browse through verified profiles and find people who share your interests.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Start Dating</h3>
              <p>Chat, video call, and plan your first date with your perfect match!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews-section">
        <div className="container">
          <h2 className="section-title">What Our <span>Users Say</span></h2>
          <p className="section-subtitle">Real stories from real people who found their match on Salvo Meet.</p>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-stars">
                  {[...Array(5)].map((_, j) => (
                    <FiStar key={j} className={j < r.rating ? 'star-filled' : 'star-empty'} />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.avatar}</div>
                  <span className="review-name">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Find <span>Your Match?</span></h2>
          <p>Join 350K+ users who found meaningful connections on Salvo Meet - Dating & Video Chat. Download now and start your love journey today!</p>
          <div className="cta-buttons">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
              <FiDownload /> Download from Play Store
            </a>
          </div>
          <div className="cta-rating">
            <div className="cta-stars">
              <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
            </div>
            <span>Rated 3.7 on Google Play Store</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
