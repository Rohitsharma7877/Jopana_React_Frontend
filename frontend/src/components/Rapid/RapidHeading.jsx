import React, { useRef, useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { FaBolt } from "react-icons/fa";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import docConsultImg from "../assets/Jimg13.jpeg";
import nursingImg from "../assets/Jimg26.jpeg";
import physioImg from "../assets/Jimg14.jpeg";
import caretakerImg from "../assets/Jimg16.jpeg";
import elderlyImg from "../assets/Jimg15.jpeg";
import babyMotherImg from "../assets/Jimg8.jpeg";
import postOpImg from "../assets/Jimg27.jpeg";
import chronicCareImg from "../assets/Jimg25.jpeg";

const RapidData = [
  {
    id: "r1",
    title: "Doctors\nConsultation",
    time: "8 min",
    imgUrl: docConsultImg, // Using local image
  },
  {
    id: "r2",
    title: "Nursing Care",
    time: "14 min",
    imgUrl: nursingImg, // Using local image
  },
  {
    id: "r3",
    title: "Physiotherapy",
    time: "8 min",
    imgUrl: physioImg, // Using local image
  },
  {
    id: "r4",
    title: "Caretaker Services",
    time: "15 min",
    imgUrl: caretakerImg, // Using local image
  },
  {
    id: "r5",
    title: "Elderly Care",
    time: "9 min",
    imgUrl: elderlyImg, // Using local image
  },
  {
    id: "r6",
    title: "Baby and Mother\nCare",
    time: "12 min",
    imgUrl: babyMotherImg, // Using local image
  },
  {
    id: "r7",
    title: "Post Operative Care",
    time: "7 min",
    imgUrl: postOpImg, // Using local image
  },
  {
    id: "r8",
    title: "Chronic Care",
    time: "6 min",
    imgUrl: chronicCareImg, // Using local image
  },
];

// Duplicating for the infinite scroll effect
const infiniteServices = [...RapidData, ...RapidData, ...RapidData];

const RapidHeading = () => {
  const scrollRef = useRef(null);
  // const navigate = useNavigate();

  // Modal State
  const [selectedService, setSelectedService] = useState(null);

  // Dragging States
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const handleScroll = () => {
    const slider = scrollRef.current;
    if (!slider) return;
    const setWidth = slider.scrollWidth / 3;
    if (slider.scrollLeft >= setWidth * 2) {
      slider.scrollLeft -= setWidth;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += setWidth;
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  const startDragging = (e) => {
    setIsDragging(true);
    setDragDistance(0);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => setIsDragging(false);

  const move = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setDragDistance(Math.abs(walk));
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (service) => {
    if (dragDistance < 10) {
      setSelectedService(service);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 390;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative bg-[#ffffff] min-h-screen text-left">
      
      {/* --- TOP HEADER --- */}
      <section className="pt-[40px] md:pt-[60px] pb-[30px] md:pb-[40px] bg-[#ffffff] ">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-[25px] md:gap-[30px]">
          
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-[15px]">
              {/* Premium Circular Back Button */}
              <button
                className="w-[40px] h-[40px] bg-[#ffffff] text-[#273b47] text-[20px] cursor-pointer flex justify-center items-center transition-all hover:text-[#15a083] outline-none border-[1px] border-transparent hover:border-[#15a083] rounded-full"
                aria-label="Go back"
                // onClick={() => navigate(-1)}
              >
                <FiArrowLeft />
              </button>
              <h1 className="text-[28px] md:text-[36px] font-[900] text-[#273b47] m-0 leading-[1.2]">
                Rapid
              </h1>
            </div>
            
            {/* Orange Border Subtitle */}
            <p className="text-[14px] md:text-[15px] text-[#7a8a9e] font-[500] m-0 mt-[10px] md:mt-[8px] ml-[55px] pl-[12px] border-l-[4px] border-[#de7223] font-['Segoe_UI',Tahoma,Geneva,sans-serif] text-left">
              Quick, dependable services at your fingertips
            </p>
          </div>

          {/* Premium Search Bar */}
          <div className="bg-[#ffffff] rounded-[16px] p-[12px] px-[20px] flex items-center gap-[12px] w-full md:max-w-[350px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-shadow duration-300 focus-within:shadow-[0_15px_40px_rgba(21,160,131,0.1)] border-[1px] border-[#15a083]">
            <FiSearch className="text-[#15a083] text-[20px] shrink-0" />
            <input
              type="text"
              placeholder="Search for 'Doctors' or 'Care'..."
              className="border-none outline-none bg-transparent w-full text-[14px] font-[500] text-[#273b47] placeholder:text-[#a3b1bf]"
            />
          </div>

        </div>
      </section>

      {/* --- SLIDER SECTION --- */}
      <section className="pb-[80px] pt-[40px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] relative">
          
          {/* Left Navigation Arrow */}
          <button
            className="hidden md:flex absolute top-[calc(50%-25px)] left-[-20px] w-[50px] h-[50px] rounded-full bg-[#ffffff] border-[1px] border-[#15a083] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_10px_20px_rgba(39,59,71,0.06)] transition-all duration-300 hover:text-[#15a083] hover:scale-110 active:scale-95 outline-none"
            onClick={() => scroll("left")}
          >
            <FiChevronLeft />
          </button>

          {/* Slider Track */}
          <div
            className={`flex gap-[20px] md:gap-[30px] overflow-x-auto py-[20px] pb-[30px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing auto-cols-auto" : "cursor-grab"}`}
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={move}
          >
            {infiniteServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="group flex-none w-[140px] md:w-[180px] flex flex-col items-center text-center select-none cursor-pointer"
                onClick={() => handleCardClick(service)}
              >
                {/* Image Container with Soft Shadow & Lift */}
                <div className="w-full aspect-square rounded-[20px] overflow-hidden bg-[#ffffff] mb-[15px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)] group-hover:-translate-y-[5px] pointer-events-none">
                  <img
                    src={service.imgUrl}
                    alt={service.title.replace("\n", " ")}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    draggable="false"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-[14px] md:text-[16px] font-[800] text-[#273b47] m-0 leading-[1.3] whitespace-pre-line group-hover:text-[#15a083] transition-colors duration-300 mb-[8px]">
                  {service.title}
                </h3>

                {/* Rapid Teal Badge */}
                <div className="bg-[#15a083] text-white px-[12px] py-[4px] rounded-full flex items-center justify-center gap-[5px] text-[12px] font-[800] tracking-[0.5px] shadow-[0_4px_10px_rgba(21,160,131,0.2)] mt-auto">
                  <FaBolt className="text-[10px]" /> {service.time}
                </div>

              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            className="hidden md:flex absolute top-[calc(50%-25px)] right-[-20px] w-[50px] h-[50px] rounded-full bg-[#ffffff] border-[1px] border-[#15a083] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_10px_20px_rgba(39,59,71,0.06)] transition-all duration-300 hover:text-[#15a083] hover:scale-110 active:scale-95 outline-none"
            onClick={() => scroll("right")}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>

      {/* --- SIMPLE RAPID POPUP MODAL --- */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-[#273b47]/60 backdrop-blur-sm z-[1000] flex justify-center items-center p-[20px] transition-opacity duration-300 text-left"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#ffffff] w-full max-w-[400px] rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-[20px] md:p-[24px] border-b-[1px] border-[#eef2f6]">
              <h2 className="text-[20px] md:text-[22px] font-[900] text-[#273b47] m-0 whitespace-pre-line leading-[1.2] text-left">
                {selectedService.title.replace("\n", " ")}
              </h2>
              <button
                className="bg-[#f4f8fb] w-[36px] h-[36px] rounded-full border-none text-[#7a8a9e] text-[20px] cursor-pointer hover:text-[#de7223] hover:bg-[#fff0e6] transition-colors flex justify-center items-center shrink-0"
                onClick={() => setSelectedService(null)}
              >
                <FiX />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-[20px] md:p-[24px] flex flex-col items-center">
              <img 
                src={selectedService.imgUrl} 
                alt="Service" 
                className="w-[120px] h-[120px] rounded-[20px] object-cover shadow-md mb-[20px]" 
              />
              <p className="text-[14px] text-[#6b7c8f] text-center mb-[20px]">
                A provider will be assigned and reach your location in approximately <strong>{selectedService.time}</strong>.
              </p>
              
              <button className="w-full bg-[#15a083] text-[#ffffff] border-none py-[12px] rounded-[10px] text-[14px] font-[800] uppercase tracking-[0.5px] shadow-[0_4px_10px_rgba(21,160,131,0.2)] hover:bg-[#11826a] transition-colors cursor-pointer">
                Request Service Now
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

export default RapidHeading;