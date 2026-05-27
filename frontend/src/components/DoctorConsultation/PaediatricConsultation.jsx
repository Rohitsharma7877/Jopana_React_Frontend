import React, { useState, useEffect } from 'react';
import { 
  FaStar, FaTimes, FaSpinner, FaStethoscope, FaHeartbeat, 
  FaFilePrescription, FaPhoneAlt, FaGraduationCap, FaShieldAlt, FaClock 
} from 'react-icons/fa';
import { FiXCircle, FiChevronDown, FiArrowLeft } from "react-icons/fi";

import infantCareImg from "../assets/Jimg13.jpeg"; 
import childWellnessImg from "../assets/Jimg14.jpeg";

const IconMap = {
  "stethoscope": <FaStethoscope />,
  "heartbeat": <FaHeartbeat />,
  "prescription": <FaFilePrescription />,
  "phone": <FaPhoneAlt />,
  "graduation-cap": <FaGraduationCap />,
  "star": <FaStar />,
  "shield-check": <FaShieldAlt />
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-[1px] border-[#eef2f6] last:border-0">
      <div className="flex justify-between items-center py-[16px] cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="text-[13px] md:text-[14px] font-[600] text-[#273b47] m-0 pr-[20px] transition-colors group-hover:text-[#15a083]">
          {question}
        </h4>
        <FiChevronDown className={`text-[#7a8a9e] text-[20px] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#15a083]' : ''}`} />
      </div>
      {isOpen && (
        <div className="pb-[16px] animate-fade-in"><p className="text-[13px] text-[#6b7c8f] m-0 leading-[1.6]">{answer}</p></div>
      )}
    </div>
  );
};

const fetchPaediatricServices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Infant Care Consultation",
          rating: "4.88",
          reviews: "57K reviews",
          price: 699,
          originalPrice: 899,
          discount: "22% off",
          duration: "25 minutes",
          img: infantCareImg,
          about: "Specialized care for infants focusing on growth, nutrition, and developmental milestones to ensure a healthy start.",
          features: ["Feeding & sleep pattern evaluation.", "Skin rash, colic & common infant concerns."],
          packages: [
            { id: "p1", name: "Growth Tracker", desc: "Monitor milestones", tags: ["5 visits"], originalPrice: 1500, price: 999, savings: "Save ₹500", isPopular: true }
          ],
          reviewSummary: { rating: "4.88", total: "57K reviews", bars: [{ stars: 5, pct: 95 }, { stars: 4, pct: 5 }, { stars: 3, pct: 0 }, { stars: 2, pct: 0 }, { stars: 1, pct: 0 }] },
          reviewsList: [
            { id: 1, initial: "P", name: "Priya S.", date: "May 2026", rating: 5, text: "Excellent care for my newborn. Doctor was very patient." },
            { id: 2, initial: "R", name: "Rohit M.", date: "Apr 2026", rating: 5, text: "The paediatrician was amazing with my baby." }
          ],
          howItWorks: [
            { time: "Immediately", title: "Assessment", desc: "Full health evaluation." },
            { time: "Within 30 mins", title: "Plan", desc: "Receive diet chart." }
          ],
          included: [
            { icon: "stethoscope", title: "Full body exam", desc: "Detailed checkup" },
            { icon: "heartbeat", title: "Growth monitoring", desc: "Weight & height tracking" }
          ],
          excluded: ["Diagnostic tests", "Vaccination administration"],
          faqs: [
            { question: "Is it safe?", answer: "Yes, 100% safe." },
            { question: "What age group?", answer: "Birth to 12 months." }
          ],
          professionals: [
            { icon: "graduation-cap", text: "Expert Paediatricians" },
            { icon: "star", text: "4.8+ average ratings" }
          ]
        },
        {
          id: 2,
          title: "Child Wellness Checkup",
          rating: "4.92",
          reviews: "20K reviews",
          price: 599,
          originalPrice: 799,
          discount: "25% off",
          duration: "30 minutes",
          img: childWellnessImg,
          about: "Regular health monitoring for growing children to ensure they meet their physical and cognitive milestones.",
          features: ["Growth milestone assessment.", "Vaccination schedule review."],
          packages: [
            { id: "p2", name: "Annual Wellness", desc: "Full year health tracking", tags: ["12 visits"], originalPrice: 3000, price: 2500, savings: "Save ₹500", isPopular: false }
          ],
          reviewSummary: { rating: "4.92", total: "20K reviews", bars: [{ stars: 5, pct: 98 }, { stars: 4, pct: 2 }, { stars: 3, pct: 0 }, { stars: 2, pct: 0 }, { stars: 1, pct: 0 }] },
          reviewsList: [
            { id: 1, initial: "A", name: "Amit K.", date: "Apr 2026", rating: 5, text: "Great experience with the wellness checkup." }
          ],
          howItWorks: [
            { time: "Step 1", title: "Booking", desc: "Schedule online." },
            { time: "Step 2", title: "Checkup", desc: "Visit or virtual." }
          ],
          included: [
            { icon: "heartbeat", title: "Growth Chart", desc: "Complete assessment" },
            { icon: "phone", title: "Follow-up", desc: "One free call" }
          ],
          excluded: ["Insurance claims", "Dental checkup"],
          faqs: [
            { question: "Any diet plan?", answer: "Yes, customized based on child." }
          ],
          professionals: [
            { icon: "shield-check", text: "Certified specialists" },
            { icon: "graduation-cap", text: "Trained professionals" }
          ]
        }
      ]);
    }, 800);
  });
};

