import React from 'react';
import { FiActivity } from 'react-icons/fi';
import aiBgImg from '../assets/Jimg17.jpeg'; 
import aiBgImg2 from '../assets/Jimg28.jpeg'; 

const AIBanner = ({ compact = false }) => {
  return (
    <section className={`${compact ? '' : 'bg-[#f4f8fb] py-[40px]'}`}>
      <div className={`${compact ? '' : 'max-w-[1200px] mx-auto px-[20px]'}`}>
        
        <div className={`relative bg-[#0b6a5b] rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] ${
          compact 
            ? 'px-[20px] py-[25px] md:px-[30px] md:py-[30px] min-h-[200px] md:min-h-[220px]' 
            : 'px-[20px] py-[30px] md:px-[30px] md:py-[40px] lg:px-[60px] lg:py-[50px] min-h-[280px] md:min-h-[320px]'
        }`}>
          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
            
            <div className="absolute top-[15%] right-[35%] w-[8px] h-[8px] bg-[#1cc8a3] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-[25%] right-[20%] w-[4px] h-[4px] bg-white rounded-full opacity-40"></div>
            
            <div className={`absolute rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(21,160,131,0.3)] z-[1] ${
              compact 
                ? 'bottom-[-15%] right-[15%] md:right-[50%] lg:right-[28%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]' 
                : 'bottom-[-20%] right-[15%] md:right-[50%] lg:right-[28%] w-[100px] h-[100px] md:w-[250px] md:h-[250px] lg:w-[200px] lg:h-[200px]'
            }`}>
              <img 
                src={aiBgImg2} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover blur-[1px] opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1cc8a3]/30 to-[#15a083]/40"></div>
            </div>
            
            <div className={`absolute rounded-full bg-gradient-to-br from-[#15a083] to-[#1cc8a3] opacity-20 blur-[3px] ${
              compact 
                ? 'top-[-20%] right-[8%] w-[100px] h-[100px]' 
                : 'top-[-15%] right-[8%] w-[180px] h-[180px]'
            }`}></div>
            
            <div className={`absolute rounded-full bg-gradient-to-tr from-[#1cc8a3] to-transparent opacity-15 blur-[2px] ${
              compact 
                ? 'bottom-[10%] left-[5%] w-[60px] h-[60px]' 
                : 'bottom-[10%] left-[5%] w-[100px] h-[100px]'
            }`}></div>
            
            <div className={`absolute rounded-full overflow-hidden shadow-[0_0_60px_rgba(21,160,131,0.3)] ${
              compact 
                ? 'top-1/2 -translate-y-1/2 right-[-10%] w-[180px] h-[180px] md:right-[-5%] md:w-[220px] md:h-[220px] lg:right-[-3%] lg:w-[280px] lg:h-[280px]' 
                : 'top-1/2 -translate-y-1/2 right-[-15%] w-[280px] h-[280px] md:right-[-8%] md:w-[340px] md:h-[340px] lg:right-[-5%] lg:w-[420px] lg:h-[420px]'
            }`}>
              
              <img 
                src={aiBgImg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-50"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#1cc8a3]/40 to-[#15a083]/50"></div>
              
              <div className="absolute inset-[12px] rounded-full border-2 border-white/15"></div>
              <div className="absolute inset-[25px] rounded-full border border-white/10"></div>
              
            </div>
          
          </div>

          <div className={`relative z-[2] flex flex-col items-start ${
            compact ? 'max-w-[380px]' : 'max-w-[480px]'
          }`}>
            
            <h2 className={`text-[#ffffff] font-[700] m-0 mb-[15px] leading-[1.2] tracking-[-0.5px] ${
              compact 
                ? 'text-[20px] md:text-[24px] lg:text-[26px]' 
                : 'text-[28px] md:text-[32px] lg:text-[36px]'
            }`}>
              AI Health Assistant
            </h2>
            
            <p className={`text-[rgba(255,255,255,0.9)] leading-[1.6] m-0 mb-[25px] ${
              compact 
                ? 'text-[12px] md:text-[13px] max-w-[320px]' 
                : 'text-[14px] md:text-[15px] max-w-[400px]'
            }`}>
              Not sure what care you need? Describe your symptoms and get care recommendations instantly.
            </p>
            
            <button className={`flex items-center gap-[8px] bg-[#ffffff] text-[#15a083] border-none rounded-[12px] font-[700] cursor-pointer transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#f0f0f0] hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] ${
              compact 
                ? 'py-[8px] px-[16px] text-[12px]' 
                : 'py-[12px] px-[24px] text-[14px]'
            }`}>
              <FiActivity className={`${compact ? 'text-[14px]' : 'text-[18px]'} stroke-[2.5px]`} />
              <span>Start Health Check</span>
            </button>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIBanner;