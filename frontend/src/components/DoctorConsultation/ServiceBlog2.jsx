import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaPlay, FaClock, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
// Ensure these match your asset files or share thumbnails across sections cleanly
import thumbPhysician from "../assets/Jimg13.jpeg";
import thumbPaediatric from "../assets/Jimg14.jpeg";
import thumbOrthopedist from "../assets/Jimg15.jpeg";
import thumbENT from "../assets/Jimg16.jpeg";
import thumbDerm from "../assets/Jimg25.jpeg";

const ServiceBlog2 = () => {
  // State to control the video popup modal
  const [activeVideo, setActiveVideo] = useState(null);
  
  // Slider tracking states
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- UNIQUE DYNAMIC VIDEO DATA FOR EACH CONSULTATION SECTION ---
  const videoBlogs = [
    {
      id: 1,
      thumbnail: thumbPhysician,
      category: "GENERAL HEALTH",
      title: "Understanding General Consultations: Vitals & Chronic Prevention",
      duration: "03:45",
      date: "Nov 02, 2026",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // General video id
    },
    {
      id: 2,
      thumbnail: thumbPaediatric,
      category: "PAEDIATRICS",
      title: "Child Growth Milestones: When to Consult a Pediatric Specialist",
      duration: "05:12",
      date: "Nov 05, 2026",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0", // Paediatric video id
    },
    {
      id: 3,
      thumbnail: thumbOrthopedist,
      category: "ORTHOPEDICS",
      title: "Managing Joint Stiffness & Advanced Bone Treatment Plans",
      duration: "06:20",
      date: "Nov 12, 2026",
      videoUrl: "https://www.youtube.com/embed/2M7Z0W1gX_c", // Orthopedist video id
    },
    {
      id: 4,
      thumbnail: thumbENT,
      category: "ENT SPECIFIC",
      title: "Surgical Sinus Relief & Seasonal Allergy Management Techniques",
      duration: "04:30",
      date: "Nov 15, 2026",
      videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso", // ENT video id
    },
    {
      id: 5,
      thumbnail: thumbDerm,
      category: "DERMATOLOGY",
      title: "Advanced Hair, Scalp Analysis & Personalized Skincare Routines",
      duration: "07:15",
      date: "Nov 19, 2026",
      videoUrl: "https://www.youtube.com/embed/3AtDnEC4zak", // Dermatologist video id
    },
  ];

  // Infinite duplicate mapping loop data pipeline setup
  const infiniteVideosData = [
    ...videoBlogs.map(v => ({ ...v, uniqueId: `set1-${v.id}` })),
    ...videoBlogs.map(v => ({ ...v, uniqueId: `set2-${v.id}` })),
    ...videoBlogs.map(v => ({ ...v, uniqueId: `set3-${v.id}` }))
  ];

  // Initialize horizontal track view space position centered
  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth; 
    }
  }, []);

  // --- MOTION TRACK LAYOUT SLIDER HANDLERS ---
  const slideRight = () => { if (sliderRef.current) sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' }); };
  const slideLeft = () => { if (sliderRef.current) sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' }); };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;
    if (scrollLeft >= singleSetWidth * 2 - clientWidth) sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
    else if (scrollLeft <= 0) sliderRef.current.scrollLeft = scrollLeft + singleSetWidth;
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

  return (
    <>
      <style>{`
        .custom-blog2-scroll::-webkit-scrollbar { display: none; }
        .custom-blog2-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="bg-[#f4f8fb] py-[60px] pb-[80px] ">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* --- HEADER AREA --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[20px] md:gap-[40px] mb-[40px]">
            <div className="flex-[1.2] text-left">
              
              {/* Perfectly matched stylized badge */}
              <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[8px] px-[18px] rounded-[20px] text-[12px] font-[800] uppercase tracking-[1.5px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] mb-[20px]">
                <FaHeart className="text-[#15a083]" /> CLINICAL VIDEOS
              </div>

              <h2 className="text-[32px] md:text-[42px] font-[900] leading-[1.3] m-0">
                <span className="text-[#273b47]">Specialist Medical Overviews</span>{" "}
                <br />
                <span className="bg-[#15a083] text-[#ffffff] px-[15px] py-[2px] inline-block mt-[5px]">
                  Expert Care Insights
                </span>
              </h2>
            </div>
            <div className="flex-1 pb-[10px] text-left">
              <p className="text-[#7a8a9e] text-[14px] leading-[1.8] m-0 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                Review targeted visual video walkthroughs for our diagnostic lines. Meet our clinical team and discover what happens during treatment protocols.
              </p>
            </div>
          </div>

          {/* --- SCROLL CAROUSEL INTERFACE --- */}
          <div className="relative w-full flex items-center">
            
            <button 
              className="hidden md:flex absolute left-[-22px] top-[40%] -translate-y-1/2 w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] text-[#0F0F0F] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-colors duration-200 hover:text-[#14B8A6] hover:border-[#14B8A6]" 
              onClick={slideLeft}
            >
              <FaArrowLeft />
            </button>

            {/* Slider Track Wrapper */}
            <div 
              className={`flex gap-[30px] overflow-x-auto py-[10px] pb-[30px] custom-blog2-scroll ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {infiniteVideosData.map((video) => (
                <div
                  key={video.uniqueId}
                  className="w-[320px] shrink-0 group flex flex-col bg-[#ffffff] rounded-[20px] p-[20px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)] select-none text-left"
                >
                  {/* Thumbnail Container Area */}
                  <div 
                    className="relative rounded-[15px] overflow-hidden h-[180px] mb-[20px] cursor-pointer"
                    onClick={() => { if(!isDragging) setActiveVideo(video); }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Translucent Backdrop Layer */}
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40 flex justify-center items-center z-[1]">
                      {/* Floating Trigger Disk */}
                      <div className="w-[45px] h-[45px] bg-white/95 rounded-full flex justify-center items-center text-[#15a083] text-[16px] pl-[4px] shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110">
                        <FaPlay />
                      </div>
                    </div>

                    {/* Functional Category Tag */}
                    <div className="absolute top-[15px] left-[15px] bg-[#15a083] text-[#ffffff] py-[4px] px-[12px] rounded-[6px] text-[10px] font-[800] tracking-[1px] uppercase z-[2]">
                      {video.category}
                    </div>
                    
                    {/* Media Index Metrics Display */}
                    <div className="absolute bottom-[10px] right-[10px] bg-black/70 backdrop-blur-sm text-[#ffffff] py-[4px] px-[8px] rounded-[6px] text-[10px] font-[600] flex items-center gap-[5px] z-[2]">
                      <FaClock className="text-[#de7223]" /> {video.duration}
                    </div>
                  </div>

                  {/* Context Block */}
                  <div className="flex flex-col flex-grow">
                    <h3 
                      className="text-[16px] font-[800] text-[#273b47] leading-[1.4] m-0 mb-[15px] transition-colors duration-300 group-hover:text-[#15a083] line-clamp-2 cursor-pointer text-left"
                      onClick={() => { if(!isDragging) setActiveVideo(video); }}
                    >
                      {video.title}
                    </h3>

                    {/* Dynamic Timestamp Footer Info */}
                    <div className="flex items-center justify-between mt-auto pt-[15px] border-t-[1px] border-[#eef2f6]">
                      <span className="text-[11px] font-[600] text-[#7a8a9e] uppercase">
                        {video.date}
                      </span>
                      <span 
                        className="text-[11px] font-[700] text-[#de7223] uppercase flex items-center gap-[5px] cursor-pointer"
                        onClick={() => { if(!isDragging) setActiveVideo(video); }}
                      >
                        Watch Stream <FaPlay className="text-[9px]" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="hidden md:flex absolute right-[-22px] top-[40%] -translate-y-1/2 w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] text-[#0F0F0F] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-colors duration-200 hover:text-[#14B8A6] hover:border-[#14B8A6]" 
              onClick={slideRight}
            >
              <FaArrowRight />
            </button>
          </div>

        </div>
      </section>

      {/* --- PROFESSIONAL INTERACTIVE EMBED MODAL WINDOW --- */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-[#273b47]/80 backdrop-blur-md z-[1000] flex justify-center items-center p-[20px] animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          {/* Centered view mask restricting scale to 35-40% viewport size */}
          <div
            className="w-full max-w-[500px] md:max-w-[450px] rounded-[16px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative bg-black animate-scale-up"
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Minimalist floating dynamic exit terminal toggle button */}
            <button
              className="absolute top-[15px] right-[15px] bg-black/50 hover:bg-black/80 text-white w-[35px] h-[35px] rounded-full flex justify-center items-center border-none cursor-pointer transition-colors z-[10]"
              onClick={() => setActiveVideo(null)}
            >
              <FaTimes className="text-[16px]" />
            </button>

            {/* Seamless Fixed Ratio Fluid Frame Container */}
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="absolute top-0 left-0 w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Bottom Text Label Bar */}
            <div className="bg-[#1a2730] p-[15px] text-left">
              <h4 className="text-white text-[13px] font-[600] m-0 line-clamp-1">{activeVideo.title}</h4>
            </div>

          </div>
        </div>
      )}

      {/* Local keyframe transition properties injected inside header */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </>
  );
};

export default ServiceBlog2;