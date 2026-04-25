import React from 'react';
import { FaHeart, FaPlay, FaCheckCircle } from 'react-icons/fa';
// Make sure to add your actual image paths here!
import imgLeft from '../assets/Jimg8.jpeg'; // Assuming local assets folder
import imgRight from '../assets/Jimg9.jpeg';

const Section2 = () => {
  return (
    <>
      <style>{`
        /* --- BRAND IMPORT: POPPINS --- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* Main Container - Applied Poppins Font Here */}
      <section className="bg-[#f4f8fb] py-[60px] font-['Poppins',sans-serif]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* Top Centered Header */}
          <div className="flex flex-col items-center text-center mb-[40px]">
            <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[6px] px-[16px] rounded-[20px] text-[11px] font-[800] uppercase tracking-[1.5px] mb-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <FaHeart className="text-[13px]" /> INTRODUCTION TO US
            </div>
            <h2 className="text-[36px] font-[900] leading-[1.2] m-0">
              <span className="text-[#273b47]">Trusted Medical Professionals,</span> <br />
              <span className="text-[#15a083]">Delivered to Your Door</span>
            </h2>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row gap-[25px] items-stretch">
            
            {/* LEFT COLUMN: Tall Image with Play Button */}
            <div 
              className="relative flex-none lg:w-[28%] h-[440px] rounded-[16px] overflow-hidden self-start"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
              }}
            >
              <img src={imgLeft} alt="Doctors with laptop" className="w-full h-full object-cover block" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55px] h-[55px] bg-[#ffffff] rounded-full border-none flex justify-center items-center cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-110">
                <FaPlay className="text-[#15a083] text-[16px] ml-[3px]" />
              </button>
            </div>

            {/* RIGHT COLUMN: Text, Hours Box, and Wide Image */}
            <div className="flex flex-col lg:w-[calc(72%-25px)] gap-[25px]">
              
              {/* Top Row of the Right Column */}
              <div className="flex flex-col md:flex-row gap-[25px]">
                
                {/* Text and List Area */}
                <div className="flex-[1.2]">
                  <p className="text-[#6b7c8f] text-[13px] leading-[1.7] mb-[20px] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                    We bridge the critical gap between urgent medical needs and immediate support. By combining speed, technology, and compassionate care, we bring certified medical professionals directly to your doorstep—because your health should never be put on hold.
                  </p>
                  <ul className="list-none p-0 m-0">
                    <li className="flex items-center gap-[10px] text-[13px] font-[700] text-[#273b47] mb-[12px]">
                      <FaCheckCircle className="text-[#de7223] text-[15px]" /> 24/7 Rapid Response: Dispatched instantly.
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] font-[700] text-[#273b47] mb-[12px]">
                      <FaCheckCircle className="text-[#de7223] text-[15px]" /> 100% Verified Staff: Certified medical experts.
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] font-[700] text-[#273b47] mb-[12px]">
                      <FaCheckCircle className="text-[#de7223] text-[15px]" /> Hospital-Level Care: Premium treatment at home.
                    </li>
                    <li className="flex items-center gap-[10px] text-[13px] font-[700] text-[#273b47] mb-[12px]">
                      <FaCheckCircle className="text-[#de7223] text-[15px]" /> Live Tracking: Full transparency to your door.
                    </li>
                  </ul>
                </div>

                {/* Opening Hours Box */}
                <div className="flex-[0.8] bg-[#15a083] rounded-[16px] p-[25px] text-[#ffffff] flex flex-col">
                  <div className="bg-[#ffffff] text-[#15a083] inline-block self-start py-[6px] px-[16px] rounded-[20px] text-[12px] font-[800] mb-[15px]">
                    Opening Hours
                  </div>
                  <p className="text-[12px] leading-[1.5] mb-[20px] opacity-90 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                    Ready to dispatch medical professionals to your doorstep, every single day.
                  </p>
                  
                  <div className="flex justify-between border-b-[1px] border-[rgba(255,255,255,0.2)] pb-[8px] mb-[12px] text-[13px] font-[600]">
                    <span>Mon-Fri :</span>
                    <span>8AM - 10PM</span>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[rgba(255,255,255,0.2)] pb-[8px] mb-[12px] text-[13px] font-[600]">
                    <span>Sat-Sun :</span>
                    <span>7AM - 9PM</span>
                  </div>
                  
                  <div className="text-[12px] font-[700] mt-[5px]">
                    24*7 Emergency Care Open
                  </div>
                </div>

              </div>

              {/* Bottom Row of the Right Column: Wide Image */}
              <div className="h-[200px] rounded-[16px] overflow-hidden relative">
                <img src={imgRight} alt="Medical Team Meeting" className="w-full h-full object-cover block" />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Section2;