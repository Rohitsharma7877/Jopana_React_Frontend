import React, { useState, useRef, useEffect } from "react";
import "./MedicalService.css";
import { FaTimes, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const MedicalService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- MOCK DATA ---
  const mainServicesData = [
    { id: 1, title: "Doctors Consultation", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80", rating: "4.97", reviews: "9.2k", price: 449, oldPrice: 500 },
    { id: 2, title: "Physiotherapy", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80", rating: "4.73", reviews: "5.3k", price: 600, oldPrice: "" },
    { id: 3, title: "Chronic Care", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80", rating: "4.37", reviews: "22k", price: 750, oldPrice: "" },
    { id: 4, title: "Diabetes Management", img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=400&q=80", rating: "4.97", reviews: "9.2k", price: 349, oldPrice: 600 },
    { id: 5, title: "General Health Checkup", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=400&q=80", rating: "4.27", reviews: "26k", price: 249, oldPrice: 500 },
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

  const ServiceCard = ({ service }) => (
    <div className="med-svc-card">
      <img src={service.img} alt={service.title} className="med-svc-img" loading="lazy" draggable="false" />
      <div className="med-svc-content">
        {/* Title starts exactly from the left */}
        <h3 className="med-svc-title">{service.title}</h3>
        
        <div className="med-svc-rating-row">
          <FaStar className="med-svc-star" />
          <span className="med-svc-score">{service.rating}</span>
          <span className="med-svc-reviews">({service.reviews})</span>
        </div>
        
        <div className="med-svc-price-row">
          <span className="med-svc-price">₹{service.price}</span>
          {service.oldPrice && (
            <span className="med-svc-old-price">₹{service.oldPrice}</span>
          )}
        </div>

        <button className="med-svc-book-btn">
          Book again
        </button>
      </div>
    </div>
  );

  return (
    <section className="med-section">
      <div className="med-container">
        
        {/* Header strictly aligned to the start */}
        <div className="med-header">
          <div className="med-header-left">
            <h2 className="med-heading">Medical Services</h2>
            <p className="med-subtitle">Expert doctors and specialists at your doorstep</p>
          </div>

          <div className="med-header-right">
            <button className="med-view-all-btn" onClick={() => setIsModalOpen(true)}>
              View all
            </button>
          </div>
        </div>

        <div className="med-slider-wrapper">
          <button className="med-slider-arrow left-arrow" onClick={slideLeft} aria-label="Scroll left">
            <FaArrowLeft />
          </button>

          <div 
            className={`med-slider-track ${isDragging ? 'active' : ''}`} 
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
          
          <button className="med-slider-arrow right-arrow" onClick={slideRight} aria-label="Scroll right">
            <FaArrowRight />
          </button>
        </div>

      </div>

      {isModalOpen && (
        <div className="med-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="med-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="med-modal-header">
              <h2 className="med-heading">All Services</h2>
              <button className="med-modal-close" onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="med-modal-scroll-area">
              <div className="med-modal-grid">
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

export default MedicalService;