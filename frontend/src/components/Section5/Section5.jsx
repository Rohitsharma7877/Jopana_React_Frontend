import React from 'react';
import { FaHeart } from 'react-icons/fa';

// Placeholder images - Ensure paths match your project
import process1 from '../assets/Jimg6.jpeg'; 
import process2 from '../assets/Jimg7.jpeg';
import process3 from '../assets/Jimg8.jpeg';
import process4 from '../assets/Jimg11.jpeg';

const Section5 = () => {
  const processData = [
    {
      id: '01',
      title: 'Place Request',
      desc: 'Patient or family securely requests medical care or supplies via the JOPANA platform.',
      image: process1
    },
    {
      id: '02',
      title: 'Get Assigned',
      desc: 'Our system instantly assigns the nearest verified professional or supply partner to your case.',
      image: process2
    },
    {
      id: '03',
      title: 'Dispatch',
      desc: 'The required medicine, medical equipment, or certified caregiver is dispatched immediately.',
      image: process3
    },
    {
      id: '04',
      title: 'Deliver',
      desc: 'Professional service and essential care arrive at the patient\'s doorstep in minimal time.',
      image: process4
    }
  ];

  return (
    <section className="bg-[#f4f8fb] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-[40px]">
          <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[6px] px-[16px] rounded-[20px] text-[11px] font-[800] uppercase tracking-[1.5px] mb-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <FaHeart className="text-[13px]" /> HOW IT WORKS
          </div>
          <h2 className="text-[32px] md:text-[36px] font-[900] leading-[1.2] m-0">
            <span className="text-[#273b47]">Simple Process We</span> <br />
            <span className="text-[#15a083]">Follow For Medical Care</span>
          </h2>
        </div>

        {/* Process Steps Area */}
        <div className="relative mt-[20px] lg:mt-0">
          
          {/* The dotted connecting line (Hidden on mobile/tablet, visible on desktop) */}
          <div className="hidden lg:block absolute top-[75px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-[#cbd6e2] z-[1]"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start relative z-[2] gap-[40px] lg:gap-[20px]">
            {processData.map((step, index) => (
              
              // Added "group" class here to trigger the hover effect on the child elements
              <div className="group flex-1 flex flex-col items-center text-center" key={index}>
                
                {/* Image and Number Badge */}
                <div className="relative inline-block w-[140px] h-[155px] mb-[20px] z-[1] transition-transform duration-300 group-hover:scale-105">
                  
                  {/* Layer 1: Thick Outer Border (#cbd6e2) */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[#cbd6e2] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] scale-110 -z-[2]"></div>
                  
                  {/* Layer 2: The Background Gap (#f4f8fb) */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[#f4f8fb] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] scale-105 -z-[1]"></div>
                  
                  {/* Layer 3: The Actual Image */}
                  <img src={step.image} alt={step.title} className="relative block w-full h-full object-cover [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] z-[1]" />
                  
                  {/* The Number Badge */}
                  <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 w-[32px] h-[32px] bg-[#15a083] text-[#ffffff] rounded-full flex justify-center items-center text-[12px] font-[800] z-[3] border-[4px] border-[#f4f8fb]">
                    {step.id}
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="text-[16px] font-[800] text-[#273b47] m-0 mb-[8px] max-w-[180px] leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[12px] text-[#7a8a9e] leading-[1.6] m-0 max-w-[200px] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                  {step.desc}
                </p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section5;