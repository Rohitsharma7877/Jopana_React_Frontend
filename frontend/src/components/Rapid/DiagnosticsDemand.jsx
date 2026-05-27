import React, { useRef, useState } from "react";
import { FaStar, FaBolt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import newbornCareImg from "../assets/Jimg8.jpeg"; 
import mobilityImg from "../assets/Jimg14.jpeg";
import diabetesImg from "../assets/Jimg16.jpeg";
import hypertensionImg from "../assets/Jimg13.jpeg";
import elderlyCheckupImg from "../assets/Jimg15.jpeg";

const diagnosticsData = [
  { 
    id: "d1", 
    title: "Newborn care support", 
    img: newbornCareImg, 
    rating: "4.80", 
    reviews: "4.6k", 
    price: 449, 
    oldPrice: null, 
    time: "9 min" 
  },
  { 
    id: "d2", 
    title: "Mobility support", 
    img: mobilityImg, 
    rating: "4.56", 
    reviews: "8.7k", 
    price: 349, 
    oldPrice: 400, 
    time: "15 min" 
  },
  { 
    id: "d3", 
    title: "Diabetes monitoring", 
    img: diabetesImg, 
    rating: "4.73", 
    reviews: "3k", 
    price: 700, 
    oldPrice: 900, 
    time: "12 min" 
  },
  { 
    id: "d4", 
    title: "Monthly hypertension monitoring", 
    img: hypertensionImg, 
    rating: "4.32", 
    reviews: "5.3k", 
    price: 649, 
    oldPrice: 950, 
    time: "6 min" 
  },
  { 
    id: "d5", 
    title: "Elderly checkup at home", 
    img: elderlyCheckupImg, 
    rating: "4.56", 
    reviews: "8.7k", 
    price: 349, 
    oldPrice: 400, 
    time: "7 min" 
  }
];

const DiagnosticsDemand = () => {
  const scrollRef = useRef(null);

  // Dragging States for Desktop Swiping
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => setIsDragging(false);

  const move = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button Scroll Logic
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Amount to scroll per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // --- EXACT SERVICE CARD FROM HOME ASSISTANCE ---
  const ServiceCard = ({ service }) => (
    <div className="group flex-none w-[160px] md:w-[200px] flex flex-col items-start text-left select-none cursor-pointer h-full">
      {/* Image */}
      <div className="w-full aspect-square rounded-[16px] overflow-hidden bg-[#eef2f6] mb-[12px] shadow-sm transition-all duration-300 group-hover:shadow-md pointer-events-none shrink-0">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          draggable="false"
        />
      </div>
      
      {/* Title (2 lines max) */}
      <h3 className="text-[13px] md:text-[14px] font-[800] text-[#0F0F0F] m-0 mb-[6px] leading-[1.3] text-left w-full line-clamp-2 group-hover:text-[#15a083] transition-colors">
        {service.title}
      </h3>

      {/* Rating & Reviews (Gray Star) */}
      <div className="flex items-center justify-start gap-[4px] mb-[6px] w-full text-left">
        <FaStar className="text-[#a3b1bf] text-[11px]" />
        <span className="text-[12px] font-[600] text-[#7a8a9e]">
          {service.rating} ({service.reviews})
        </span>
      </div>

      {/* Price Row */}
      <div className="flex items-center justify-start gap-[6px] mb-[10px] w-full text-left">
        <span className="text-[14px] font-[800] text-[#0F0F0F]">
          ₹{service.price}
        </span>
        {service.oldPrice && (
          <span className="text-[12px] font-[500] text-[#a3b1bf] line-through">
            ₹{service.oldPrice}
          </span>
        )}
      </div>

      {/* Teal Lightning Badge */}
      <div className="bg-[#15a083] text-white px-[10px] py-[3px] rounded-full flex items-center justify-center gap-[4px] text-[11px] font-[800] tracking-[0.5px] mt-auto shadow-[0_4px_10px_rgba(21,160,131,0.2)]">
        <FaBolt className="text-[9px]" /> {service.time}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="w-full bg-[#f9fafb] py-[40px] md:py-[60px] text-left border-t border-[#eef2f6]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] relative">
          
          {/* --- SECTION HEADER & VIEW ALL BUTTON --- */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[15px] mb-[30px] w-full">
            <div className="flex flex-col items-start text-left">
              <h2 className="text-[24px] md:text-[28px] font-[900] text-[#0F0F0F] m-0 mb-[6px] leading-tight text-left w-full">
                Diagnostics on demand
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#7a8a9e] font-[500] m-0 text-left w-full">
                On-demand tests, powered by your health data
              </p>
            </div>
            
            <button className="bg-transparent border-[1.5px] border-[#eef2f6] text-[#15a083] px-[20px] py-[8px] rounded-[8px] text-[13px] font-[700] hover:bg-[#f4f8fb] transition-colors cursor-pointer outline-none shrink-0 shadow-sm">
              View all
            </button>
          </div>

          {/* --- CAROUSEL CONTAINER --- */}
          <div className="relative w-full">
            
            {/* Left Arrow */}
            <button
              className="hidden md:flex absolute top-[calc(50%-45px)] left-[-20px] w-[45px] h-[45px] rounded-full bg-[#ffffff] border-[1px] border-[#eef2f6] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all hover:scale-105 outline-none"
              onClick={() => scroll("left")}
            >
              <FiChevronLeft />
            </button>

            {/* Slider Track */}
            <div
              className={`flex gap-[15px] md:gap-[20px] overflow-x-auto pb-[20px] pt-[5px] hide-scrollbar items-stretch ${isDragging ? "cursor-grabbing auto-cols-auto" : "cursor-grab"}`}
              ref={scrollRef}
              onMouseDown={startDragging}
              onMouseLeave={stopDragging}
              onMouseUp={stopDragging}
              onMouseMove={move}
            >
              {diagnosticsData.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              className="hidden md:flex absolute top-[calc(50%-45px)] right-[-20px] w-[45px] h-[45px] rounded-full bg-[#ffffff] border-[1px] border-[#eef2f6] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all hover:scale-105 outline-none"
              onClick={() => scroll("right")}
            >
              <FiChevronRight />
            </button>

          </div>
        </div>
      </section>
    </>
  );
};

export default DiagnosticsDemand;