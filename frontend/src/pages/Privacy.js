import React from 'react';
import { FiShield, FiLock, FiEye, FiDatabase, FiMail, FiDownload } from 'react-icons/fi';
import './Privacy.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero */}
      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy <span>Policy</span></h1>
          <p>Your privacy is our top priority. Learn how we protect your data.</p>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="section">
        <div className="container">
          <div className="privacy-highlights">
            <div className="privacy-highlight-card">
              <FiShield className="ph-icon" />
              <h3>Your Data is Safe</h3>
              <p>We use industry-standard encryption to protect all your personal information.</p>
            </div>
            <div className="privacy-highlight-card">
              <FiLock className="ph-icon" />
              <h3>No Data Selling</h3>
              <p>We never sell your personal data to third parties. Your information stays with us.</p>
            </div>
            <div className="privacy-highlight-card">
              <FiEye className="ph-icon" />
              <h3>Full Transparency</h3>
              <p>We clearly explain what data we collect and how we use it. No hidden practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section privacy-content-section">
        <div className="container">
          <div className="privacy-content">
            <div className="privacy-block">
              <div className="privacy-block-icon"><FiDatabase /></div>
              <h2>Information We Collect</h2>
              <p>When you use Salvo Meet, we may collect the following information:</p>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, date of birth, gender, and profile photos you provide during registration.</li>
                <li><strong>Profile Data:</strong> Bio, interests, preferences, and other details you add to your profile.</li>
                <li><strong>Usage Data:</strong> How you interact with the app, including matches, messages sent, and features used.</li>
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.</li>
                <li><strong>Location Data:</strong> With your permission, we collect location data to provide location-based matching services.</li>
              </ul>
            </div>

            <div className="privacy-block">
              <div className="privacy-block-icon"><FiEye /></div>
              <h2>How We Use Your Information</h2>
              <p>Your information helps us provide and improve our services:</p>
              <ul>
                <li>To create and manage your account</li>
                <li>To match you with compatible users based on your preferences</li>
                <li>To enable communication between matched users</li>
                <li>To verify profiles and maintain community safety</li>
                <li>To send notifications about matches, messages, and app updates</li>
                <li>To improve our matching algorithms and app features</li>
                <li>To prevent fraud and ensure platform security</li>
              </ul>
            </div>

            <div className="privacy-block">
              <div className="privacy-block-icon"><FiShield /></div>
              <h2>Data Protection</h2>
              <p>We take extensive measures to protect your data:</p>
              <ul>
                <li>All data is encrypted in transit using SSL/TLS protocols</li>
                <li>Messages between users are end-to-end encrypted</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Strict access controls for our team members</li>
                <li>Data is stored on secure, certified cloud infrastructure</li>
              </ul>
            </div>

            <div className="privacy-block">
              <div className="privacy-block-icon"><FiLock /></div>
              <h2>Your Rights</h2>
              <p>You have full control over your data:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of your personal data at any time</li>
                <li><strong>Correction:</strong> Update or correct your personal information</li>
                <li><strong>Deletion:</strong> Delete your account and all associated data</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
                <li><strong>Opt-out:</strong> Disable location tracking and notification preferences</li>
              </ul>
            </div>

            <div className="privacy-block">
              <div className="privacy-block-icon"><FiMail /></div>
              <h2>Contact Us</h2>
              <p>If you have any questions about our privacy practices or want to exercise your data rights, please contact us:</p>
              <div className="contact-info">
                <p><strong>Email:</strong> support@salvomeet.com</p>
                <p><strong>Address:</strong> India</p>
              </div>
              <p className="privacy-update">Last updated: March 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="privacy-cta">
        <div className="container privacy-cta-content">
          <h2>Your Safety, <span>Our Promise</span></h2>
          <p>Download Salvo Meet and experience dating with complete peace of mind.</p>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <FiDownload /> Download Salvo Meet
          </a>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
