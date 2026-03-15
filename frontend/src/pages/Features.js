import React from 'react';
import { FiHeart, FiVideo, FiShield, FiMessageCircle, FiMapPin, FiZap, FiCamera, FiStar, FiDownload, FiLock, FiSmartphone, FiBell } from 'react-icons/fi';
import './Features.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share';

const Features = () => {
  const allFeatures = [
    { icon: <FiHeart />, title: 'Smart Matching', desc: 'Our AI-powered algorithm analyzes your interests, preferences, and behavior to find the most compatible matches for you. No more endless swiping!', tag: 'Popular' },
    { icon: <FiVideo />, title: 'HD Video Calls', desc: 'Connect face-to-face before meeting in person. Our crystal-clear video calling feature helps you build trust and chemistry.', tag: 'New' },
    { icon: <FiShield />, title: 'Verified Profiles', desc: 'Every user goes through our verification process. Look for the verified badge to ensure you are connecting with real people.', tag: 'Safety' },
    { icon: <FiMessageCircle />, title: 'Private Messaging', desc: 'End-to-end encrypted chats keep your conversations completely private. Share text, photos, and voice messages securely.', tag: null },
    { icon: <FiMapPin />, title: 'Location Discovery', desc: 'Find matches near you with our smart location-based discovery. Set your preferred radius and discover people in your area.', tag: null },
    { icon: <FiZap />, title: 'Instant Notifications', desc: 'Never miss a match! Get real-time notifications when someone likes your profile, sends a message, or matches with you.', tag: 'Popular' },
    { icon: <FiCamera />, title: 'Photo Verification', desc: 'Our selfie verification system ensures profile photos are genuine. Take a real-time selfie to earn your verified badge.', tag: 'Safety' },
    { icon: <FiStar />, title: 'Super Likes', desc: 'Stand out from the crowd by sending Super Likes. Let someone know you are really interested and boost your visibility.', tag: null },
    { icon: <FiLock />, title: 'Incognito Mode', desc: 'Browse profiles privately with Incognito Mode. Only people you like will see your profile — total control over your privacy.', tag: 'Premium' },
    { icon: <FiSmartphone />, title: 'Seamless Experience', desc: 'Buttery smooth interface designed for the best mobile experience. Fast, intuitive, and beautiful on any device.', tag: null },
    { icon: <FiBell />, title: 'Daily Picks', desc: 'Receive curated daily recommendations handpicked by our algorithm based on your evolving preferences.', tag: 'New' },
    { icon: <FiHeart />, title: 'Compatibility Score', desc: 'See how compatible you are with potential matches through our detailed compatibility scoring system.', tag: 'Popular' },
  ];

  return (
    <div className="features-page">
      {/* Hero */}
      <section className="features-hero">
        <div className="container">
          <h1>Powerful <span>Features</span></h1>
          <p>Everything you need to find your perfect match — all in one app.</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <div className="features-page-grid">
            {allFeatures.map((f, i) => (
              <div className="feature-page-card" key={i}>
                {f.tag && <div className={`feature-tag tag-${f.tag.toLowerCase()}`}>{f.tag}</div>}
                <div className="feature-page-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section comparison-section">
        <div className="container">
          <h2 className="section-title">Why <span>Salvo Meet</span> Stands Out</h2>
          <p className="section-subtitle">See how we compare to other dating apps.</p>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight-col">Salvo Meet</th>
                  <th>Other Apps</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Verified Profiles</td><td className="highlight-col">✅ Yes</td><td>❌ Rarely</td></tr>
                <tr><td>Video Calling</td><td className="highlight-col">✅ HD Quality</td><td>⚠️ Basic</td></tr>
                <tr><td>End-to-End Encryption</td><td className="highlight-col">✅ Always</td><td>❌ No</td></tr>
                <tr><td>AI Matching</td><td className="highlight-col">✅ Advanced</td><td>⚠️ Basic</td></tr>
                <tr><td>Free Messaging</td><td className="highlight-col">✅ Unlimited</td><td>❌ Limited</td></tr>
                <tr><td>Incognito Mode</td><td className="highlight-col">✅ Available</td><td>❌ No</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta-section">
        <div className="container features-cta-content">
          <h2>Experience All Features <span>Free!</span></h2>
          <p>Download Salvo Meet now and unlock a world of possibilities.</p>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
            <FiDownload /> Download Now — It's Free
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;
