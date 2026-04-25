import React, { useState, useRef, useEffect } from "react";
import "./Nursing.css";
import { FaTimes, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Nursing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  // --- DRAG TO SCROLL STATES ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- MOCK DATA (Matched exactly to your screenshot) ---
  const mainServicesData = [
    { id: 1, title: "Nursing Care", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80", rating: "4.97", reviews: "9.2k", price: 449, oldPrice: 500 },
    { id: 2, title: "Post Operative Care", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=400&q=80", rating: "4.73", reviews: "5.3k", price: 600, oldPrice: "" },
    { id: 3, title: "Wound and Injection Care", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80", rating: "4.37", reviews: "22k", price: 750, oldPrice: "" },
    { id: 4, title: "Home Doctor Visit", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80", rating: "4.97", reviews: "9.2k", price: 349, oldPrice: 600 },
    { id: 5, title: "Online Nurse Consultation", img: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=400&q=80", rating: "4.27", reviews: "26k", price: 249, oldPrice: 500 },
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

  // Reusable Component for the Card
  const ServiceCard = ({ service }) => (
    <div className="nur-svc-card">
      <img src={service.img} alt={service.title} className="nur-svc-img" loading="lazy" draggable="false" />
      <div className="nur-svc-content">
        <h3 className="nur-svc-title">{service.title}</h3>
        
        <div className="nur-svc-rating-row">
          <FaStar className="nur-svc-star" />
          <span className="nur-svc-score">{service.rating}</span>
          <span className="nur-svc-reviews">({service.reviews})</span>
        </div>
        
        <div className="nur-svc-price-row">
          <span className="nur-svc-price">₹{service.price}</span>
          {service.oldPrice && (
            <span className="nur-svc-old-price">₹{service.oldPrice}</span>
          )}
        </div>

        <button className="nur-svc-book-btn">
          Book again
        </button>
      </div>
    </div>
  );

  return (
    <section className="nur-section">
      <div className="nur-container">
        
        {/* --- HEADER --- */}
        <div className="nur-header">
          <div className="nur-header-left">
            <h2 className="nur-heading">Nursing Care</h2>
            <p className="nur-subtitle">Professional care through every stage of recovery</p>
          </div>

          <div className="nur-header-right">
            <button className="nur-view-all-btn" onClick={() => setIsModalOpen(true)}>
              View all
            </button>
          </div>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="nur-slider-wrapper">
          
          <button className="nur-slider-arrow left-arrow" onClick={slideLeft} aria-label="Scroll left">
            <FaArrowLeft />
          </button>

          <div 
            className={`nur-slider-track ${isDragging ? 'active' : ''}`} 
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
          
          <button className="nur-slider-arrow right-arrow" onClick={slideRight} aria-label="Scroll right">
            <FaArrowRight />
          </button>
          
        </div>

      </div>

      {/* --- MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="nur-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="nur-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="nur-modal-header">
              <h2 className="nur-heading">All Nursing Services</h2>
              <button className="nur-modal-close" onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="nur-modal-scroll-area">
              <div className="nur-modal-grid">
                {mainServicesData.map((service) => (
                  <ServiceCard key={`modal-${service.id}`} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nursing;