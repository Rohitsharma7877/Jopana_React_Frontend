import React from 'react';
import './Footer.css';
import { 
  FaEnvelope, 
  FaPaperPlane, 
  FaChevronRight, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
import jopanaLogo from './jopanaLogo.png';

const Footer = () => {
  return (
    <footer className="sec9-footer">
      
      {/* Top Teal Newsletter Banner */}
      <div className="sec9-newsletter-banner">
        <div className="sec9-container sec9-newsletter-content">
          <div className="sec9-newsletter-text">
            <div className="sec9-mail-icon-wrapper">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="sec9-newsletter-title">Subscribe Our Newsletter</h3>
              <p className="sec9-newsletter-desc">Fugiat at voluptatem quo occaecati hic nulla corporis.</p>
            </div>
          </div>
          <div className="sec9-newsletter-form">
            <input type="email" placeholder="Your email address..." className="sec9-newsletter-input" />
            <button className="sec9-btn-subscribe">
              <FaPaperPlane className="sec9-plane-icon" /> SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main Dark Footer Area */}
      <div className="sec9-main-footer">
        <div className="sec9-container sec9-footer-grid">
          
          {/* Column 1: Overlapping Opening Hours Card */}
          <div className="sec9-hours-card">
            <h3 className="sec9-card-title">Opening Hours</h3>
            <p className="sec9-card-desc">Fugiat at voluptatem quo occaecati hic nulla corporis curabitur facili quisque.</p>
            
            <div className="sec9-time-row">
              <span className="sec9-days">Mon-Fri :</span>
              <span className="sec9-time">8AM - 10PM</span>
            </div>
            <div className="sec9-time-row">
              <span className="sec9-days">Sat-Sun :</span>
              <span className="sec9-time">7AM - 9PM</span>
            </div>
            
            <div className="sec9-emergency-text">
              24*7 Emergency Care Open
            </div>
            
            <div className="sec9-social-section">
              <p className="sec9-social-title">Follow our social media:</p>
              <div className="sec9-social-icons">
                <a href="#facebook" className="sec9-social-btn"><FaFacebookF /></a>
                <a href="#twitter" className="sec9-social-btn"><FaTwitter /></a>
                <a href="#linkedin" className="sec9-social-btn"><FaLinkedinIn /></a>
                <a href="#youtube" className="sec9-social-btn"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Medical Services */}
          <div className="sec9-services-column">
            <h3 className="sec9-footer-heading">Our Medical Services</h3>
            <ul className="sec9-services-list">
              <li><FaChevronRight className="sec9-chevron" /> Orthopedic</li>
              <li><FaChevronRight className="sec9-chevron" /> Medicine</li>
              <li><FaChevronRight className="sec9-chevron" /> Dentistry</li>
              <li><FaChevronRight className="sec9-chevron" /> Oncology Center</li>
              <li><FaChevronRight className="sec9-chevron" /> Cardiology</li>
              <li><FaChevronRight className="sec9-chevron" /> Neurology</li>
            </ul>
          </div>

          {/* Column 3: Clinic Contact Info */}
          <div className="sec9-contact-column">
            <h3 className="sec9-footer-heading">Clinic Contact Info</h3>
            <p className="sec9-contact-desc">
              Fugiat at voluptatem quo occaecati hic nulla corporis curabitur facili quisque.
            </p>
            <ul className="sec9-contact-list">
              <li>
                <FaMapMarkerAlt className="sec9-contact-icon" />
                <span>Location: 1234 Jopana Medical Tower, NY</span>
              </li>
              <li>
                <FaEnvelope className="sec9-contact-icon" />
                <span>Email: info@jopana.com</span>
              </li>
              <li>
                <FaPhoneAlt className="sec9-contact-icon" />
                <span>Phone: +123 456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="sec9-bottom-bar">
          <div className="sec9-container sec9-bottom-content">
            {/* --- REPLACED TEXT WITH IMAGE LOGO --- */}
            <div className="sec9-brand-logo">
              <img src={jopanaLogo} alt="Jopana Logo" className="sec9-logo-img" />
            </div>
            <div className="sec9-copyright">
              Copyright © 2026 <strong>JOPANA</strong>. All rights reserved.
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;