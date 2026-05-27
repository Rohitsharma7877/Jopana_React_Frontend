import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaPlay, FaClock, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import thumb1 from "../assets/Jimg13.jpeg";
import thumb2 from "../assets/Jimg14.jpeg";
import thumb3 from "../assets/Jimg15.jpeg";
import thumb4 from "../assets/Jimg16.jpeg"; // Added new thumbnail
import thumb5 from "../assets/Jimg25.jpeg"; // Added new thumbnail

const ServiceBlog = () => {
  // State to control the video popup modal
  const [activeVideo, setActiveVideo] = useState(null);
  
  // Slider states
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- MOCK VIDEO DATA (Now 5 items) ---
  const videoBlogs = [
    {
      id: 1,
      thumbnail: thumb1,
      category: "TUTORIAL",
      title: "How Our Home Nursing Care Process Works",
      duration: "04:15",
      date: "Oct 12, 2026",
      videoUrl: "https://www.youtube.com/embed/d37y_5af98Q",
    },
    {
      id: 2,
      thumbnail: thumb2,
      category: "EXPERT ADVICE",
      title: "Post-Operative Physiotherapy: What to Expect",
      duration: "06:30",
      date: "Oct 18, 2026",
      videoUrl: "https://www.youtube.com/embed/d37y_5af98Q",
    },
    {
      id: 3,
      thumbnail: thumb3,
      category: "GUIDE",
      title: "A Guide to Comprehensive Mother & Child Care",
      duration: "05:45",
      date: "Oct 22, 2026",
      videoUrl: "https://www.youtube.com/embed/d37y_5af98Q",
    },
    {
      id: 4,
      thumbnail: thumb4,
      category: "INTERVIEW",
      title: "Meet Our Expert Caretakers: A Day in the Life",
      duration: "08:10",
      date: "Oct 25, 2026",
      videoUrl: "https://www.youtube.com/embed/d37y_5af98Q",
    },
    {
      id: 5,
      thumbnail: thumb5,
      category: "WELLNESS",
      title: "5 Simple Exercises for Elderly Joint Mobility",
      duration: "03:20",
      date: "Oct 28, 2026",
      videoUrl: "https://www.youtube.com/embed/d37y_5af98Q",
    },
  ];

  // Infinite loop data setup
  const infiniteVideosData = [
    ...videoBlogs.map(v => ({ ...v, uniqueId: `set1-${v.id}` })),
    ...videoBlogs.map(v => ({ ...v, uniqueId: `set2-${v.id}` })),
    ...videoBlogs.map(v => ({ ...v, uniqueId: `set3-${v.id}` }))
  ];

  // Initialize slider position
  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth; 
    }
  }, []);

  // --- SLIDER HANDLERS ---
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
        .custom-blog-scroll::-webkit-scrollbar { display: none; }
        .custom-blog-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="bg-[#f4f8fb] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* --- HEADER AREA --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[20px] md:gap-[40px] mb-[40px]">
            <div className="flex-[1.2]">
              <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[8px] px-[18px] rounded-[20px] text-[12px] font-[800] uppercase tracking-[1.5px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] mb-[20px]">
                <FaHeart className="text-[#15a083]" /> VIDEO GUIDES
              </div>

              <h2 className="text-[32px] md:text-[42px] font-[900] leading-[1.3] m-0">
                <span className="text-[#273b47]">Understand Our Services</span>{" "}
                <br />
                <span className="bg-[#15a083] text-[#ffffff] px-[15px] py-[2px] inline-block mt-[5px]">
                  Through Video Blogs
                </span>
              </h2>
            </div>
            <div className="flex-1 pb-[10px]">
              <p className="text-[#7a8a9e] text-[14px] leading-[1.8] m-0 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                Watch our expert medical professionals explain treatments, share
                health tips, and guide you through our comprehensive care
                processes step-by-step.
              </p>
            </div>
          </div>

          {/* --- SLIDER AREA --- */}
          <div className="relative w-full flex items-center">
            
            <button className="hidden md:flex absolute left-[-22px] top-[40%] -translate-y-1/2 w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] text-[#0F0F0F] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-colors duration-200 hover:text-[#14B8A6] hover:border-[#14B8A6]" onClick={slideLeft}>
              <FaArrowLeft />
            </button>

            {/* Slider Track */}
            <div 
              className={`flex gap-[30px] overflow-x-auto py-[10px] pb-[30px] custom-blog-scroll ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
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
                  className="w-[320px] shrink-0 group flex flex-col bg-[#ffffff] rounded-[20px] p-[20px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)] select-none"
                >
                  {/* Thumbnail & Play Button Overlay */}
                  <div 
                    className="relative rounded-[15px] overflow-hidden h-[180px] mb-[20px] cursor-pointer"
                    onClick={() => {
                      if(!isDragging) setActiveVideo(video); // Prevent opening if user is just dragging the slider
                    }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Dark Overlay for Video Vibe */}
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40 flex justify-center items-center z-[1]">
                      {/* Play Button */}
                      <div className="w-[45px] h-[45px] bg-white/95 rounded-full flex justify-center items-center text-[#15a083] text-[16px] pl-[4px] shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110">
                        <FaPlay />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-[15px] left-[15px] bg-[#15a083] text-[#ffffff] py-[4px] px-[12px] rounded-[6px] text-[10px] font-[800] tracking-[1px] uppercase z-[2]">
                      {video.category}
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-[10px] right-[10px] bg-black/70 backdrop-blur-sm text-[#ffffff] py-[4px] px-[8px] rounded-[6px] text-[10px] font-[600] flex items-center gap-[5px] z-[2]">
                      <FaClock className="text-[#de7223]" /> {video.duration}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 
                      className="text-[16px] font-[800] text-[#273b47] leading-[1.4] m-0 mb-[15px] transition-colors duration-300 group-hover:text-[#15a083] line-clamp-2 cursor-pointer"
                      onClick={() => { if(!isDragging) setActiveVideo(video); }}
                    >
                      {video.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between mt-auto pt-[15px] border-t-[1px] border-[#eef2f6]">
                      <span className="text-[11px] font-[600] text-[#7a8a9e] uppercase">
                        {video.date}
                      </span>
                      <span 
                        className="text-[11px] font-[700] text-[#de7223] uppercase flex items-center gap-[5px] cursor-pointer"
                        onClick={() => { if(!isDragging) setActiveVideo(video); }}
                      >
                        Watch Now <FaPlay className="text-[9px]" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="hidden md:flex absolute right-[-22px] top-[40%] -translate-y-1/2 w-[45px] h-[45px] bg-[#ffffff] border-[1px] border-[#E5E7EB] rounded-full justify-center items-center text-[16px] text-[#0F0F0F] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-colors duration-200 hover:text-[#14B8A6] hover:border-[#14B8A6]" onClick={slideRight}>
              <FaArrowRight />
            </button>
          </div>

        </div>
      </section>

      {/* --- PROFESSIONAL VIDEO POPUP MODAL --- */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-[#273b47]/80 backdrop-blur-md z-[1000] flex justify-center items-center p-[20px]"
          onClick={() => setActiveVideo(null)}
        >
          {/* Constrained max width so it sits perfectly in the middle */}
          <div
            className="w-full max-w-[800px] rounded-[16px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative bg-black"
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Sleek Floating Close Button */}
            <button
              className="absolute top-[15px] right-[15px] bg-black/50 hover:bg-black/80 text-white w-[35px] h-[35px] rounded-full flex justify-center items-center border-none cursor-pointer transition-colors z-[10]"
              onClick={() => setActiveVideo(null)}
            >
              <FaTimes className="text-[16px]" />
            </button>

            {/* Seamless Video Player Container */}
            {/* Aspect ratio 16:9 for perfect video sizing */}
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="absolute top-0 left-0 w-full h-full border-none rounded-[16px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ServiceBlog;