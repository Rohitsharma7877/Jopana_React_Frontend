import React, { useState, useRef, useEffect } from "react";
import { 
  FaHeart, 
  FaTimes,
  FaStar,
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa";


// --- IMPORT YOUR LOCAL IMAGES HERE ---
import pregnantCheckupImg from '../assets/Jimg1.jpeg';
import homeDoctorImg from '../assets/Jimg2.jpeg';
import physioImg from '../assets/Jimg3.jpeg';
import diabetesImg from '../assets/Jimg4.jpeg';
import elderlyCheckupImg from '../assets/Jimg5.jpeg';
import postSurgeryImg from '../assets/Jimg6.jpeg';
import babyVaccineImg from '../assets/Jimg7.jpeg';
import fullBodyImg from '../assets/Jimg8.jpeg';

import cardiologyImg from '../assets/Jimg9.jpeg';
import pulmonologyImg from '../assets/Jimg10.jpeg';
import orthopedicImg from '../assets/Jimg11.jpeg';
import neurologyImg from '../assets/Jimg12.jpeg';

const Product1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  // --- DRAG TO SCROLL STATES ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

const mainServicesData = [
    { id: 1, title: "Monthly pregnant mother checkup", img: pregnantCheckupImg, rating: "4.97", reviews: "9.2k", price: 600, oldPrice: 800 },
    { id: 2, title: "Home doctor visit", img: homeDoctorImg, rating: "4.80", reviews: "4.6k", price: 449, oldPrice: 500 },
    { id: 3, title: "Physiotherapy session", img: physioImg, rating: "4.73", reviews: "3k", price: 700, oldPrice: 900 },
    { id: 4, title: "Diabetes management at home", img: diabetesImg, rating: "4.56", reviews: "8.7k", price: 349, oldPrice: 400 },
    { id: 5, title: "Elderly checkup at home", img: elderlyCheckupImg, rating: "4.32", reviews: "5.3k", price: 649, oldPrice: 950 },
    { id: 6, title: "Post-surgery nursing care", img: postSurgeryImg, rating: "4.90", reviews: "2.1k", price: 1200, oldPrice: 1500 },
    { id: 7, title: "Baby vaccination at home", img: babyVaccineImg, rating: "4.85", reviews: "6.4k", price: 500, oldPrice: 650 },
    { id: 8, title: "Full body health checkup", img: fullBodyImg, rating: "4.95", reviews: "12k", price: 999, oldPrice: 1499 },
  ];

  // For the modal grid
  const extendedServicesData = [
    ...mainServicesData,
    { id: 9, title: "Cardiology Care", img: cardiologyImg, rating: "4.88", reviews: "1.2k", price: 1500, oldPrice: 2000 },
    { id: 10, title: "Pulmonology Support", img: pulmonologyImg, rating: "4.70", reviews: "800", price: 800, oldPrice: 1100 },
    { id: 11, title: "Orthopedic Rehab", img: orthopedicImg, rating: "4.92", reviews: "3.4k", price: 950, oldPrice: 1200 },
    { id: 12, title: "Neurology Care", img: neurologyImg, rating: "4.81", reviews: "950", price: 1800, oldPrice: 2200 },
  ];

  // --- INFINITE LOOP DATA ---
  const infiniteServicesData = [
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set1-${s.id}` })),
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set2-${s.id}` })),
    ...mainServicesData.map(s => ({ ...s, uniqueId: `set3-${s.id}` }))
  ];

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth; 
    }
  }, []);

  // --- HANDLERS ---
  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 240, behavior: 'smooth' });
  };

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -240, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;

    if (scrollLeft >= singleSetWidth * 2 - clientWidth) {
      sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
    }
    else if (scrollLeft <= 0) {
      sliderRef.current.scrollLeft = scrollLeft + singleSetWidth;
    }
  };

  // --- DRAG EVENTS ---
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

  // Reusable Modern Card Component inside Tailwind
  const ServiceCard = ({ service }) => (
    <div className="flex flex-col w-[220px] shrink-0 cursor-pointer transition-transform duration-200 select-none hover:-translate-y-[3px]">
      <img 
        src={service.img} 
        alt={service.title} 
        className="w-full h-[170px] object-cover rounded-[16px] mb-[12px] shadow-[0_5px_15px_rgba(39,59,71,0.08)] pointer-events-none" 
        loading="lazy" 
      />
      <div className="flex flex-col px-[4px]">
        <h3 className="text-[14px] font-[700] text-[#273b47] m-0 mb-[8px] leading-[1.4] line-clamp-2">
          {service.title}
        </h3>
        <div className="flex items-center gap-[5px] mb-[8px] text-[13px]">
          <FaStar className="text-[#6b7c8f] text-[12px]" />
          <span className="text-[#6b7c8f] font-[600]">{service.rating}</span>
          <span className="text-[#a0aab2]">({service.reviews})</span>
        </div>
        <div className="flex items-baseline gap-[8px]">
          <span className="text-[15px] font-[800] text-[#273b47]">₹{service.price}</span>
          <span className="text-[13px] font-[600] text-[#a0aab2] line-through">₹{service.oldPrice}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        /* --- BRAND IMPORT: POPPINS --- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        /* Animations & Custom Scrollbars */
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-modal-fade-in { animation: modalFadeIn 0.3s ease-out forwards; }

        .custom-modal-scroll::-webkit-scrollbar { width: 8px; }
        .custom-modal-scroll::-webkit-scrollbar-track { background: #eef2f6; border-radius: 10px; }
        .custom-modal-scroll::-webkit-scrollbar-thumb { background: #15a083; border-radius: 10px; }
        .custom-modal-scroll::-webkit-scrollbar-thumb:hover { background: #11826a; }
      `}</style>

      {/* Main Container - Poppins Font Applied Globally */}
      <section className="bg-[#f4f8fb] py-[80px] font-['Poppins',sans-serif]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* Top Header Section */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-[20px] lg:gap-[40px] mb-[50px]">
            <div className="flex-[1.2]">
              <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[8px] px-[18px] rounded-[20px] text-[12px] font-[700] uppercase tracking-[1.5px] mb-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <FaHeart className="text-[14px]" /> OUR DEPARTMENT
              </div>
              <h2 className="text-[36px] lg:text-[42px] font-[900] leading-[1.2] m-0 capitalize">
                <span className="text-[#273b47]">Complete Health</span> <br />
                <span className="text-[#15a083]">Care Solutions</span>
              </h2>
            </div>

            <div className="flex-[1.5]">
              <p className="text-[#6b7c8f] text-[14px] leading-[1.8] m-0">
                Experience fast, reliable, and patient-centric medical services
                delivered directly to your doorstep. From urgent medicines to
                certified home nurses, we ensure your care never waits.
              </p>
            </div>

            <div className="flex-[0.8] flex lg:justify-end">
              <button 
                className="bg-[#15a083] text-[#ffffff] border-none py-[14px] px-[28px] rounded-[30px] text-[14px] font-[700] cursor-pointer transition-colors duration-300 hover:bg-[#11826a]" 
                onClick={() => setIsModalOpen(true)}
              >
                More Departments
              </button>
            </div>
          </div>

          {/* --- MAIN PAGE CAROUSEL (Infinite Slider) --- */}
          <div className="relative w-full flex items-center">
            
            <button 
              className="absolute left-[-15px] lg:left-[-25px] top-[75px] w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#e1e8ed] rounded-full flex justify-center items-center text-[16px] text-[#273b47] cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.08)] z-[10] transition-all duration-200 hover:scale-110 hover:text-[#15a083] hover:border-[#15a083]" 
              onClick={slideLeft} 
              aria-label="Scroll left"
            >
              <FaArrowLeft />
            </button>

            {/* Slider Track with Hidden Scrollbar Utility */}
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
            
            <button 
              className="absolute right-[-15px] lg:right-[-25px] top-[75px] w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#e1e8ed] rounded-full flex justify-center items-center text-[16px] text-[#273b47] cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.08)] z-[10] transition-all duration-200 hover:scale-110 hover:text-[#15a083] hover:border-[#15a083]" 
              onClick={slideRight} 
              aria-label="Scroll right"
            >
              <FaArrowRight />
            </button>
            
          </div>

        </div>

        {/* --- MODAL OVERLAY --- */}
        {isModalOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[rgba(39,59,71,0.6)] backdrop-blur-[8px] z-[1000] flex justify-center items-center p-[20px] box-border" onClick={() => setIsModalOpen(false)}>
            <div className="bg-[#f4f8fb] w-full max-w-[1200px] max-h-[90vh] rounded-[25px] p-[30px] lg:p-[40px] shadow-[0_25px_50px_rgba(0,0,0,0.3)] flex flex-col relative box-border animate-modal-fade-in" onClick={(e) => e.stopPropagation()}>
              
              <div className="flex justify-between items-center mb-[30px] pb-[20px] border-b-[2px] border-[#e1e8ed]">
                <h2 className="text-[32px] lg:text-[42px] font-[900] leading-[1.2] m-0 capitalize">
                  <span className="text-[#273b47]">All </span> 
                  <span className="text-[#15a083]">Departments</span>
                </h2>
                <button className="bg-transparent border-none text-[28px] text-[#de7223] cursor-pointer transition-all duration-300 flex justify-center items-center p-[10px] hover:text-[#15a083] hover:rotate-90" onClick={() => setIsModalOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              {/* Scrollable Grid inside Modal */}
              <div className="overflow-y-auto pr-[15px] pb-[20px] custom-modal-scroll">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-y-[30px] gap-x-[20px]">
                  {extendedServicesData.map((service) => (
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

export default Product1;