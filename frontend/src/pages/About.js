import React from 'react';
import { FiHeart, FiUsers, FiShield, FiTarget, FiAward, FiGlobe, FiDownload } from 'react-icons/fi';
import './About.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share';

const About = () => {
  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About <span>Salvo Meet</span></h1>
          <p>We're on a mission to help people find real, meaningful connections in a safe and trusted environment.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container about-story">
          <div className="story-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our <span>Story</span></h2>
            <p>Salvo Meet was born from a simple belief — everyone deserves to find genuine love and companionship. In a world full of superficial connections, we set out to create a platform where real people can form real bonds.</p>
            <p>Since our launch, we've grown to over <strong>350,000 downloads</strong> and continue to connect thousands of people every day. Our commitment to verified profiles, user safety, and meaningful matching sets us apart from the rest.</p>
            <p>As an <strong>18+ dating app</strong>, we ensure a mature, respectful community where adults can explore relationships with confidence and security.</p>
          </div>
          <div className="story-stats">
            <div className="about-stat-card">
              <FiDownload className="about-stat-icon" />
              <div className="about-stat-number">350K+</div>
              <div className="about-stat-label">Downloads</div>
            </div>
            <div className="about-stat-card">
              <FiUsers className="about-stat-icon" />
              <div className="about-stat-number">50K+</div>
              <div className="about-stat-label">Active Users</div>
            </div>
            <div className="about-stat-card">
              <FiHeart className="about-stat-icon" />
              <div className="about-stat-number">10K+</div>
              <div className="about-stat-label">Matches</div>
            </div>
            <div className="about-stat-card">
              <FiAward className="about-stat-icon" />
              <div className="about-stat-number">3.7★</div>
              <div className="about-stat-label">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our <span>Values</span></h2>
          <p className="section-subtitle">The principles that guide everything we do at Salvo Meet.</p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FiShield /></div>
              <h3>Safety First</h3>
              <p>We prioritize user safety with verified profiles, advanced moderation, and robust reporting systems to ensure a secure dating experience.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiHeart /></div>
              <h3>Genuine Connections</h3>
              <p>Our smart matching algorithm focuses on compatibility over superficial metrics, helping you find people who truly match your personality.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiTarget /></div>
              <h3>Privacy Matters</h3>
              <p>Your data is yours. We use industry-standard encryption and never share your personal information with third parties.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiGlobe /></div>
              <h3>Inclusive Community</h3>
              <p>Salvo Meet welcomes everyone. We celebrate diversity and strive to create an inclusive space for all adults seeking love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Vision */}
      <section className="section">
        <div className="container vision-section">
          <div className="vision-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our <span>Vision</span></h2>
            <p>We envision a world where finding love is not about luck, but about the right technology connecting the right people. At Salvo Meet, we're building the future of dating — one meaningful connection at a time.</p>
            <div className="vision-list">
              <div className="vision-item">
                <FiHeart className="vision-icon" />
                <span>Creating 1 million successful matches by 2027</span>
              </div>
              <div className="vision-item">
                <FiGlobe className="vision-icon" />
                <span>Expanding to 10+ countries across Asia</span>
              </div>
              <div className="vision-item">
                <FiShield className="vision-icon" />
                <span>Setting the gold standard for dating app safety</span>
              </div>
            </div>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '30px' }}>
              <FiDownload /> Join Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
