import React from "react";
import { FaStar, FaUsers, FaRobot } from "react-icons/fa";
import AIBanner from '../AIBoat/AIBanner';

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import doctorImg from "../assets/Jimg1.jpeg";
import nurseImg from "../assets/Jimg2.jpeg";
import physioImg from "../assets/Jimg3.jpeg";
import caretakerImg from "../assets/Jimg4.jpeg";
import elderlyImg from "../assets/Jimg5.jpeg";
import babyImg from "../assets/Jimg6.jpeg";

import postOpImg from "../assets/Jimg7.jpeg";
import chronicImg from "../assets/Jimg8.jpeg";

import masonry1 from "../assets/Jimg25.jpeg";
import masonry2 from "../assets/Jimg4.jpeg";
import masonry3 from "../assets/Jimg26.jpeg";
import masonry4 from "../assets/Jimg8.jpeg";


const SERVICES_DATA = [
  {
    id: "srv-1",
    name: "Doctors Consultation",
    img: doctorImg, // Using the imported variable (no quotes!)
  },
  {
    id: "srv-2",
    name: "Nursing Care",
    img: nurseImg,
  },
  {
    id: "srv-3",
    name: "Physiotherapy",
    img: physioImg,
  },
  {
    id: "srv-4",
    name: "Caretaker Services",
    img: caretakerImg,
  },
  {
    id: "srv-5",
    name: "Elderly Care",
    img: elderlyImg,
  },
  {
    id: "srv-6",
    name: "Baby and Mother Care",
    img: babyImg,
  },
];

const SPECIAL_CARE_DATA = [
  {
    id: "spc-1",
    line1: "Post - op",
    line2: "Care",
    img: postOpImg,
  },
  {
    id: "spc-2",
    line1: "Chronic",
    line2: "care",
    img: chronicImg,
  },
];

const MASONRY_IMAGES = {
  left: [
    {
      id: "img-1",
      alt: "Caretaker",
      src: masonry1,
      isTall: false,
    },
    {
      id: "img-2",
      alt: "Doctor visit",
      src: masonry2,
      isTall: false,
    },
  ],
  right: [
    {
      id: "img-3",
      alt: "Elderly Care",
      src: masonry3,
      isTall: true,
    },
    {
      id: "img-4",
      alt: "Checkup",
      src: masonry4,
      isTall: false,
    },
  ],
};

const ServiceCard = ({ name, img }) => (
  <div className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-[3px]">
    <div className="w-full h-[65px] rounded-[12px] overflow-hidden mb-[8px] border-[1px] border-transparent transition-all duration-300 ease-in-out group-hover:border-[#15a083] group-hover:shadow-[0_4px_10px_rgba(21,160,131,0.2)]">
      <img src={img} alt={`${name} service`} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <p className="text-[11px] font-[700] text-[#6b7c8f] m-0 leading-[1.3]">{name}</p>
  </div>
);

const CarePill = ({ line1, line2, img }) => (
  <div className="flex-1 flex items-center justify-between bg-[rgba(21,160,131,0.05)] rounded-[30px] h-[60px] overflow-hidden cursor-pointer transition-colors duration-200 hover:bg-[rgba(21,160,131,0.1)]">
    <span className="text-[12px] font-[800] text-[#de7223] pl-[15px] leading-[1.2] w-[40%]">
      {line1}
      <br />
      {line2}
    </span>
    <img
      src={img}
      alt={`${line1} ${line2}`}
      className="h-full w-[60%] object-cover rounded-[30px]"
      loading="lazy"
    />
  </div>
);

const StatItem = ({ Icon, iconClass, value, label }) => (
  <div className="flex items-start gap-[12px]">
    <Icon className={`text-[24px] mt-[4px] ${iconClass}`} />
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[2px]">{value}</h3>
      <p className="text-[12px] font-[600] text-[#6b7c8f] m-0">{label}</p>
    </div>
  </div>
);

const Product2 = () => {
  // Triggers the custom event that AIBoat.jsx is listening for!
  const triggerAIBot = () => {
    window.dispatchEvent(new Event("openAIBot"));
  };

  return (
    <>
      <style>{`
        /* --- BRAND IMPORT: POPPINS --- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
      `}</style>
      
      {/* Main Container - Added Poppins Font Here */}
      <section className="flex flex-col py-[60px] px-[5%] lg:px-[10%] bg-[#f4f8fb] gap-[60px] font-['Poppins',sans-serif]">
        
        {/* --- TOP ROW: Left content & Right Masonry --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[50px] w-full">
          
          {/* Left Column */}
          <div className="flex-1 w-full max-w-full lg:max-w-[550px]">
            <h1 className="text-[32px] lg:text-[38px] font-[900] text-[#273b47] leading-[1.2] mb-[15px]">
              Home services at{" "}
              <span className="text-[#15a083]">
                your
                <br />
                doorstep
              </span>
            </h1>

            <p className="text-[10px] lg:text-[12px] text-[#6b7c8f] leading-[1.6] mb-[35px] max-w-[95%]">
              Experience fast, reliable, and patient-centric medical care from the comfort of your home. Our certified professionals are just a click away.
            </p>

            <div className="bg-[#ffffff] rounded-[20px] p-[25px] lg:p-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border-[1px] border-[rgba(107,124,143,0.1)] mb-[35px]">
              <h2 className="text-[18px] font-[800] text-[#273b47] m-0 mb-[20px]">What are you looking for?</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-[15px] mb-[25px]">
                {SERVICES_DATA.map((service) => (
                  <ServiceCard
                    key={service.id}
                    name={service.name}
                    img={service.img}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-[15px]">
                {SPECIAL_CARE_DATA.map((care) => (
                  <CarePill
                    key={care.id}
                    line1={care.line1}
                    line2={care.line2}
                    img={care.img}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-[30px] lg:gap-[50px] pl-[10px]">
              <StatItem
                Icon={FaStar}
                iconClass="text-[#de7223]"
                value="4.8"
                label="Service Rating"
              />
              <StatItem
                Icon={FaUsers}
                iconClass="text-[#6b7c8f]"
                value="22 M +"
                label="Customers Globally"
              />
            </div>
          </div>

          {/* Right Column (Masonry Grid) */}
          <div className="flex-[1.2] flex justify-center lg:justify-end w-full">
            <div className="flex gap-[15px] w-full max-w-[600px]">
              <div className="flex flex-col gap-[15px] flex-1">
                {MASONRY_IMAGES.left.map((img) => (
                  <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full rounded-[20px] object-cover shadow-[0_10px_30px_rgba(39,59,71,0.1)] ${img.isTall ? "h-[280px]" : "h-[200px]"}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-[15px] flex-1">
                {MASONRY_IMAGES.right.map((img) => (
                  <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full rounded-[20px] object-cover shadow-[0_10px_30px_rgba(39,59,71,0.1)] ${img.isTall ? "h-[280px]" : "h-[200px]"}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM ROW: Wide AI Banner --- */}
        <AIBanner compact={true} />
        
      </section>
    </>
  );
};

export default Product2;