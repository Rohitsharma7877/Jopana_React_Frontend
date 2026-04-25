import React from 'react';
import { FaPhoneAlt, FaStethoscope, FaUserMd } from 'react-icons/fa';
import DoctorImage from '../assets/doct3.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
    <>
      {/* Import Poppins Font globally for this component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
      `}</style>

      {/* Main Wrapper - Applied Poppins Font Here */}
      <div className="bg-[#eef5ff] pb-[40px] md:pb-[80px] font-['Poppins',sans-serif]">
        
        {/* Top Section */}
        <div className="bg-[#ffffff] pt-[80px] md:pt-[70px] pb-[50px] md:pb-[100px] relative overflow-hidden rounded-bl-[40px] rounded-br-[40px] md:rounded-bl-[80px] md:rounded-br-[80px]">
          <div className="max-w-[1200px] mx-auto px-[20px] relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-[40px] md:gap-[50px]">
              
              {/* IMAGE SECTION (Left Side on Desktop, Bottom on Mobile) */}
              <div className="flex-1 relative flex justify-center items-end order-2 md:order-1 mt-[20px] md:mt-0">
                {/* Custom Tailwind Repeating Radial Gradient for the Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[repeating-radial-gradient(circle_at_center,transparent,transparent_20px,rgba(21,160,131,0.05)_21px,rgba(21,160,131,0.05)_22px)] rounded-full z-[1]"></div>
                <img 
                  src={DoctorImage} 
                  alt="JOPANA Medical Professional" 
                  className="max-w-full relative z-[2]" 
                />
              </div>

              {/* TEXT SECTION (Right Side on Desktop, Top on Mobile) */}
              <div className="flex-[1.2] relative z-[2] text-left order-1 md:order-2 mt-[20px] md:mt-0">
                
                {/* Background Watermark (Hidden on mobile to prevent overflow) */}
                <div className="hidden md:block absolute top-[-30px] left-[-20px] text-[150px] font-[900] text-[#f2f4f7] z-[-1] pointer-events-none tracking-[2px] leading-none">
                  JOPANA
                </div>

                <div className="text-[#de7223] text-[14px] font-[700] tracking-[2.5px] uppercase mb-[15px]">
                  MEDICAL CARE PLATFORM
                </div>
                
                <h1 className="text-[42px] md:text-[60px] font-[900] leading-[1.1] m-0 mb-[20px] uppercase">
                  <span className="text-[#273b47]">JOPANA</span> <br />
                  <span className="text-[#273b47] normal-case">— Because</span> <br />
                  <span className="text-[#15a083]">CARE CAN'T <br /> WAIT</span>
                </h1>
                
                {/* Orange Divider */}
                <div className="w-[70px] h-[4px] bg-[#de7223] mb-[20px]"></div>
                
                {/* Quote Block */}
                <blockquote className="text-[16px] md:text-[18px] italic text-[#273b47] border-l-[5px] border-[#15a083] pl-[15px] m-0 mb-[20px]">
                  "On-Demand Medical Care, Delivered Instantly"
                </blockquote>
                
                <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#555555] mb-[35px] max-w-[500px]">
                  Welcome to the forefront of healthcare innovation. JOPANA is your trusted instant medical services platform, bringing on-demand healthcare right to your fingertips.
                </p>
                
                <div className="flex flex-wrap gap-[15px] md:gap-[20px] items-center">
                  <button className="bg-[#15a083] text-[#ffffff] py-[12px] md:py-[14px] px-[25px] md:px-[30px] rounded-[30px] text-[14px] md:text-[16px] font-[600] border-none cursor-pointer transition-all duration-300 hover:bg-[#11826a] hover:shadow-md hover:-translate-y-[2px]">
                    Find Service's
                  </button>
                  
                  {/* Group class added to handle the icon color change on hover */}
                  <button className="group bg-transparent text-[#273b47] border-[2px] border-[#273b47] py-[10px] md:py-[12px] px-[25px] md:px-[30px] rounded-[30px] text-[14px] md:text-[16px] font-[600] cursor-pointer flex items-center gap-[10px] transition-all duration-300 hover:bg-[#273b47] hover:text-[#ffffff] hover:shadow-md hover:-translate-y-[2px]">
                    <FaPhoneAlt className="text-[#15a083] transition-all duration-300 group-hover:text-[#ffffff]"/> 
                    +123 456 7890
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Overlapping Cards Section */}
        <div className="max-w-[1200px] mx-auto px-[20px] relative">
          <div className="bg-[#008080] rounded-[20px] flex flex-col md:flex-row justify-around items-center py-[30px] px-[20px] md:px-[40px] text-[#ffffff] mt-[-40px] md:mt-[-60px] relative z-[10] shadow-[0_10px_30px_rgba(0,102,255,0.3)] gap-[20px] md:gap-0">
            
            <div className="flex items-center gap-[15px] md:gap-[20px] flex-1 w-full md:w-auto md:border-r-[1px] md:border-[rgba(255,255,255,0.2)] md:mr-[40px] pb-[20px] md:pb-0 border-b-[1px] border-[rgba(255,255,255,0.2)] md:border-b-0">
              <div className="bg-[#ffffff] text-[#ff8c00] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex justify-center items-center text-[20px] md:text-[24px] shrink-0">
                <FaStethoscope />
              </div>
              <div>
                <h3 className="m-0 mb-[5px] text-[18px] md:text-[20px] font-[600]">24/7 Emergency Services</h3>
                <p className="m-0 text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)]">Instant medical care when you need it most. We are always ready.</p>
              </div>
            </div>

            <div className="flex items-center gap-[15px] md:gap-[20px] flex-1 w-full md:w-auto pt-[10px] md:pt-0">
              <div className="bg-[#ffffff] text-[#ff8c00] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex justify-center items-center text-[20px] md:text-[24px] shrink-0">
                <FaUserMd />
              </div>
              <div>
                <h3 className="m-0 mb-[5px] text-[18px] md:text-[20px] font-[600]">Skilled Medical Professionals</h3>
                <p className="m-0 text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)]">JOPANA connects you with highly verified and trusted experts.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;