import React, { useState, useEffect, useRef } from 'react';
import { FaUserMd, FaSmile, FaMapMarkerAlt, FaHome } from 'react-icons/fa';

// Assumes local image imports as established
import avatar1 from '../assets/Jimg2.jpeg'; 
import avatar2 from '../assets/Jimg5.jpeg';
import avatar3 from '../assets/Jimg9.jpeg';
import avatar4 from '../assets/Jimg4.jpeg';

// --- CUSTOM HOOK FOR SMOOTH COUNTING ---
const useCountUp = (endValue, isVisible) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const duration = 2000; // Animation lasts 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * endValue), endValue);
      
      setCount(current);
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endValue, isVisible]);

  return count;
};

// --- STAT ITEM COMPONENT ---
const StatItem = ({ stat, isVisible }) => {
  const count = useCountUp(stat.endValue, isVisible);

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex items-center gap-[8px] opacity-90">
        <span className="text-[#ffffff] text-[14px]">{stat.icon}</span>
        <span className="text-[#ffffff] text-[12px] font-[700] uppercase tracking-[1px]">{stat.label}</span>
      </div>
      <div className="text-[#15a083] text-[42px] font-[900] leading-none">
        {count}{stat.suffix}
      </div>
    </div>
  );
};

// --- MAIN SECTION 3 COMPONENT ---
const Section3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentElement = sectionRef.current; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentElement) {
            observer.unobserve(currentElement); 
          }
        }
      },
      { threshold: 0.3 } 
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.disconnect();
    };
  }, []);

  const statsData = [
    {
      icon: <FaUserMd />,
      label: 'Verified Experts',
      endValue: 255,
      suffix: '+',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Active Areas',
      endValue: 17,
      suffix: '+',
    },
    {
      icon: <FaHome />,
      label: 'Home Visits',
      endValue: 410,
      suffix: '+',
    },
    {
      icon: <FaSmile />,
      label: 'Happy Patients',
      endValue: 33,
      suffix: 'k+',
    },
  ];

  return (
    <>
      <style>{`
        /* --- BRAND IMPORT: POPPINS --- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* Main Container - Poppins Font Applied Here */}
      <section className="bg-[#f4f8fb] pt-[20px] pb-[60px] font-['Poppins',sans-serif]" ref={sectionRef}>
        <div className="max-w-[1200px] mx-auto px-[20px]">
          
          {/* The Main Brand-Colored Box */}
          <div className="bg-[#273b47] rounded-[20px] py-[30px] px-[20px] md:px-[40px] text-[#ffffff] shadow-[0_15px_30px_rgba(39,59,71,0.15)]">
            
            {/* --- TOP ROW --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px] pb-[20px] border-b-[1px] border-[rgba(255,255,255,0.1)] mb-[20px]">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[15px]">
                {/* Overlapping Avatars */}
                <div className="flex items-center">
                  <img src={avatar1} alt="Doctor 1" className="w-[40px] h-[40px] rounded-full object-cover border-[2px] border-[#273b47] ml-0" />
                  <img src={avatar2} alt="Doctor 2" className="w-[40px] h-[40px] rounded-full object-cover border-[2px] border-[#273b47] -ml-[12px]" />
                  <img src={avatar3} alt="Doctor 3" className="w-[40px] h-[40px] rounded-full object-cover border-[2px] border-[#273b47] -ml-[12px]" />
                  <img src={avatar4} alt="Doctor 4" className="w-[40px] h-[40px] rounded-full object-cover border-[2px] border-[#273b47] -ml-[12px]" />
                </div>
                
                <div className="text-[13px] font-[700] leading-[1.4] tracking-[0.5px]">
                  <span className="text-[#de7223] font-[900] text-[15px]">200+</span> VERIFIED ON-DEMAND <br /> 
                  CARE PROFESSIONALS
                </div>
              </div>

              {/* Placeholder Logos */}
              <div className="flex flex-wrap gap-[15px] md:gap-[25px] items-center opacity-90 mt-[10px] md:mt-0">
                <div className="flex items-center gap-[8px] text-[11px] font-[800] uppercase tracking-[1px]">
                  <span className="w-[20px] h-[20px] rounded-full bg-[#15a083]"></span> Trusted Network
                </div>
                <div className="flex items-center gap-[8px] text-[11px] font-[800] uppercase tracking-[1px]">
                  <span className="w-[20px] h-[20px] rounded-full bg-[#15a083]"></span> 24/7 Response
                </div>
              </div>
            </div>

            {/* --- BOTTOM ROW (STATISTICS) --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
              {statsData.map((stat, index) => (
                <StatItem key={index} stat={stat} isVisible={isVisible} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;