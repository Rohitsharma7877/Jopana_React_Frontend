import React, { useRef, useState, useEffect } from 'react';
import './Service1.css';
import { FiArrowLeft, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- Mock Data ---
const services = [
  { id: 's1', title: 'Doctors\nConsultation', imgUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80' },
  { id: 's2', title: 'Nursing Care', imgUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80' },
  { id: 's3', title: 'Physiotherapy', imgUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=300&q=80' },
  { id: 's4', title: 'Caretaker Services', imgUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=300&q=80' },
  { id: 's5', title: 'Elderly Care', imgUrl: 'https://images.unsplash.com/photo-1516826435551-36a8aa4be1e5?auto=format&fit=crop&w=300&q=80' },
  { id: 's6', title: 'Baby and Mother\nCare', imgUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=300&q=80' },
  { id: 's7', title: 'Post Operative Care', imgUrl: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=300&q=80' },
  { id: 's8', title: 'Chronic Care', imgUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' },
];

// Duplicate 3 times so there is a past, present, and future set of cards
const infiniteServices = [...services, ...services, ...services];

const Service1 = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- PERFECT SEAMLESS LOOP MATH ---
  const handleScroll = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    // The exact pixel width of one complete set of 8 cards
    const setWidth = slider.scrollWidth / 3;

    // If we scroll into the 3rd set, INSTANTLY jump back to the exact same spot in the 2nd set
    if (slider.scrollLeft >= setWidth * 2) {
      slider.scrollLeft -= setWidth;
    } 
    // If we scroll backwards into the 1st set, INSTANTLY jump forward to the 2nd set
    else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += setWidth;
    }
  };

  // --- SET INITIAL POSITION (No Auto-Play) ---
  useEffect(() => {
    if (scrollRef.current) {
      // Start perfectly in the middle set so you can scroll left or right immediately
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  // --- MOUSE DRAG LOGIC ---
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
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // --- ARROW CLICK LOGIC ---
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
    <div className="srv-wrapper">
      
      {/* Top Header */}
      <section className="srv-header-section">
        <div className="srv-container srv-header-flex">
          <div className="srv-title-col">
            <div className="srv-title-row">
              <button className="srv-back-btn" aria-label="Go back">
                <FiArrowLeft />
              </button>
              <h1 className="srv-heading">Our Services</h1>
            </div>
            <p className="srv-subtitle">Find the right care for you and your loved ones</p>
          </div>
          <div className="srv-search-box">
            <FiSearch className="srv-search-icon" />
            <input type="text" placeholder="Search for 'Doctors'" className="srv-search-input" />
          </div>
        </div>
      </section>

      {/* Bottom Slider Section */}
      <section className="srv-slider-section">
        <div className="srv-container srv-relative-container">
          
          <button className="srv-nav-btn srv-nav-left" onClick={() => scroll("left")} aria-label="Scroll left">
            <FiChevronLeft />
          </button>

          {/* Slider Track */}
          <div 
            className={`srv-slider-track ${isDragging ? 'is-dragging' : ''}`}
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={move}
          >
            {infiniteServices.map((service, index) => (
              <div key={`${service.id}-${index}`} className="srv-card">
                <div className="srv-card-img-wrapper">
                  <img 
                    src={service.imgUrl} 
                    alt={service.title.replace('\n', ' ')} 
                    className="srv-card-img" 
                    draggable="false" 
                  />
                </div>
                <h3 className="srv-card-title">{service.title}</h3>
              </div>
            ))}
          </div>

          <button className="srv-nav-btn srv-nav-right" onClick={() => scroll("right")} aria-label="Scroll right">
            <FiChevronRight />
          </button>

        </div>
      </section>

    </div>
  );
};

export default Service1;