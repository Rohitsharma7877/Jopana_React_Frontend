import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
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

  // --- MOCK DATA (Using Local Imports) ---
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

  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth; 
    }
  }, []);

  const slideRight = () => { if (sliderRef.current) sliderRef.current.scrollBy({ left: 260, behavior: 'smooth' }); };
  const slideLeft = () => { if (sliderRef.current) sliderRef.current.scrollBy({ left: -260, behavior: 'smooth' }); };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;
    if (scrollLeft >= singleSetWidth * 2 - clientWidth) sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
    else if (scrollLeft <= 0) sliderRef.current.scrollLeft = scrollLeft + singleSetWidth;
  };

  // --- DRAG TO SCROLL HANDLERS ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  
  // FIX: Properly defined MouseUp and MouseMove inside the component scope
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
        <h3 className="text-[14px] font-[600] text-[#0F0F0F] m-0 mb-[8px] leading-[1.4] w-full line-clamp-2">{service.title}</h3>
        <div className="flex items-center gap-[5px] mb-[12px]">
          <FaStar className="text-[#6B7280] text-[13px]" />
          <span className="text-[#6B7280] text-[14px] font-[500]">{service.rating}</span>
          <span className="text-[#6B7280] text-[14px]">({service.reviews})</span>
        </div>
        <div className="flex items-baseline gap-[8px] mb-[20px]">
          <span className="text-[16px] font-[600] text-[#0F0F0F]">₹{service.price}</span>
          {service.oldPrice && <span className="text-[14px] text-[#A3A3A3] line-through">₹{service.oldPrice}</span>}
        </div>
        <button className="w-full bg-[#14B8A6] text-white border-none py-[12px] rounded-[8px] text-[14px] font-[500] cursor-pointer transition-colors hover:bg-[#0f9688]">Book again</button>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .custom-med-scroll::-webkit-scrollbar { width: 6px; }
        .custom-med-scroll::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>

      <section className="bg-[#f7f7f7] py-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[30px] gap-[15px] md:gap-0">
            <div className="text-left">
              <h2 className="text-[36px] font-[800] text-[#0F0F0F] m-0 mb-[6px] tracking-[-0.5px]">Nursing Care</h2>
              <p className="text-[#6B7280] text-[18px] m-0 font-[400]">Expert doctors and specialists at your doorstep</p>
            </div>
            <button className="bg-white border-[1px] border-[#E5E7EB] py-[10px] px-[24px] rounded-[8px] text-[14px] font-[500] cursor-pointer transition-colors hover:bg-[#f1f5f9]" onClick={() => setIsModalOpen(true)}>
              View all
            </button>
          </div>

          {/* Slider */}
          <div className="relative w-full flex items-center">
            <button className="hidden md:flex absolute left-[-22px] w-[45px] h-[45px] bg-white border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] cursor-pointer z-10 hover:text-[#14B8A6] hover:border-[#14B8A6]" onClick={slideLeft}><FaArrowLeft /></button>
            
            <div 
              className={`flex gap-[20px] overflow-x-auto py-[10px] pb-[20px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {infiniteServicesData.map((service) => <ServiceCard key={service.uniqueId} service={service} />)}
            </div>
            
            <button className="hidden md:flex absolute right-[-22px] w-[45px] h-[45px] bg-white border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] cursor-pointer z-10 hover:text-[#14B8A6] hover:border-[#14B8A6]" onClick={slideRight}><FaArrowRight /></button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[rgba(15,15,15,0.6)] backdrop-blur-[4px] z-[1000] flex justify-center items-center p-[20px]" onClick={() => setIsModalOpen(false)}>
            <div className="bg-[#f7f7f7] w-full max-w-[1200px] max-h-[90vh] rounded-[20px] p-[40px] shadow-[0_25px_50px_rgba(0,0,0,0.2)] flex flex-col relative" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-[30px] pb-[20px] border-b-[1px] border-[#E5E7EB]">
                <h2 className="text-[36px] font-[800] text-[#0F0F0F] m-0 tracking-[-0.5px]">All Nursing Services</h2>
                <button className="bg-transparent border-none text-[24px] text-[#6B7280] cursor-pointer hover:text-[#0F0F0F]" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
              </div>
              <div className="overflow-y-auto pr-[15px] pb-[20px] custom-med-scroll">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[30px_20px]">
                  {mainServicesData.map((service) => <ServiceCard key={`modal-${service.id}`} service={service} />)}
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