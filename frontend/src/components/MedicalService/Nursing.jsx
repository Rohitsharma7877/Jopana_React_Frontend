import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import nursingImg from '../assets/Jimg26.jpeg';
import postOpImg from '../assets/Jimg27.jpeg';
import woundCareImg from '../assets/Jimg25.jpeg';
import homeDocImg from '../assets/Jimg16.jpeg';
import onlineNurseImg from '../assets/Jimg8.jpeg';

const Nursing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isProcessingRef = useRef(false);

  const mainServicesData = [
    { id: 1, title: "Nursing Care", img: nursingImg, rating: "4.97", reviews: "9.2k", price: 449, oldPrice: 500 },
    { id: 2, title: "Post Operative Care", img: postOpImg, rating: "4.73", reviews: "5.3k", price: 600, oldPrice: "" },
    { id: 3, title: "Wound and Injection Care", img: woundCareImg, rating: "4.37", reviews: "22k", price: 750, oldPrice: "" },
    { id: 4, title: "Home Doctor Visit", img: homeDocImg, rating: "4.97", reviews: "9.2k", price: 349, oldPrice: 600 },
    { id: 5, title: "Online Nurse Consultation", img: onlineNurseImg, rating: "4.27", reviews: "26k", price: 249, oldPrice: 500 },
  ];

  const infiniteServicesData = [
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set1-${s.id}` })),
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set2-${s.id}` })),
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set3-${s.id}` }))
  ];

  const singleSetWidth = mainServicesData.length * 230;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = singleSetWidth;
    }
  }, [singleSetWidth]);

  const slideRight = () => {
    if (sliderRef.current && !isProcessingRef.current) {
      isProcessingRef.current = true;
      sliderRef.current.scrollBy({ left: 230, behavior: 'smooth' });
      setTimeout(() => {
        isProcessingRef.current = false;
      }, 300);
    }
  };

  const slideLeft = () => {
    if (sliderRef.current && !isProcessingRef.current) {
      isProcessingRef.current = true;
      sliderRef.current.scrollBy({ left: -230, behavior: 'smooth' });
      setTimeout(() => {
        isProcessingRef.current = false;
      }, 300);
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    if (slider.scrollLeft >= singleSetWidth * 2 - 5) {
      slider.scrollLeft = singleSetWidth;
    } else if (slider.scrollLeft <= 5) {
      slider.scrollLeft = singleSetWidth;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const ServiceCard = ({ service }) => (
    <div className="snap-start group flex flex-col w-[210px] shrink-0 bg-[#ffffff] rounded-[16px] overflow-hidden select-none shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)] hover:-translate-y-[4px]">
      
      <div className="w-full h-[130px] overflow-hidden bg-[#eef2f6]">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110" 
          loading="lazy" 
          draggable="false" 
        />
      </div>

      <div className="flex flex-col items-start text-left p-[16px]">
        <h3 className="text-[14px] font-[800] text-[#273b47] m-0 mb-[8px] leading-[1.4] w-full whitespace-normal line-clamp-2 transition-colors duration-300 group-hover:text-[#15a083]">
          {service.title}
        </h3>
        
        <div className="flex items-center gap-[4px] mb-[10px]">
          <FaStar className="text-[#de7223] text-[12px]" />
          <span className="text-[#273b47] text-[12px] font-[700]">{service.rating}</span>
          <span className="text-[#7a8a9e] text-[11px] font-[500]">({service.reviews})</span>
        </div>
        
        <div className="flex items-baseline gap-[6px] mb-[16px]">
          <span className="text-[15px] font-[800] text-[#273b47]">₹{service.price}</span>
          {service.oldPrice && (
            <span className="text-[11px] font-[500] text-[#a3b1bf] line-through">₹{service.oldPrice}</span>
          )}
        </div>

        <button className="w-full bg-[#15a083] text-white border-none py-[10px] rounded-[8px] text-[12px] font-[700] uppercase tracking-[0.5px] cursor-pointer transition-colors duration-300 hover:bg-[#de7223]">
          Book again
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .custom-med-scroll::-webkit-scrollbar { width: 6px; }
        .custom-med-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-med-scroll::-webkit-scrollbar-thumb { background: #d8dbdd; border-radius: 10px; }
        .custom-med-scroll::-webkit-scrollbar-thumb:hover { background: #15a083; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <section className="bg-[#f4f8fb] py-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px]">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[40px] gap-[20px] md:gap-0">
            <div className="text-left">
              <h2 className="text-[28px] md:text-[36px] font-[900] text-[#273b47] m-0 mb-[8px] leading-[1.2]">
                Nursing Care
              </h2>
              <p className="text-[#7a8a9e] text-[15px] md:text-[16px] m-0 font-[500] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                Compassionate and expert care at your doorstep
              </p>
            </div>

            <div>
              <button 
                className="bg-[#ffffff] text-[#15a083] border-[1px] border-[#15a083] py-[10px] px-[24px] rounded-[12px] text-[12px] font-[800] uppercase tracking-[0.5px] cursor-pointer transition-all duration-300 hover:bg-[#15a083] hover:text-[#ffffff] shadow-[0_4px_10px_rgba(21,160,131,0.15)] hover:shadow-[0_6px_15px_rgba(21,160,131,0.25)]"
                onClick={() => setIsModalOpen(true)}
              >
                View all
              </button>
            </div>
          </div>

          <div className="relative w-full flex items-center">
            
            <button 
              className="hidden md:flex absolute left-[-22px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#ffffff] border-[1px] border-[#15a083] rounded-full justify-center items-center text-[24px] text-[#273b47] cursor-pointer shadow-[0_4px_10px_rgba(21,160,131,0.15)] z-10 transition-all duration-300 hover:bg-[#15a083] hover:text-[#ffffff] hover:scale-110 active:scale-95" 
              onClick={slideLeft}
              aria-label="Scroll left"
            >
              <FiChevronLeft />
            </button>
            
            <div 
              className="flex gap-[20px] overflow-x-auto py-[10px] pb-[30px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth" 
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {infiniteServicesData.map((service) => (
                <ServiceCard key={service.uniqueId} service={service} />
              ))}
            </div>
            
            <button 
              className="hidden md:flex absolute right-[-22px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#ffffff] border-[1px] border-[#15a083] rounded-full justify-center items-center text-[24px] text-[#273b47] cursor-pointer shadow-[0_4px_10px_rgba(21,160,131,0.15)] z-10 transition-all duration-300 hover:bg-[#15a083] hover:text-[#ffffff] hover:scale-110 active:scale-95" 
              onClick={slideRight}
              aria-label="Scroll right"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div 
            className="fixed inset-0 w-screen h-screen bg-[#273b47]/60 backdrop-blur-sm z-[1000] flex justify-center items-center p-[20px] box-border animate-fade-in" 
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="bg-[#f4f8fb] w-full max-w-[1200px] max-h-[90vh] rounded-[24px] p-[20px] md:p-[40px] shadow-[0_25px_50px_rgba(0,0,0,0.3)] flex flex-col relative box-border animate-scale-up" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-[20px] md:mb-[30px] pb-[15px] md:pb-[20px] border-b-[1px] border-[#eef2f6]">
                <h2 className="text-[24px] md:text-[32px] font-[900] text-[#273b47] m-0">All Nursing Services</h2>
                
                <button 
                  className="bg-[#ffffff] border-[1px] border-[#eef2f6] w-[40px] h-[40px] rounded-full flex justify-center items-center text-[18px] text-[#7a8a9e] cursor-pointer transition-all duration-300 hover:text-[#de7223] hover:bg-[#fff0e6] hover:border-[#de7223] shadow-sm" 
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="overflow-y-auto pr-[5px] md:pr-[15px] pb-[20px] custom-med-scroll">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-y-[30px] gap-x-[20px] justify-items-center sm:justify-items-start">
                  {mainServicesData.map((service) => (
                    <ServiceCard key={`modal-${service.id}`} service={service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Nursing;