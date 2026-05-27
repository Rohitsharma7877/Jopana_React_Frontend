import React, { useRef, useState, useEffect } from "react";
import { FaStar, FaBolt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
// (Using placeholders for your actual local paths)
import pregnantMotherImg from "../assets/Jimg13.jpeg"; 
import homeDoctorImg from "../assets/Jimg14.jpeg";
import physioImg from "../assets/Jimg26.jpeg";
import diabetesImg from "../assets/Jimg16.jpeg";
import elderlyImg from "../assets/Jimg15.jpeg";

const nextSlotsData = [
  {
    id: "ns1",
    title: "Monthly pregnant mother checkup",
    rating: "4.97",
    reviews: "9.2k",
    currentPrice: "600",
    originalPrice: null, // No strikethrough price for this one
    time: "12 min",
    imgUrl: pregnantMotherImg,
  },
  {
    id: "ns2",
    title: "Home doctor visit",
    rating: "4.80",
    reviews: "4.6k",
    currentPrice: "449",
    originalPrice: "500",
    time: "7 min",
    imgUrl: homeDoctorImg,
  },
  {
    id: "ns3",
    title: "Physiotherapy session",
    rating: "4.73",
    reviews: "3k",
    currentPrice: "700",
    originalPrice: "900",
    time: "13 min",
    imgUrl: physioImg,
  },
  {
    id: "ns4",
    title: "Diabetes management at home",
    rating: "4.56",
    reviews: "8.7k",
    currentPrice: "349",
    originalPrice: "400",
    time: "9 min",
    imgUrl: diabetesImg,
  },
  {
    id: "ns5",
    title: "Elderly checkup at home",
    rating: "4.32",
    reviews: "5.3k",
    currentPrice: "649",
    originalPrice: "950",
    time: "4 min",
    imgUrl: elderlyImg,
  },
  {
    id: "ns6",
    title: "rr checkup at home",
    rating: "4.32",
    reviews: "5.3k",
    currentPrice: "649",
    originalPrice: "950",
    time: "4 min",
    imgUrl: elderlyImg,
  }
];

const NextSlot = () => {
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

  return (
    <div className="w-full bg-[#f9fafb] py-[40px] md:py-[60px] text-left">
      <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] relative">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-start mb-[30px] text-left">
          <h2 className="text-[24px] md:text-[28px] font-[900] text-[#0F0F0F] m-0 mb-[6px] leading-tight text-left w-full">
            Next available slots
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#7a8a9e] font-[500] m-0 text-left w-full">
            Based on your location
          </p>
        </div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div className="relative w-full">
          
          {/* Left Arrow (Hidden by default, shows on hover or if scrolled) */}
          <button
            className="hidden md:flex absolute top-[calc(50%-45px)] left-[-20px] w-[45px] h-[45px] rounded-full bg-[#ffffff] border-[1px] border-[#eef2f6] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all hover:scale-105 outline-none"
            onClick={() => scroll("left")}
          >
            <FiChevronLeft />
          </button>

          {/* Slider Track */}
          <div
            className={`flex gap-[15px] md:gap-[20px] overflow-x-auto pb-[20px] pt-[5px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing auto-cols-auto" : "cursor-grab"}`}
            ref={scrollRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={move}
          >
            {nextSlotsData.map((slot) => (
              <div
                key={slot.id}
                className="group flex-none w-[160px] md:w-[200px] flex flex-col items-start text-left select-none cursor-pointer"
              >
                {/* Image */}
                <div className="w-full aspect-square rounded-[16px] overflow-hidden bg-[#eef2f6] mb-[12px] shadow-sm transition-all duration-300 group-hover:shadow-md pointer-events-none">
                  <img
                    src={slot.imgUrl}
                    alt={slot.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    draggable="false"
                  />
                </div>
                
                {/* Title (2 lines max) */}
                <h3 className="text-[13px] md:text-[14px] font-[800] text-[#0F0F0F] m-0 mb-[6px] leading-[1.3] text-left w-full line-clamp-2 group-hover:text-[#15a083] transition-colors">
                  {slot.title}
                </h3>

                {/* Rating & Reviews (Gray Star) */}
                <div className="flex items-center justify-start gap-[4px] mb-[6px] w-full text-left">
                  <FaStar className="text-[#a3b1bf] text-[11px]" />
                  <span className="text-[12px] font-[600] text-[#7a8a9e]">
                    {slot.rating} ({slot.reviews})
                  </span>
                </div>

                {/* Price Row */}
                <div className="flex items-center justify-start gap-[6px] mb-[10px] w-full text-left">
                  <span className="text-[14px] font-[800] text-[#0F0F0F]">
                    ₹{slot.currentPrice}
                  </span>
                  {slot.originalPrice && (
                    <span className="text-[12px] font-[500] text-[#a3b1bf] line-through">
                      ₹{slot.originalPrice}
                    </span>
                  )}
                </div>

                {/* Teal Lightning Badge */}
                <div className="bg-[#15a083] text-white px-[10px] py-[3px] rounded-full flex items-center justify-center gap-[4px] text-[11px] font-[800] tracking-[0.5px] mt-auto">
                  <FaBolt className="text-[9px]" /> {slot.time}
                </div>

              </div>
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
    </div>
  );
};

export default NextSlot;