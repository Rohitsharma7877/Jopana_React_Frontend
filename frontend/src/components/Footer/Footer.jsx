import React from 'react';
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

// --- UPDATED LOGO IMPORT ---
import jopanaLogo from '../assets/jopanaLogo.png'; 

const Footer = () => {
  return (
    <footer className="mt-[50px]">
      
      {/* Top Teal Newsletter Banner */}
      <div className="bg-[#15a083] pt-[40px] pb-[60px] lg:pb-[80px] text-[#ffffff]">
        <div className="max-w-[1200px] mx-auto px-[20px] flex flex-col lg:flex-row justify-between items-center gap-[30px] lg:pl-[380px]">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-[15px]">
            <div className="w-[50px] h-[50px] bg-[#ffffff] text-[#15a083] rounded-full flex justify-center items-center text-[20px] shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-[800] m-0 mb-[5px]">Subscribe Our Newsletter</h3>
              <p className="text-[13px] m-0 opacity-90 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                Fugiat at voluptatem quo occaecati hic nulla corporis.
              </p>
            </div>
          </div>

          <div className="flex bg-[rgba(255,255,255,0.1)] rounded-[30px] p-[5px] w-full max-w-[400px] border-[1px] border-[rgba(255,255,255,0.2)]">
            <input 
              type="email" 
              placeholder="Your email address..." 
              className="flex-1 bg-transparent border-none py-[10px] px-[20px] text-[#ffffff] text-[13px] outline-none placeholder:text-[rgba(255,255,255,0.7)]" 
            />
            <button className="bg-[#273b47] text-[#ffffff] border-none py-[12px] px-[25px] rounded-[25px] text-[12px] font-[700] cursor-pointer flex items-center gap-[8px] transition-colors duration-300 hover:bg-[#1a2730]">
              <FaPaperPlane /> SUBSCRIBE
            </button>
          </div>

        </div>
      </div>

      {/* Main Dark Footer Area */}
      <div className="bg-[#273b47] relative">
        <div className="max-w-[1200px] mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-[40px] lg:gap-[50px] pb-[50px]">
          
          {/* Column 1: Overlapping Opening Hours Card */}
          <div className="bg-[#ffffff] rounded-[20px] py-[30px] px-[25px] lg:py-[40px] lg:px-[35px] text-[#273b47] shadow-[0_15px_40px_rgba(0,0,0,0.1)] relative z-10 -mt-[40px] lg:-mt-[75px] max-w-[400px] mx-auto lg:mx-0 w-full">
            <h3 className="text-[22px] font-[800] m-0 mb-[15px]">Opening Hours</h3>
            <p className="text-[13px] text-[#7a8a9e] leading-[1.6] mb-[25px] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
              Fugiat at voluptatem quo occaecati hic nulla corporis curabitur facili quisque.
            </p>
            
            <div className="flex justify-between border-b-[1px] border-[#eef2f6] pb-[12px] mb-[15px] text-[14px] font-[700]">
              <span>Mon-Fri :</span>
              <span>8AM - 10PM</span>
            </div>
            <div className="flex justify-between border-b-[1px] border-[#eef2f6] pb-[12px] mb-[15px] text-[14px] font-[700]">
              <span>Sat-Sun :</span>
              <span>7AM - 9PM</span>
            </div>
            
            <div className="text-[13px] font-[700] text-[#15a083] mt-[5px] mb-[30px]">
              24*7 Emergency Care Open
            </div>
            
            <div>
              <p className="text-[13px] font-[700] mb-[15px] text-center">Follow our social media:</p>
              <div className="flex gap-[10px] justify-center">
                <a href="#facebook" className="w-[35px] h-[35px] rounded-full bg-[#de7223] text-[#ffffff] flex justify-center items-center no-underline text-[14px] transition-transform duration-300 hover:scale-110"><FaFacebookF /></a>
                <a href="#twitter" className="w-[35px] h-[35px] rounded-full bg-[#de7223] text-[#ffffff] flex justify-center items-center no-underline text-[14px] transition-transform duration-300 hover:scale-110"><FaTwitter /></a>
                <a href="#linkedin" className="w-[35px] h-[35px] rounded-full bg-[#de7223] text-[#ffffff] flex justify-center items-center no-underline text-[14px] transition-transform duration-300 hover:scale-110"><FaLinkedinIn /></a>
                <a href="#youtube" className="w-[35px] h-[35px] rounded-full bg-[#de7223] text-[#ffffff] flex justify-center items-center no-underline text-[14px] transition-transform duration-300 hover:scale-110"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Medical Services */}
          <div className="pt-[20px] lg:pt-[60px] text-[#ffffff]">
            <h3 className="text-[18px] font-[800] m-0 mb-[25px]">Our Medical Services</h3>
            <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] gap-x-[20px]">
              <li className="flex items-center gap-[10px] text-[14px] text-[#a6b8d4] font-[600] transition-colors duration-300 cursor-pointer hover:text-[#15a083]">
                <FaChevronRight className="text-[#15a083] text-[12px]" /> Orthopedic
              </li>
              <li className="flex items-center gap-[10px] text-[14px] text-[#a6b8d4] font-[600] transition-colors duration-300 cursor-pointer hover:text-[#15a083]">
                <FaChevronRight className="text-[#15a083] text-[12px]" /> Medicine
              </li>
              <li className="flex items-center gap-[10px] text-[14px] text-[#a6b8d4] font-[600] transition-colors duration-300 cursor-pointer hover:text-[#15a083]">
                <FaChevronRight className="text-[#15a083] text-[12px]" /> Dentistry
              </li>
              <li className="flex items-center gap-[10px] text-[14px] text-[#a6b8d4] font-[600] transition-colors duration-300 cursor-pointer hover:text-[#15a083]">
                <FaChevronRight className="text-[#15a083] text-[12px]" /> Oncology Center
              </li>
              <li className="flex items-center gap-[10px] text-[14px] text-[#a6b8d4] font-[600] transition-colors duration-300 cursor-pointer hover:text-[#15a083]">
                <FaChevronRight className="text-[#15a083] text-[12px]" /> Cardiology
              </li>
              <li className="flex items-center gap-[10px] text-[14px] text-[#a6b8d4] font-[600] transition-colors duration-300 cursor-pointer hover:text-[#15a083]">
                <FaChevronRight className="text-[#15a083] text-[12px]" /> Neurology
              </li>
            </ul>
          </div>

          {/* Column 3: Clinic Contact Info */}
          <div className="pt-[20px] lg:pt-[60px] text-[#ffffff]">
            <h3 className="text-[18px] font-[800] m-0 mb-[25px]">Clinic Contact Info</h3>
            <p className="text-[14px] text-[#a6b8d4] leading-[1.7] mb-[25px] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
              Fugiat at voluptatem quo occaecati hic nulla corporis curabitur facili quisque.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-[15px]">
              <li className="flex items-start gap-[12px] text-[14px] text-[#a6b8d4] font-[600] leading-[1.5]">
                <FaMapMarkerAlt className="text-[#15a083] mt-[3px] text-[14px] shrink-0" />
                <span>Location: 1234 Jopana Medical Tower, NY</span>
              </li>
              <li className="flex items-start gap-[12px] text-[14px] text-[#a6b8d4] font-[600] leading-[1.5]">
                <FaEnvelope className="text-[#15a083] mt-[3px] text-[14px] shrink-0" />
                <span>Email: info@jopana.com</span>
              </li>
              <li className="flex items-start gap-[12px] text-[14px] text-[#a6b8d4] font-[600] leading-[1.5]">
                <FaPhoneAlt className="text-[#15a083] mt-[3px] text-[14px] shrink-0" />
                <span>Phone: +123 456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t-[1px] border-[rgba(255,255,255,0.05)] py-[25px]">
          <div className="max-w-[1200px] mx-auto px-[20px] flex flex-col md:flex-row justify-between items-center gap-[15px]">
            <div className="flex items-center">
              <img src={jopanaLogo} alt="Jopana Logo" className="h-[40px] w-auto object-contain py-[6px] px-[15px] rounded-[8px]" />
            </div>
            <div className="text-[#a6b8d4] text-[13px] font-['Segoe_UI',Tahoma,Geneva,sans-serif] text-center md:text-right">
              Copyright © 2026 <strong className="text-[#ffffff]">JOPANA</strong>. All rights reserved.
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;