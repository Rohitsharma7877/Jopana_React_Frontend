import React from 'react';
import './AIBanner.css';
import { FiActivity } from 'react-icons/fi'; // Using a matching medical line-chart icon

const AIBanner = () => {
  return (
    <section className="aibanner-section">
      <div className="sec2-container">
        
        {/* Main Banner Box */}
        <div className="aibanner-box">
          
          {/* --- Background Decorative Circles --- */}
          <div className="aibanner-shapes">
            {/* Top right blurry circle */}
            <div className="shape-circle shape-top-right"></div>
            {/* Bottom center blurry circle */}
            <div className="shape-circle shape-bottom-center"></div>
            {/* Giant 3D pillowy circle on the right */}
            <div className="shape-circle shape-giant-right"></div>
          </div>

          {/* --- Foreground Content --- */}
          <div className="aibanner-content">
            <h2 className="aibanner-heading">
              AI Health Assistant
            </h2>
            <p className="aibanner-text">
              Not sure what care you need? Describe your symptoms and get care recommendations instantly.
            </p>
            <button className="aibanner-btn">
              <FiActivity className="aibanner-btn-icon" />
              <span>Start Health Check</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIBanner;