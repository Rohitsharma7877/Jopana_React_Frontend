import React, { useState, useEffect } from "react";
import "./Section7.css";
import { FaHeart, FaStar } from "react-icons/fa";

// Placeholder images for the patients
import patient1 from "./dt1.jpeg";
import patient2 from "./dt2.jpeg";
import patient3 from "./dt3.jpg";
import patient4 from "./dt5.png";

const Section7 = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Jimmy Roberts",
      role: "Patient Of Surgery",
      image: patient1,
      review:
        "Fugiat at voluptatem quo occaecati hic nulla corporis curabitur facili quisque exercitation, labore vol Repreh enderit.",
      rating: 5,
    },
    {
      id: 2,
      name: "Teresa Mires",
      role: "Dental Patient",
      image: patient2,
      review:
        "Itaque illo eiusmod pede ornare. Sequi rem iaculis posuere pede viera. Fugiat at voluptatem quo occaecati hic nulla.",
      rating: 5,
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Orthopedic Patient",
      image: patient3,
      review:
        "Outstanding service and very professional staff. Fugiat at voluptatem quo occaecati hic nulla corporis curabitur.",
      rating: 5,
    },
    {
      id: 4,
      name: "Esther Howard",
      role: "Neurology Patient",
      image: patient4,
      review:
        "The doctors were so caring and attentive. Parturient, id lorem unde inure. Fugiat at voluptatem quo occaecati hic.",
      rating: 4,
    },
  ];

  // --- SLIDER CONTROLS (Change these numbers!) ---
  const cardsToShow = 2;
  const slideSpeed = 5000;
  const pauseTime = slideSpeed + 100;

  // --- INFINITE LOOP LOGIC ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // We clone the first few cards and put them at the end to make the loop seamless
  const extendedReviews = [
    ...reviewsData,
    ...reviewsData.slice(0, cardsToShow),
  ];
  const totalRealItems = reviewsData.length;

  // 1. The Auto-Play Interval
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, pauseTime);

    return () => clearTimeout(timeout);
  }, [currentIndex, pauseTime]);

  // 2. The Silent Reset Trick
  useEffect(() => {
    // If we have reached the cloned cards at the end...
    if (currentIndex === totalRealItems) {
      // Wait for the sliding animation to finish, then secretly snap back to the start!
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Turn animation OFF
        setCurrentIndex(0); // Snap back to the real first card
      }, slideSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalRealItems, slideSpeed]);

  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <FaStar key={i} className="sec7-star-icon" />
    ));
  };

  return (
    <section className="sec7-section">
      <div className="sec7-container">
        <div className="sec7-header-area">
          <div className="sec7-badge">
            <FaHeart className="sec7-badge-icon" /> TESTIMONIALS
          </div>
          <h2 className="sec7-heavy-heading">
            <span className="sec7-text-dark">Our Happy Patient's</span> <br />
            <span className="sec7-text-teal">Genuine Reviews</span>
          </h2>
        </div>

        <div className="sec7-slider-container">
          <div
            className="sec7-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              // React now controls your animation speed!
              transition: isTransitioning
                ? `transform ${slideSpeed}ms cubic-bezier(0.25, 0.8, 0.25, 1)`
                : "none",
            }}
          >
            {/* We map over the EXTENDED array now */}
            {extendedReviews.map((review, index) => (
              <div className="sec7-slide" key={`${review.id}-${index}`}>
                <div className="sec7-review-card">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="sec7-patient-img"
                  />
                  <p className="sec7-review-text">"{review.review}"</p>

                  <div className="sec7-card-footer">
                    <div className="sec7-patient-info">
                      <h4 className="sec7-patient-name">{review.name}</h4>
                      <span className="sec7-patient-role">{review.role}</span>
                    </div>
                    <div className="sec7-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sec7-bottom-action">
          <button className="sec7-btn-primary">VIEW ALL REVIEWS</button>
        </div>
      </div>
    </section>
  );
};

export default Section7;
