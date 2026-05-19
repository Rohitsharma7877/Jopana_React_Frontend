import React from 'react';
import { FiActivity } from 'react-icons/fi';

const AIBanner = () => {
  return (
    <section className="bg-[#f4f8fb] py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        
        {/* Main Banner Box */}
        <div className="relative bg-[#0b6a5b] rounded-[20px] px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:px-[60px] lg:py-[50px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
          
          {/* --- Background Decorative Circles --- */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
            
            {/* Top right blurry circle */}
            <div className="absolute rounded-full top-[-20%] right-[5%] w-[250px] h-[250px] bg-[#15a083] opacity-30 blur-[2px]"></div>
            
            {/* Bottom center blurry circle */}
            <div className="absolute rounded-full bottom-[-15%] right-[25%] w-[150px] h-[150px] bg-[#15a083] opacity-40 blur-[1px]"></div>
            
            {/* Giant 3D pillowy circle on the right (Handles all responsive sizing & opacity) */}
            <div className="absolute rounded-full top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#1cc8a3] to-[#15a083] shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.15)] opacity-40 right-[-20%] w-[300px] h-[300px] md:opacity-90 md:right-[-10%] lg:right-[-5%] lg:w-[400px] lg:h-[400px]"></div>
          
          </div>

          {/* --- Foreground Content --- */}
          <div className="relative z-[2] max-w-[500px] flex flex-col items-start">
            
            <h2 className="text-[#ffffff] text-[28px] md:text-[32px] font-[700] m-0 mb-[15px] leading-[1.2] tracking-[-0.5px]">
              AI Health Assistant
            </h2>
            
            <p className="text-[rgba(255,255,255,0.9)] text-[14px] md:text-[15px] leading-[1.6] m-0 mb-[25px]">
              Not sure what care you need? Describe your symptoms and get care recommendations instantly.
            </p>
            
            <button className="flex items-center gap-[8px] bg-[#ffffff] text-[#15a083] border-none py-[12px] px-[24px] rounded-[12px] text-[14px] font-[700] cursor-pointer transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#f0f0f0] hover:-translate-y-[2px]">
              <FiActivity className="text-[18px] stroke-[2.5px]" />
              <span>Start Health Check</span>
            </button>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIBanner;