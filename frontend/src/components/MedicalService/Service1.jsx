import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import docConsultImg from "../assets/Jimg13.jpeg";
import nursingImg from "../assets/Jimg26.jpeg";
import physioImg from "../assets/Jimg14.jpeg";
import caretakerImg from "../assets/Jimg16.jpeg";
import elderlyImg from "../assets/Jimg15.jpeg";
import babyMotherImg from "../assets/Jimg8.jpeg";
import postOpImg from "../assets/Jimg27.jpeg";
import chronicCareImg from "../assets/Jimg25.jpeg";

const services = [
  {
    id: "s1",
    title: "Doctors\nConsultation",
    imgUrl: docConsultImg,
    subOptions: [
      {
        title: "Online consultation",
        desc: "Consult a doctor via video or chat from home",
        img: docConsultImg,
        path: "/services/doctor-consultation/online",
      },
      {
        title: "Offline consultation",
        desc: "A doctor visits you at your home directly",
        img: elderlyImg,
        path: "/services/doctor-consultation/offline",
      },
    ],
  },
  {
    id: "s2",
    title: "Nursing Care",
    imgUrl: nursingImg,
    subOptions: [
      {
        title: "Short-term Care (1-4 hrs)",
        desc: "Quick nursing assistance for specific medical needs",
        img: nursingImg,
      },
      {
        title: "Continuous Care (12/24 hrs)",
        desc: "Full-time nursing support for chronic illness or recovery",
        img: postOpImg,
      },
    ],
  },
  {
    id: "s3",
    title: "Physiotherapy",
    imgUrl: physioImg,
    subOptions: [
      {
        title: "At-Home Physiotherapy",
        desc: "Personalized recovery sessions in the comfort of your home",
        img: physioImg,
      },
      {
        title: "Clinic Appointment",
        desc: "Visit our state-of-the-art facilities for advanced therapy",
        img: docConsultImg,
      },
    ],
  },
  {
    id: "s4",
    title: "Caretaker Services",
    imgUrl: caretakerImg,
    subOptions: [
      {
        title: "Day Shift Caretaker",
        desc: "Assistance with daily activities and hygiene during the day",
        img: caretakerImg,
      },
      {
        title: "Night Shift Caretaker",
        desc: "Dedicated monitoring and support throughout the night",
        img: chronicCareImg,
      },
    ],
  },
  {
    id: "s5",
    title: "Elderly Care",
    imgUrl: elderlyImg,
    subOptions: [
      {
        title: "Companionship & Assistance",
        desc: "Help with daily chores, medication tracking, and meals",
        img: elderlyImg,
      },
      {
        title: "Specialized Dementia Care",
        desc: "Trained professionals for Alzheimer's and Dementia support",
        img: caretakerImg,
      },
    ],
  },
  {
    id: "s6",
    title: "Baby and Mother\nCare",
    imgUrl: babyMotherImg,
    subOptions: [
      {
        title: "Newborn Care",
        desc: "Expert handling, bathing, and feeding support for newborns",
        img: babyMotherImg,
      },
      {
        title: "Postpartum Mother Care",
        desc: "Recovery assistance and lactation support for new mothers",
        img: nursingImg,
      },
    ],
  },
  {
    id: "s7",
    title: "Post Operative Care",
    imgUrl: postOpImg,
    subOptions: [
      {
        title: "Surgical Wound Care",
        desc: "Professional dressing changes and infection monitoring",
        img: postOpImg,
      },
      {
        title: "Mobility Assistance",
        desc: "Safe support for movement and transferring post-surgery",
        img: physioImg,
      },
    ],
  },
  {
    id: "s8",
    title: "Chronic Care",
    imgUrl: chronicCareImg,
    subOptions: [
      {
        title: "Vitals Monitoring",
        desc: "Regular tracking of BP, Sugar, and other critical metrics",
        img: chronicCareImg,
      },
      {
        title: "Medication Administration",
        desc: "Strict adherence to prescription schedules and IV support",
        img: nursingImg,
      },
    ],
  },
];

const infiniteServices = [...services, ...services, ...services];

