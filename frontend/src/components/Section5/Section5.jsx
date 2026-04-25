import React from 'react';
import './Section5.css';
import { FaHeart } from 'react-icons/fa';

// Placeholder images - Replace with your actual paths!
import process1 from './dt1.jpeg'; 
import process2 from './dt2.jpeg';
import process3 from './dt3.jpg';
import process4 from './dt6.png';

const Section5 = () => {
  const processData = [
    {
      id: '01',
      title: 'Place Request',
      desc: 'Patient or family securely requests medical care or supplies via the JOPANA platform.',
      image: process1
    },
    {
      id: '02',
      title: 'Get Assigned',
      desc: 'Our system instantly assigns the nearest verified professional or supply partner to your case.',
      image: process2
    },
    {
      id: '03',
      title: 'Dispatch',
      desc: 'The required medicine, medical equipment, or certified caregiver is dispatched immediately.',
      image: process3
    },
    {
      id: '04',
      title: 'Deliver',
      desc: 'Professional service and essential care arrive at the patient\'s doorstep in minimal time.',
      image: process4
    }
  ];

  return (
    <section className="sec5-section">
      <div className="sec5-container">
        
        {/* Header Area */}
        <div className="sec5-header-area">
          <div className="sec5-badge">
            <FaHeart className="sec5-badge-icon" /> HOW IT WORKS
          </div>
          <h2 className="sec5-heavy-heading">
            <span className="sec5-text-dark">Simple Process We</span> <br />
            <span className="sec5-text-teal">Follow For Medical Care</span>
          </h2>
        </div>

        {/* Process Steps Area */}
        <div className="sec5-process-wrapper">
          {/* The dotted connecting line */}
          <div className="sec5-connecting-line"></div>

          <div className="sec5-steps-grid">
            {processData.map((step, index) => (
              <div className="sec5-step-item" key={index}>
                
                {/* Image and Number Badge */}
                <div className="sec5-hexagon-wrapper">
                  <div className="sec5-step-number">{step.id}</div>
                  <img src={step.image} alt={step.title} className="sec5-hexagon-img" />
                </div>
                
                {/* Text Content */}
                <h3 className="sec5-step-title">{step.title}</h3>
                <p className="sec5-step-desc">{step.desc}</p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section5;