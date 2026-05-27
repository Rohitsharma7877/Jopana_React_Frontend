import React, { useState, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

// Placeholder images for the patients
// Ensure these paths match your actual assets folder!
import patient1 from "../assets/Jimg6.jpeg";
import patient2 from "../assets/Jimg7.jpeg";
import patient3 from "../assets/Jimg8.jpeg";
import patient4 from "../assets/Jimg11.jpeg";

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

  // --- SLIDER CONTROLS ---
  const cardsToShow = 2; // Keep at 2 for Desktop, CSS flex will handle mobile!
  const slideSpeed = 5000;
  const pauseTime = slideSpeed + 100;

  // --- INFINITE LOOP LOGIC ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedReviews = [
    ...reviewsData,
    ...reviewsData.slice(0, cardsToShow),
  ];
  const totalRealItems = reviewsData.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, pauseTime);
    return () => clearTimeout(timeout);
  }, [currentIndex, pauseTime]);

  useEffect(() => {
    if (currentIndex === totalRealItems) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentIndex(0); 
      }, slideSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalRealItems, slideSpeed]);

  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <FaStar key={i} className="text-[#ffb800] text-[14px]" />
    ));
  };

  return (
    <section className="bg-[#f4f8fb] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-[50px]">
          <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[8px] px-[18px] rounded-[20px] text-[12px] font-[700] uppercase tracking-[1.5px] mb-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <FaHeart className="text-[#15a083]" /> TESTIMONIALS
          </div>
          <h2 className="text-[32px] md:text-[42px] font-[900] leading-[1.2] m-0">
            <span className="text-[#273b47]">Our Happy Patient's</span> <br />
            <span className="text-[#15a083]">Genuine Reviews</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden w-full pt-[10px] mb-[40px]">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              transition: isTransitioning
                ? `transform ${slideSpeed}ms cubic-bezier(0.25, 0.8, 0.25, 1)`
                : "none",
            }}
          >
            {extendedReviews.map((review, index) => (
              
              // Slide Wrapper - Handles responsive sizing (100% width on mobile, 50% on desktop)
              <div className="flex-[0_0_100%] md:flex-[0_0_50%] py-[15px] px-[10px] md:px-[20px] box-border" key={`${review.id}-${index}`}>
                
                {/* Speech Bubble Card */}
                <div className="bg-[#ffffff] rounded-[20px] pt-[50px] pr-[30px] pb-[40px] pl-[30px] md:pr-[40px] md:pl-[40px] relative shadow-[0_15px_40px_rgba(39,59,71,0.05)] mt-[30px]">
                  
                  {/* Custom CSS Triangle hack replacing ::after */}
                  <div 
                    className="absolute bottom-[-20px] left-[60px]" 
                    style={{
                      borderWidth: '20px 20px 0 0',
                      borderStyle: 'solid',
                      borderColor: '#ffffff transparent transparent transparent'
                    }}
                  ></div>

                  {/* Overlapping Avatar */}
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-[70px] h-[70px] rounded-full object-cover absolute top-[-35px] left-[50px] border-[5px] border-[#f4f8fb] bg-[#e0f2ef]"
                  />
                  
                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#7a8a9e] italic mb-[30px] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                    "{review.review}"
                  </p>

                  <div className="flex justify-between items-center border-t-[1px] border-[#f0f4f8] pt-[20px]">
                    <div className="flex flex-col gap-[4px]">
                      <h4 className="m-0 text-[15px] md:text-[16px] font-[800] text-[#273b47]">
                        {review.name}
                      </h4>
                      <span className="text-[12px] md:text-[13px] font-[600] text-[#15a083]">
                        {review.role}
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-[20px]">
          <button className="bg-[#15a083] text-[#ffffff] border-none py-[14px] px-[35px] rounded-[30px] text-[14px] font-[700] cursor-pointer transition-colors duration-300 uppercase hover:bg-[#11826a]">
            VIEW ALL REVIEWS
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section7;