const Service1 = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

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

  const openAIAssistant = (e) => {
    e.preventDefault();
    setSelectedService(null);
    window.dispatchEvent(new Event("openAIBot"));
  };

  return (
    <div className="w-full relative bg-[#ffffff] min-h-screen">
      {/* Top Header */}
      <section className="pt-[40px] md:pt-[60px] pb-[30px] md:pb-[40px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-[25px] md:gap-[30px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-[15px]">
              {/* Premium Back Button */}
              <button
                className="w-[40px] h-[40px] bg-[#ffffff] rounded-full border-[1px] border-[#15a083] text-[#273b47] text-[20px] cursor-pointer flex justify-center items-center transition-all hover:bg-[#15a083] hover:text-[#ffffff] shadow-[0_4px_10px_rgba(39,59,71,0.06)] hover:-translate-x-[2px]"
                aria-label="Go back"
                onClick={() => navigate(-1)}
              >
                <FiArrowLeft />
              </button>
              <h1 className="text-[28px] md:text-[36px] font-[900] text-[#273b47] m-0 leading-[1.2]">
                Our Services
              </h1>
            </div>
            <p className="text-[14px] md:text-[15px] text-[#7a8a9e] font-[500] m-0 mt-[10px] md:mt-[8px] ml-[55px] pl-[12px] border-l-[4px] border-[#de7223] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
              Find the right care for you and your loved ones
            </p>
          </div>

          {/* Premium Search Bar */}
          <div className="bg-[#ffffff] rounded-[16px] p-[12px] px-[20px] flex items-center gap-[12px] w-full md:max-w-[350px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-shadow duration-300 focus-within:shadow-[0_15px_40px_rgba(21,160,131,0.1)] border-[1px] border-[#15a083]">
            <FiSearch className="text-[#15a083] text-[20px] " />
            <input
              type="text"
              placeholder="Search for 'Doctors' or 'Care'..."
              className="border-none outline-none bg-transparent w-full text-[14px] font-[500] text-[#273b47] placeholder:text-[#a3b1bf]"
            />
          </div>
        </div>
      </section>

      {/* Bottom Slider Section */}
      <section className="pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] relative">
          {/* Left Navigation Arrow */}
          <button
            className="hidden md:flex absolute top-[calc(50%-25px)] left-[-20px] w-[50px] h-[50px] rounded-full bg-[#ffffff] border-[1px] border-[#15a083] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_10px_20px_rgba(39,59,71,0.06)] transition-all duration-300 hover:text-[#15a083] hover:scale-110 active:scale-95"
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
                <h3 className="text-[14px] md:text-[16px] font-[800] text-[#273b47] m-0 leading-[1.3] whitespace-pre-line group-hover:text-[#15a083] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            className="hidden md:flex absolute top-[calc(50%-25px)] right-[-20px] w-[50px] h-[50px] rounded-full bg-[#ffffff] border-[1px] border-[#15a083] text-[#273b47] items-center justify-center text-[20px] cursor-pointer z-10 shadow-[0_10px_20px_rgba(39,59,71,0.06)] transition-all duration-300 hover:text-[#15a083] hover:scale-110 active:scale-95"
            onClick={() => scroll("right")}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>

      {/* --- PROFESSIONAL POPUP MODAL --- */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-[#273b47]/60 backdrop-blur-sm z-[1000] flex justify-center items-center p-[20px] transition-opacity duration-300"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#ffffff] w-full max-w-[550px] rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-[20px] md:p-[24px] border-b-[1px] border-[#eef2f6]">
              <h2 className="text-[20px] md:text-[22px] font-[900] text-[#273b47] m-0 whitespace-pre-line leading-[1.2]">
                {selectedService.title.replace("\n", " ")}
              </h2>
              <button
                className="bg-[#f4f8fb] w-[36px] h-[36px] rounded-full border-none text-[#7a8a9e] text-[20px] cursor-pointer hover:text-[#de7223] hover:bg-[#fff0e6] transition-colors flex justify-center items-center"
                onClick={() => setSelectedService(null)}
              >
                <FiX />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-[20px] md:p-[24px]">
              {/* Map through sub-options dynamically */}
              <div className="flex flex-col">
                {selectedService.subOptions.map((option, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className="group flex items-center gap-[15px] py-[16px] px-[12px] -mx-[12px] rounded-[16px] cursor-pointer transition-all duration-300 hover:bg-[#f4f8fb] hover:shadow-[0_4px_15px_rgba(39,59,71,0.04)]"
                      onClick={() => {
                        if (option.path) navigate(option.path);
                      }}
                    >
                      {/* Image Thumbnail */}
                      <img
                        src={option.img}
                        alt={option.title}
                        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[14px] object-cover shrink-0 shadow-[0_4px_10px_rgba(39,59,71,0.06)]"
                      />

                      {/* Text Data */}
                      <div className="flex flex-col flex-grow">
                        <h4 className="text-[15px] md:text-[16px] font-[800] text-[#273b47] m-0 mb-[4px] group-hover:text-[#15a083] transition-colors">
                          {option.title}
                        </h4>
                        <p className="text-[12px] md:text-[13px] text-[#7a8a9e] font-[500] m-0 leading-[1.4] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                          {option.desc}
                        </p>
                      </div>

                      {/* Premium Arrow Icon */}
                      <FiChevronRight className="text-[#a3b1bf] text-[24px] shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#de7223]" />
                    </div>

                    {/* Divider */}
                    {idx !== selectedService.subOptions.length - 1 && (
                      <div className="w-full h-[1px] bg-[#eef2f6]"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Modal Footer (Smart AI Bot Link) */}
            <div className="bg-[#f9fbfd] border-t-[1px] border-[#eef2f6] p-[20px] text-center">
              <p className="text-[13px] text-[#7a8a9e] font-[500] m-0 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                Not sure which one to pick?{" "}
                <a
                  href="#"
                  className="text-[#de7223] font-[800] no-underline hover:underline transition-all hover:text-[#c45a1c]"
                  onClick={openAIAssistant}
                >
                  Chat with our AI Assistant
                </a>
              </p>
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

export default Service1;
