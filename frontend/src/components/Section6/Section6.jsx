import React from 'react';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';
import doctorsImg from '../assets/Jimg6.jpeg'; 

const Section6 = () => {
  return (
    <section className="bg-[#f4f8fb] pb-[80px]">
      
      {/* Top Dark Banner Area */}
      <div className="bg-[#273b47] pt-[60px] pb-[80px] lg:pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[40px] lg:gap-[50px]">
            
            {/* Left Side: Text and Buttons */}
            <div className="flex-[1.2] text-[#ffffff] pb-0 lg:pb-[30px] text-center lg:text-left">
              <div className="inline-flex items-center gap-[6px] bg-[rgba(255,255,255,0.1)] text-[#de7223] py-[6px] px-[16px] rounded-[20px] text-[11px] font-[800] uppercase tracking-[1.5px] mb-[20px] border-[1px] border-[rgba(222,114,35,0.3)]">
                <FaHeart className="text-[#15a083]" /> BOOKING
              </div>
              <h2 className="text-[36px] md:text-[46px] font-[900] leading-[1.2] m-0 mb-[20px]">
                Caring For You, <br />
                <span className="text-[#15a083]">Care For Health</span>
              </h2>
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#c4d2df] mb-[35px] max-w-[500px] mx-auto lg:mx-0 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                Fugiat at voluptatem quo. Occaecati hic nulla corporis curabitur 
                facili quisque exercitation, labore vol Repreh enderit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[20px] items-center justify-center lg:justify-start">
                <button className="bg-[#15a083] text-[#ffffff] border-none py-[14px] px-[30px] rounded-[30px] text-[14px] font-[700] cursor-pointer transition-colors duration-300 hover:bg-[#11826a] w-full sm:w-auto">
                  GET APPOINTMENT
                </button>
                <button className="bg-transparent text-[#ffffff] border-[2px] border-[rgba(255,255,255,0.3)] py-[12px] px-[30px] rounded-[30px] text-[14px] font-[700] cursor-pointer flex items-center justify-center gap-[10px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:border-[#ffffff] w-full sm:w-auto">
                  <FaPhoneAlt className="text-[#15a083]" /> +123 456 7890
                </button>
              </div>
            </div>

            {/* Right Side: Doctors Image */}
            <div className="flex-[0.8] flex justify-center w-full">
              <img 
                src={doctorsImg} 
                alt="Medical Professionals" 
                className="max-w-full h-auto max-h-[300px] lg:max-h-[400px] block lg:-mb-[50px] object-contain" 
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Overlapping Appointment Box */}
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="bg-[#ffffff] rounded-[20px] p-[30px] lg:p-[40px] shadow-[0_15px_40px_rgba(39,59,71,0.1)] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[40px] relative z-10 -mt-[40px] lg:-mt-[60px]">
          
          {/* Left Text in Box */}
          <div className="flex-[0.8] text-center lg:text-left w-full">
            <h3 className="text-[20px] md:text-[24px] font-[800] text-[#273b47] m-0 mb-[10px]">
              Let's Book Your Appointment !
            </h3>
            <p className="text-[13px] text-[#7a8a9e] m-0 leading-[1.6] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
              Fugiat at voluptatem quo occaecati hic nulla corporis.
            </p>
          </div>

          {/* Right Form in Box */}
          <form className="flex-[2] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px]" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full py-[14px] px-[20px] rounded-[30px] border-[1px] border-[#e1e8ed] bg-[#f8fafc] text-[#273b47] text-[13px] font-['Segoe_UI',Tahoma,Geneva,sans-serif] outline-none transition-colors duration-300 focus:border-[#15a083]" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full py-[14px] px-[20px] rounded-[30px] border-[1px] border-[#e1e8ed] bg-[#f8fafc] text-[#273b47] text-[13px] font-['Segoe_UI',Tahoma,Geneva,sans-serif] outline-none transition-colors duration-300 focus:border-[#15a083]" 
            />
            <input 
              type="date" 
              className="w-full py-[14px] px-[20px] rounded-[30px] border-[1px] border-[#e1e8ed] bg-[#f8fafc] text-[#273b47] text-[13px] font-['Segoe_UI',Tahoma,Geneva,sans-serif] outline-none transition-colors duration-300 focus:border-[#15a083]" 
            />
            
            <select className="w-full py-[14px] px-[20px] rounded-[30px] border-[1px] border-[#e1e8ed] bg-[#f8fafc] text-[#273b47] text-[13px] font-['Segoe_UI',Tahoma,Geneva,sans-serif] outline-none transition-colors duration-300 focus:border-[#15a083] appearance-none cursor-pointer">
              <option value="">Select Service</option>
              <option value="dental">Dental Care</option>
              <option value="ortho">Orthopedic</option>
              <option value="neuro">Neurology</option>
            </select>
            
            <select className="w-full py-[14px] px-[20px] rounded-[30px] border-[1px] border-[#e1e8ed] bg-[#f8fafc] text-[#273b47] text-[13px] font-['Segoe_UI',Tahoma,Geneva,sans-serif] outline-none transition-colors duration-300 focus:border-[#15a083] appearance-none cursor-pointer">
              <option value="">Select Doctor</option>
              <option value="taylor">Dr. George Taylor</option>
              <option value="smith">Dr. Jenny Smith</option>
            </select>
            
            <button 
              type="submit" 
              className="w-full bg-[#15a083] text-[#ffffff] border-none py-[14px] px-[20px] rounded-[30px] text-[13px] font-[700] cursor-pointer transition-colors duration-300 uppercase hover:bg-[#11826a] sm:col-span-2 md:col-span-1"
            >
              BOOK APPOINTMENT
            </button>
          </form>

        </div>
      </div>

    </section>
  );
};

export default Section6;