const PaediatricConsultation = () => {
  const [servicesData, setServicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);
  const [activeFilterPill, setActiveFilterPill] = useState("Most relevant");
  const [showFiltersView, setShowFiltersView] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState("Rating");

  const reviewPills = ["Most relevant", "Positive", "Critical"];
  const filterTabs = ["Rating", "Sort By"];

  useEffect(() => {
    fetchPaediatricServices().then((data) => { setServicesData(data); setIsLoading(false); });
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setVisibleReviewsCount(3);
    setShowFiltersView(false);
    setActiveFilterTab("Rating");
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="bg-[#f4f8fb] py-[20px]">
      <div className="max-w-[1200px] mx-auto px-[15px] sm:px-[20px]">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-[900] text-[#273b47] mb-[20px] md:mb-[25px] text-left">Paediatric Consultation</h2>
        
        {isLoading ? (
          <div className="flex justify-center py-[50px]"><FaSpinner className="animate-spin text-[30px] text-[#15a083]" /></div>
        ) : (
          <div className="flex flex-col gap-[15px] md:gap-[20px]">
            {servicesData.map((service) => (
              <div key={service.id} className="group bg-[#ffffff] rounded-[20px] p-[16px] sm:p-[20px] lg:p-[25px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] flex flex-col md:flex-row justify-between gap-[15px] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)]">
                <div className="flex flex-col flex-grow text-left">
                  <h3 className="text-[16px] font-[800] text-[#273b47] mb-[8px] cursor-pointer" onClick={() => openModal(service)}>{service.title}</h3>
                  <div className="flex items-center gap-[6px] mb-[10px]">
                    <FaStar className="text-[#de7223] text-[12px]" />
                    <span className="text-[13px] font-[700] text-[#273b47]">{service.rating} ({service.reviews})</span>
                  </div>
                  <div className="text-[14px] text-[#273b47] font-[600] mb-[15px]">Starts at ₹{service.price} | <FaClock className="inline text-[#15a083]" /> {service.duration}</div>
                  <ul className="m-0 pl-[18px] mb-[15px] list-none space-y-[8px]">
                    {service.features.map((f, i) => <li key={i} className="text-[13px] text-[#273b47] relative before:content-['•'] before:absolute before:-left-[15px] before:text-[#de7223]">{f}</li>)}
                  </ul>
                  <span className="text-[11px] font-[800] text-[#15a083] uppercase cursor-pointer hover:underline" onClick={() => openModal(service)}>View details</span>
                </div>
                <div className="w-full md:w-[160px] rounded-[16px] overflow-hidden">
                  <img src={service.img} className="w-full h-[140px] object-cover" />
                  <button className="w-full bg-[#15a083] text-white py-[12px] font-[700] text-[12px] uppercase cursor-pointer hover:bg-[#de7223]" onClick={() => openModal(service)}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- MODAL --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm sm:p-[20px] animate-fade-in" onClick={closeModal}>
          <div className="w-full h-full sm:h-auto max-h-[100vh] sm:max-h-[90vh] sm:max-w-[650px] bg-white sm:rounded-[24px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex flex-col relative animate-scale-up" onClick={(e) => e.stopPropagation()}>
            
            <div className="relative w-full h-[200px] sm:h-[220px] shrink-0 bg-[#eef2f6]">
              <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover" />
              <button onClick={closeModal} className="absolute top-[15px] right-[15px] bg-white hover:bg-gray-100 text-[#273b47] w-[35px] h-[35px] rounded-full flex justify-center items-center border-none cursor-pointer shadow-md transition-colors">
                <FaTimes className="text-[16px]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-[30px] custom-med-scroll text-left">
              
              <div className="p-[20px] pb-[15px]">
                <div className="flex justify-between items-start gap-[15px]">
                  <div>
                    <h2 className="text-[22px] font-[800] text-[#273b47] m-0 mb-[8px] leading-[1.2]">{selectedService.title}</h2>
                    <div className="flex items-center gap-[6px] mb-[12px]">
                      <FaStar className="text-[#de7223] text-[12px]" />
                      <span className="text-[13px] font-[600] text-[#7a8a9e]">{selectedService.rating} ({selectedService.reviews})</span>
                    </div>
                  </div>
                  <button className="bg-[#15a083] text-white border-none py-[10px] px-[24px] rounded-[10px] text-[13px] font-[700] uppercase tracking-[0.5px] cursor-pointer hover:bg-[#de7223] transition-colors shrink-0 shadow-[0_4px_10px_rgba(21,160,131,0.2)]">
                    Book Now
                  </button>
                </div>

                <div className="flex items-center gap-[8px]">
                  <span className="text-[20px] font-[800] text-[#273b47]">₹{selectedService.price}</span>
                  <span className="text-[14px] font-[500] text-[#a3b1bf] line-through">₹{selectedService.originalPrice}</span>
                  <span className="bg-[#e0f5f1] text-[#15a083] px-[8px] py-[2px] rounded-[4px] text-[11px] font-[700]">{selectedService.discount}</span>
                  <span className="text-[#d8dbdd] font-[400] mx-[4px]">|</span> 
                  <span className="text-[#7a8a9e] text-[13px] font-[500]">{selectedService.duration}</span>
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[10px]">About the service</h3>
                <p className="text-[13px] text-[#6b7c8f] m-0 leading-[1.6] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                  {selectedService.about}
                </p>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                <div className="flex justify-between items-center mb-[15px]">
                  <h3 className="text-[18px] font-[900] text-[#273b47] m-0">Packages</h3>
                  <span className="text-[13px] font-[700] text-[#15a083] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="flex gap-[15px] overflow-x-auto pb-[10px] hide-scrollbar snap-x">
                  {selectedService.packages.map((pkg) => (
                    <div 
                      key={pkg.id} 
                      className={`relative min-w-[260px] max-w-[280px] shrink-0 bg-white border-[1.5px] rounded-[16px] p-[16px] flex flex-col snap-start transition-colors ${pkg.isPopular ? 'border-[#15a083]' : 'border-[#e5e7eb]'}`}
                    >
                      {pkg.isPopular && (
                        <div className="absolute top-[-10px] right-[15px] bg-[#15a083] text-white text-[10px] font-[800] tracking-[0.5px] uppercase px-[10px] py-[3px] rounded-full shadow-sm">
                          Most Popular
                        </div>
                      )}
                      
                      <h4 className="text-[15px] font-[800] text-[#273b47] m-0 mb-[4px] pr-[20px]">{pkg.name}</h4>
                      <p className="text-[12px] text-[#7a8a9e] m-0 mb-[12px] leading-[1.4] line-clamp-2">{pkg.desc}</p>
                      
                      <div className="flex gap-[8px] mb-[12px]">
                        {pkg.tags.map((tag, idx) => (
                          <span key={idx} className="bg-[#f4f8fb] text-[#273b47] px-[8px] py-[4px] rounded-[6px] text-[11px] font-[600]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-[12px] font-[700] text-[#273b47] underline cursor-pointer mb-[15px]">View Details</span>
                      
                      <div className="mt-auto flex justify-between items-end">
                        <div className="flex flex-col">
                          <span className="text-[11px] text-[#a3b1bf] line-through">₹{pkg.originalPrice}</span>
                          <div className="flex items-center gap-[6px]">
                            <span className="text-[18px] font-[800] text-[#0F0F0F]">₹{pkg.price}</span>
                            <span className="text-[#15a083] text-[11px] font-[700]">{pkg.savings}</span>
                          </div>
                        </div>
                        
                        <button className="bg-transparent border-[1.5px] border-[#15a083] text-[#15a083] py-[6px] px-[20px] rounded-[8px] text-[13px] font-[700] hover:bg-[#15a083] hover:text-white transition-colors cursor-pointer">
                          Select
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[20px]">How it works</h3>
                <div className="relative border-l-[2px] border-[#e0f5f1] ml-[6px] pl-[25px] space-y-[25px]">
                  {selectedService.howItWorks.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute left-[-32px] top-[4px] w-[12px] h-[12px] bg-[#15a083] rounded-full ring-[4px] ring-white"></div>
                      <h4 className="text-[#15a083] text-[13px] font-[700] m-0 mb-[4px]">{step.time}</h4>
                      <h5 className="text-[#273b47] text-[15px] font-[800] m-0 mb-[6px]">{step.title}</h5>
                      <p className="text-[#7a8a9e] text-[13px] m-0 leading-[1.5] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[20px]">What's Included</h3>
                <div className="flex flex-col gap-[20px]">
                  {selectedService.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-[15px]">
                      <div className="w-[45px] h-[45px] rounded-[12px] bg-[#e0f5f1] text-[#15a083] flex justify-center items-center shrink-0 text-[20px]">
                        {IconMap[item.icon]}
                      </div>
                      <div className="flex flex-col pt-[2px]">
                        <h4 className="text-[#273b47] text-[15px] font-[800] m-0 mb-[4px]">{item.title}</h4>
                        <p className="text-[#7a8a9e] text-[13px] m-0 leading-[1.4] font-['Segoe_UI',Tahoma,Geneva,sans-serif]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[15px]">What is excluded?</h3>
                <ul className="m-0 p-0 list-none space-y-[12px]">
                  {selectedService.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-[10px] text-[14px] text-[#273b47] font-[600]">
                      <div className="w-[16px] h-[16px] rounded-full bg-[#fde8e8] text-[#f05252] flex justify-center items-center shrink-0">
                        <FiXCircle className="text-[10px]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px] pb-[10px]">
                <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[5px]">Frequently Asked Questions</h3>
                <div className="flex flex-col">
                  {selectedService.faqs.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                <h3 className="text-[18px] font-[900] text-[#273b47] m-0 mb-[15px]">Our Professionals</h3>
                <div className="flex flex-col gap-[12px]">
                  {selectedService.professionals.map((prof, idx) => (
                    <div key={idx} className="flex items-center gap-[12px]">
                      <div className="text-[#273b47] text-[16px]">
                        {IconMap[prof.icon]}
                      </div>
                      <span className="text-[14px] font-[600] text-[#273b47]">{prof.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px] flex gap-[30px] items-center">
                <div className="flex flex-col items-start shrink-0">
                  <div className="flex items-center gap-[8px] text-[32px] font-[900] text-[#0F0F0F] mb-[4px]">
                    <FaStar className="text-[#0F0F0F] text-[24px]" /> {selectedService.reviewSummary.rating}
                  </div>
                  <span className="text-[12px] text-[#7a8a9e] font-[500]">{selectedService.reviewSummary.total}</span>
                </div>
                
                <div className="flex flex-col gap-[6px] flex-grow">
                  {selectedService.reviewSummary.bars.map((bar) => (
                    <div key={bar.stars} className="flex items-center gap-[10px]">
                      <span className="text-[10px] text-[#7a8a9e] font-[600] w-[10px]">{bar.stars}</span>
                      <div className="h-[4px] bg-[#eef2f6] rounded-full flex-grow relative overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-[#0F0F0F] rounded-full" 
                          style={{ width: `${bar.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full border-b-[8px] border-[#f4f8fb]"></div>

              <div className="p-[20px]">
                
                {!showFiltersView ? (
                  <div className="animate-fade-in flex flex-col h-full">
                    <div className="flex justify-between items-center mb-[15px]">
                      <h3 className="font-[900] text-[#273b47] text-[18px] m-0">All reviews</h3>
                      <span 
                        onClick={() => setShowFiltersView(true)}
                        className="text-[#15a083] text-[13px] font-[700] cursor-pointer hover:underline"
                      >
                        Filter
                      </span>
                    </div>

                    <div className="flex gap-[10px] overflow-x-auto hide-scrollbar mb-[20px] pb-[5px]">
                      {reviewPills.map((pill) => (
                        <button 
                          key={pill}
                          onClick={() => setActiveFilterPill(pill)}
                          className={`shrink-0 px-[14px] py-[6px] rounded-[8px] text-[12px] font-[700] transition-colors border-none cursor-pointer ${
                            activeFilterPill === pill 
                              ? "bg-[#273b47] text-[#ffffff]" 
                              : "bg-[#f4f8fb] text-[#7a8a9e] hover:bg-[#eef2f6]"
                          }`}
                        >
                          {pill}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col">
                      {selectedService.reviewsList.slice(0, visibleReviewsCount).map((review, idx) => (
                        <div key={review.id} className={`flex flex-col py-[15px] ${idx !== visibleReviewsCount - 1 ? 'border-b-[1px] border-[#eef2f6]' : ''}`}>
                          <div className="flex justify-between items-center mb-[8px]">
                            <div className="flex items-center gap-[10px]">
                              <div className="w-[32px] h-[32px] rounded-full bg-[#eef2f6] flex items-center justify-center text-[#273b47] font-[800] text-[13px]">
                                {review.initial}
                              </div>
                              <span className="font-[800] text-[#273b47] text-[14px]">{review.name}</span>
                            </div>
                            <span className="text-[#a3b1bf] text-[11px] font-[600]">{review.date}</span>
                          </div>

                          <div className="flex items-center gap-[3px] mb-[10px]">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar 
                                key={star} 
                                className={`text-[12px] ${star <= review.rating ? 'text-[#de7223]' : 'text-[#eef2f6]'}`} 
                              />
                            ))}
                          </div>

                          <p className="text-[#6b7c8f] text-[13px] leading-[1.5] m-0 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
                            {review.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {visibleReviewsCount < selectedService.reviewsList.length && (
                      <button 
                        onClick={() => setVisibleReviewsCount(prev => prev + 3)}
                        className="mt-[15px] w-full self-center py-[10px] rounded-[10px] border-[1.5px] border-[#eef2f6] bg-transparent text-[#273b47] text-[13px] font-[800] hover:bg-[#f4f8fb] transition-colors cursor-pointer"
                      >
                        Show more
                      </button>
                    )}
                  </div>
                ) : (
                  
                  <div className="animate-fade-in flex flex-col h-full">
                    <div className="flex justify-between items-center mb-[20px]">
                      <div className="flex items-center gap-[10px]">
                        <button 
                          onClick={() => setShowFiltersView(false)} 
                          className="text-[#273b47] hover:text-[#15a083] transition-colors outline-none border-none bg-transparent cursor-pointer flex items-center justify-center"
                        >
                          <FiArrowLeft className="w-[20px] h-[20px]" />
                        </button>
                        <h3 className="font-[900] text-[#273b47] text-[18px] m-0">Filters</h3>
                      </div>
                      <span className="text-[#15a083] text-[13px] font-[700] cursor-pointer hover:underline">
                        Clear
                      </span>
                    </div>

                    <div className="flex gap-[15px] mb-[20px] border-b-[1px] border-[#eef2f6]">
                      {filterTabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveFilterTab(tab)}
                          className={`pb-[10px] text-[13px] font-[800] transition-colors relative outline-none border-none bg-transparent cursor-pointer ${
                            activeFilterTab === tab 
                              ? "text-[#15a083]" 
                              : "text-[#7a8a9e] hover:text-[#273b47]"
                          }`}
                        >
                          {tab}
                          {activeFilterTab === tab && (
                            <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#15a083] rounded-t-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {activeFilterTab === "Rating" && (
                      <div className="flex flex-col gap-[15px]">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <label key={star} className="flex items-center gap-[12px] cursor-pointer group w-fit">
                            <input 
                              type="checkbox" 
                              className="w-[18px] h-[18px] rounded-[4px] border-[#d8dbdd] accent-[#15a083] cursor-pointer"
                            />
                            <span className="text-[14px] text-[#273b47] font-[600] group-hover:text-[#15a083] transition-colors">
                              {star} Star
                            </span>
                          </label>
                        ))}
                      </div>
                    )}

                    {activeFilterTab === "Sort By" && (
                      <div className="flex flex-col gap-[15px]">
                        {["Recent", "Most detailed"].map((option) => (
                          <label key={option} className="flex items-center gap-[12px] cursor-pointer group w-fit">
                            <input 
                              type="radio" 
                              name="sortByOption"
                              defaultChecked={option === "Recent"}
                              className="w-[18px] h-[18px] border-[#d8dbdd] accent-[#15a083] cursor-pointer"
                            />
                            <span className="text-[14px] text-[#273b47] font-[600] group-hover:text-[#15a083] transition-colors">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
          
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-med-scroll::-webkit-scrollbar { width: 6px; }
        .custom-med-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-med-scroll::-webkit-scrollbar-thumb { background: #d8dbdd; border-radius: 10px; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <div className="w-full h-[10px] bg-[#d8dbdd] my-[30px] md:my-[40px]"></div>
    </section>
  );
};

export default PaediatricConsultation;