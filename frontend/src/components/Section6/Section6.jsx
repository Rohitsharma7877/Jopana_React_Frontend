import React from 'react';
import './Section6.css';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';

// Placeholder image for the doctors on the right
import doctorsImg from './dt1.jpeg'; // Replace with a transparent PNG of doctors!

const Section6 = () => {
  return (
    <section className="sec6-section">
      
      {/* Top Dark Banner Area */}
      <div className="sec6-dark-banner">
        <div className="sec6-container">
          <div className="sec6-banner-content">
            
            {/* Left Side: Text and Buttons */}
            <div className="sec6-text-area">
              <div className="sec6-badge">
              <FaHeart className="sec6-badge-icon" /> BOOKING
              </div>
              <h2 className="sec6-heavy-heading">
                Caring For You, <br />
                <span className="sec6-text-teal">Care For Health</span>
              </h2>
              <p className="sec6-paragraph">
                Fugiat at voluptatem quo. Occaecati hic nulla corporis curabitur 
                facili quisque exercitation, labore vol Repreh enderit.
              </p>
              
              <div className="sec6-actions">
                <button className="sec6-btn-primary">GET APPOINTMENT</button>
                <button className="sec6-btn-outline">
                  <FaPhoneAlt className="sec6-phone-icon" /> +123 456 7890
                </button>
              </div>
            </div>

            {/* Right Side: Doctors Image */}
            <div className="sec6-image-area">
              <img src={doctorsImg} alt="Medical Professionals" className="sec6-doctors-img" />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Overlapping Appointment Box */}
      <div className="sec6-container">
        <div className="sec6-appointment-box">
          
          {/* Left Text in Box */}
          <div className="sec6-box-text">
            <h3>Let's Book Your Appointment !</h3>
            <p>Fugiat at voluptatem quo occaecati hic nulla corporis.</p>
          </div>

          {/* Right Form in Box */}
          <form className="sec6-booking-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="sec6-input" />
            <input type="email" placeholder="Your Email" className="sec6-input" />
            <input type="date" className="sec6-input" />
            
            <select className="sec6-input">
              <option value="">Select Service</option>
              <option value="dental">Dental Care</option>
              <option value="ortho">Orthopedic</option>
              <option value="neuro">Neurology</option>
            </select>
            
            <select className="sec6-input">
              <option value="">Select Doctor</option>
              <option value="taylor">Dr. George Taylor</option>
              <option value="smith">Dr. Jenny Smith</option>
            </select>
            
            <button type="submit" className="sec6-btn-submit">BOOK APPOINTMENT</button>
          </form>

        </div>
      </div>

    </section>
  );
};

export default Section6;