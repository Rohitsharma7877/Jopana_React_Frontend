import React, { useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import img1 from '../assets/Jimg13.jpeg';
import img2 from '../assets/Jimg14.jpeg';
import img3 from '../assets/Jimg15.jpeg';
import img4 from '../assets/Jimg16.jpeg';
import img5 from '../assets/Jimg25.jpeg';

const DoctorConsultation = () => {
  const navigate = useNavigate();
  const { consultationType } = useParams(); 
  
  const sliderRef = useRef(null);

  // --- MOCK DATA ---
  const offers = [
    { id: 1, title: 'Get ₹50 coupon', desc: 'On the first service delivery' },
    { id: 2, title: 'Flat ₹200 cashback', desc: 'Via Paytm UPI payment' },
    { id: 3, title: 'Get 20% discount', desc: 'Via Mobikwik UPI payment' },
    { id: 4, title: 'Extra ₹100 Off', desc: 'On complete health checkups' },
  ];

  // --- INFINITE LOOP SETUP ---
  // We duplicate the list 3 times to create a seamless infinite track
  const infiniteOffers = [
    ...offers.map(o => ({ ...o, uniqueId: `set1-${o.id}` })),
    ...offers.map(o => ({ ...o, uniqueId: `set2-${o.id}` })),
    ...offers.map(o => ({ ...o, uniqueId: `set3-${o.id}` }))
  ];

  // Silently start the user in the middle set (Set 2) so they can scroll endlessly
  useEffect(() => {
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  // --- SLIDER LOGIC ---
  const slideRight = () => {
    if (sliderRef.current) {
      // 220px (Card width) + 15px (Gap) = exactly 235px to move one full coupon
      sliderRef.current.scrollBy({ left: 235, behavior: 'smooth' });
    }
  };

  // The magic function: Silently resets the scroll position to create the infinite illusion
  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const singleSetWidth = slider.scrollWidth / 3;

    // If we scroll past the 2nd set, instantly jump back to the 1st set (invisible to user)
    if (slider.scrollLeft >= (singleSetWidth * 2) - slider.clientWidth) {
      slider.scrollLeft = slider.scrollLeft - singleSetWidth;
    } 
    // If they swipe left past the 1st set, jump to the 2nd set
    else if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollLeft + singleSetWidth;
    }
  };

  const categories = [
    { id: 1, title: 'Monthly pregnant\ncheckup', img: img1 },
    { id: 2, title: 'Pediatrician', img: img2 },
    { id: 3, title: 'Orthopedist', img: img3 },
    { id: 4, title: 'ENT Specialist', img: img4 },
    { id: 5, title: 'Dermatologist', img: img5 },
  ];

  return (
    <div className="w-full ">
      
      {/* Hide scrollbar styling */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- TOP HEADER & OFFERS SECTION --- */}
      <section className="pt-[30px] md:pt-[40px] pb-[20px] md:pb-[30px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px] flex flex-col md:flex-row justify-between items-start md:items-center gap-[25px] md:gap-[30px]">
          
          {/* Left: Title & Rating */}
          <div className="flex flex-col shrink-0">
            <div className="flex items-center gap-[15px] mb-[8px]">
              <button 
                onClick={() => navigate(-1)} 
                className="w-[35px] h-[35px] bg-[#ffffff] rounded-full border-none text-[#273b47] text-[18px] cursor-pointer flex justify-center items-center transition-all hover:bg-[#15a083] hover:text-[#ffffff] shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
              >
                <FiArrowLeft />
              </button>
              <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-[900] text-[#273b47] m-0 capitalize leading-[1.2]">
                Doctor's Consultation <span className="text-[#15a083] text-[16px] md:text-[20px]">({consultationType})</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-[6px] ml-[50px]">
              <FaStar className="text-[#de7223] text-[14px]" />
              <span className="text-[13px] font-[700] text-[#273b47] underline cursor-pointer hover:text-[#15a083] transition-colors">
                4.85
              </span>
              <span className="text-[13px] font-[500] text-[#7a8a9e]">
                (1.0M bookings)
              </span>
            </div>
          </div>

          {/* Right: Scrollable Offers */}
          <div className="flex items-center gap-[15px] w-full md:w-auto overflow-hidden relative">
            
            {/* Added onScroll event and smooth snap classes */}
            <div 
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-[15px] overflow-x-auto hide-scrollbar pb-[10px] w-full md:max-w-[500px] lg:max-w-[600px] snap-x snap-mandatory"
            >
              {infiniteOffers.map((offer) => (
                <div 
                  key={offer.uniqueId} 
                  className="snap-start bg-[#f4f8fb] rounded-[12px] p-[12px] flex items-center gap-[12px] min-w-[220px] shrink-0 shadow-[0_4px_15px_rgba(39,59,71,0.04)] transition-transform hover:-translate-y-[2px]"
                >
                  <div className="bg-[#15a083] text-[#ffffff] w-[32px] h-[32px] rounded-full flex justify-center items-center text-[14px] shrink-0 shadow-[0_4px_10px_rgba(21,160,131,0.3)]">
                    <MdLocalOffer />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="m-0 text-[13px] font-[800] text-[#273b47]">{offer.title}</h4>
                    <p className="m-0 text-[11px] font-[500] text-[#7a8a9e]">{offer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clickable Arrow Button with Fade */}
            <div className="hidden md:flex absolute right-0 top-0 bottom-[10px] w-[80px] bg-gradient-to-l from-[#f4f8fb] via-[#f4f8fb]/80 to-transparent pointer-events-none justify-end items-center pr-[5px]">
              <button 
                onClick={slideRight}
                className="pointer-events-auto w-[35px] h-[35px] bg-[#ffffff] rounded-full flex justify-center items-center text-[#273b47] border-none cursor-pointer shadow-[0_4px_12px_rgba(39,59,71,0.08)] transition-all hover:text-[#15a083] hover:scale-110 active:scale-95"
              >
                <FiArrowRight className="text-[16px]" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* --- BOTTOM SEARCH & GRID SECTION --- */}
      <section className="py-[20px] md:py-[40px]">
        <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px]">
          
          <div className="bg-[#ffffff] rounded-[16px] p-[15px] px-[20px] flex items-center gap-[12px] mb-[30px] md:mb-[50px] border border-[#15a083] shadow-[0_10px_30px_rgba(29,59,71,0.1)] transition-shadow duration-300 focus-within:shadow-[0_15px_40px_rgba(21,160,131,0.1)]">
            <FiSearch className="text-[#15a083] text-[20px]" />
            <input 
              type="text" 
              placeholder="Search for 'Doctors', 'Specialists', or 'Symptoms'..." 
              className="w-full border-none outline-none text-[15px] font-[500] bg-transparent text-[#273b47] placeholder:text-[#a3b1bf]" 
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[15px] sm:gap-[20px] md:gap-[30px]">
            {categories.map((cat) => (
              <div key={cat.id} className="group flex flex-col items-center text-center cursor-pointer">
                
                <div className="w-full aspect-square bg-[#ffffff] rounded-[20px] overflow-hidden mb-[15px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)] group-hover:-translate-y-[5px]">
                  <img 
                    src={cat.img} 
                    alt={cat.title.replace('\n', ' ')} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-[13px] md:text-[15px] font-[800] text-[#273b47] m-0 leading-[1.4] whitespace-pre-line transition-colors duration-300 group-hover:text-[#15a083]">
                  {cat.title}
                </h3>
                
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default DoctorConsultation;