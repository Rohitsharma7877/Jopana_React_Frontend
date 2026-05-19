import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import doctorConsultImg from '../assets/Jimg3.jpeg';
import physioImg from '../assets/Jimg14.jpeg';
import chronicCareImg from '../assets/Jimg16.jpeg';
import diabetesImg from '../assets/Jimg4.jpeg';
import generalCheckupImg from '../assets/Jimg5.jpeg';

const MedicalService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- MOCK DATA (Using Local Images) ---
  const mainServicesData = [
    { id: 1, title: "Doctors Consultation", img: doctorConsultImg, rating: "4.97", reviews: "9.2k", price: 449, oldPrice: 500 },
    { id: 2, title: "Physiotherapy", img: physioImg, rating: "4.73", reviews: "5.3k", price: 600, oldPrice: "" },
    { id: 3, title: "Chronic Care", img: chronicCareImg, rating: "4.37", reviews: "22k", price: 750, oldPrice: "" },
    { id: 4, title: "Diabetes Management", img: diabetesImg, rating: "4.97", reviews: "9.2k", price: 349, oldPrice: 600 },
    { id: 5, title: "General Health Checkup", img: generalCheckupImg, rating: "4.27", reviews: "26k", price: 249, oldPrice: 500 },
  ];

  const infiniteServicesData = [
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set1-${s.id}` })),
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set2-${s.id}` })),
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set3-${s.id}` }))
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth; 
    }
  }, []);

  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 260, behavior: 'smooth' });
  };

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -260, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;

    if (scrollLeft >= singleSetWidth * 2 - clientWidth) {
      sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft <= 0) {
      sliderRef.current.scrollLeft = scrollLeft + singleSetWidth;
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
    <div className="flex flex-col w-[240px] shrink-0 bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-[12px] overflow-hidden select-none">
      <img src={service.img} alt={service.title} className="w-full h-[160px] object-cover pointer-events-none" loading="lazy" draggable="false" />
      <div className="flex flex-col items-start text-left p-[16px]">
        
        {/* Title starts exactly from the left */}
        <h3 className="text-[14px] font-[600] text-[#0F0F0F] m-0 mb-[8px] leading-[1.4] w-full whitespace-normal line-clamp-2">
          {service.title}
        </h3>
        
        <div className="flex items-center gap-[5px] mb-[12px]">
          <FaStar className="text-[#6B7280] text-[13px]" />
          <span className="text-[#6B7280] text-[14px] font-[500]">{service.rating}</span>
          <span className="text-[#6B7280] text-[14px]">({service.reviews})</span>
        </div>
        
        <div className="flex items-baseline gap-[8px] mb-[20px]">
          <span className="text-[16px] font-[600] text-[#0F0F0F]">₹{service.price}</span>
          {service.oldPrice && (
            <span className="text-[14px] text-[#A3A3A3] line-through">₹{service.oldPrice}</span>
          )}
        </div>

        <button className="w-full bg-[#14B8A6] text-white border-none py-[12px] rounded-[8px] text-[14px] font-[500] cursor-pointer transition-colors duration-200 hover:bg-[#0f9688]">
          Book again
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Tiny style block just for the custom modal scrollbar (Tailwind needs plugins for this otherwise) */}
      <style>{`
        .custom-med-scroll::-webkit-scrollbar { width: 6px; }
        .custom-med-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-med-scroll::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>

      <section className="bg-[#f7f7f7] py-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* Header strictly aligned to the start - Responsive stacking on mobile */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[30px] gap-[15px] md:gap-0">
            <div className="text-left">
              <h2 className="text-[28px] md:text-[36px] font-[800] color-[#0F0F0F] m-0 mb-[6px] tracking-[-0.5px]">Medical Services</h2>
              <p className="text-[#6B7280] text-[15px] md:text-[18px] m-0 font-[400]">Expert doctors and specialists at your doorstep</p>
            </div>

            <div>
              <button 
                className="bg-[#ffffff] text-[#14B8A6] border-[1px] border-[#E5E7EB] py-[10px] px-[24px] rounded-[8px] text-[14px] font-[500] cursor-pointer transition-colors duration-200 hover:bg-[#f1f5f9]" 
                onClick={() => setIsModalOpen(true)}
              >
                View all
              </button>
            </div>
          </div>

          <div className="relative w-full flex items-center">
            {/* Arrows hidden on small screens so users can swipe */}
            <button className="hidden md:flex absolute left-[-22px] top-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] text-[#0F0F0F] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-colors duration-200 hover:text-[#14B8A6] hover:border-[#14B8A6]" onClick={slideLeft} aria-label="Scroll left">
              <FaArrowLeft />
            </button>

            <div 
              className={`flex gap-[20px] overflow-x-auto py-[10px] pb-[20px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
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
            
            <button className="hidden md:flex absolute right-[-22px] top-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] text-[#0F0F0F] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-colors duration-200 hover:text-[#14B8A6] hover:border-[#14B8A6]" onClick={slideRight} aria-label="Scroll right">
              <FaArrowRight />
            </button>
          </div>

        </div>

        {/* MODAL OVERLAY */}
        {isModalOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[rgba(15,15,15,0.6)] backdrop-blur-[4px] z-[1000] flex justify-center items-center p-[20px] box-border" onClick={() => setIsModalOpen(false)}>
            <div className="bg-[#f7f7f7] w-full max-w-[1200px] max-h-[90vh] rounded-[20px] p-[20px] md:p-[40px] shadow-[0_25px_50px_rgba(0,0,0,0.2)] flex flex-col relative box-border" onClick={(e) => e.stopPropagation()}>
              
              <div className="flex justify-between items-center mb-[20px] md:mb-[30px] pb-[15px] md:pb-[20px] border-b-[1px] border-[#E5E7EB]">
                <h2 className="text-[28px] md:text-[36px] font-[800] text-[#0F0F0F] m-0 tracking-[-0.5px]">All Services</h2>
                <button className="bg-transparent border-none text-[24px] text-[#6B7280] cursor-pointer transition-colors duration-200 hover:text-[#0F0F0F]" onClick={() => setIsModalOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="overflow-y-auto pr-[5px] md:pr-[15px] pb-[20px] custom-med-scroll">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-y-[30px] gap-x-[20px]">
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

export default MedicalService;