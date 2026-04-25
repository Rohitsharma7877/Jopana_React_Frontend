import React, { useState } from 'react';
import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaUserNurse,
  FaHandHoldingHeart,
  FaTimes,
  FaAmbulance,
  FaBaby
} from 'react-icons/fa';
import { MdOutlineAssistWalker, MdBloodtype } from 'react-icons/md';

import doctor1 from './dt1.jpeg';
import doctor2 from './dt2.jpeg';
import doctor3 from './dt3.jpg';

const Section4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainProfessionals = [
    { id: 1, name: 'Sarah Jenkins', specialty: 'Registered Home Nurse', icon: <FaUserNurse />, image: doctor1 },
    { id: 2, name: 'Dr. David Chen', specialty: 'Senior Physiotherapist', icon: <MdOutlineAssistWalker />, image: doctor2 },
    { id: 3, name: 'Anita Patel', specialty: 'Senior Care Specialist', icon: <FaHandHoldingHeart />, image: doctor3 },
    { id: 4, name: 'Michael Ross', specialty: 'Emergency Responder', icon: <FaAmbulance />, image: doctor1 },
    { id: 5, name: 'Elena Gomez', specialty: 'Pediatric Caregiver', icon: <FaBaby />, image: doctor2 },
  ];

  const extendedProfessionals = [
    ...mainProfessionals,
    { id: 6, name: 'Dr. James Wilson', specialty: 'Phlebotomist', icon: <MdBloodtype />, image: doctor3 },
    { id: 7, name: 'Dr. Emily Stone', specialty: 'Cardiologist', icon: <FaHeart />, image: doctor1 },
    { id: 8, name: 'Mark Taylor', specialty: 'Orthopedic Expert', icon: <MdOutlineAssistWalker />, image: doctor2 },
  ];

  return (
    <section className="bg-[#f4f8fb] py-20 font-[Montserrat]">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}
        <div className="flex justify-between items-end gap-10 mb-12">
          <div className="flex-1.2">
            <div className="inline-flex items-center gap-2 bg-white text-[#de7223] px-4 py-2 rounded-full text-xs font-bold tracking-widest shadow">
              <FaHeart /> MEET OUR TEAM
            </div>

            <h2 className="text-[42px] font-black leading-tight mt-4">
              <span className="text-[#273b47]">Our Verified & Trusted</span><br />
              <span className="text-[#15a083]">Care Professionals</span>
            </h2>
          </div>

          <p className="flex-1 text-sm text-[#7a8a9e] leading-7">
            Every member of our on-demand healthcare team is rigorously background-checked,
            highly trained, and ready to deliver hospital-level care directly to your doorstep.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-5 mb-16">
          {mainProfessionals.map((pro) => (
            <div
              key={pro.id}
              className="bg-white rounded-2xl p-5 shadow transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
              }}
            >
              {/* Top */}
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-sm font-extrabold text-[#273b47] line-clamp-2">
                    {pro.name}
                  </h3>
                  <p className="text-[10px] font-bold text-[#15a083] uppercase tracking-wide">
                    {pro.specialty}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#e0f2ef] text-[#15a083] flex items-center justify-center text-sm">
                  {pro.icon}
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center my-3">
                <div className="w-[120px] h-[120px] rounded-full border-2 border-[#e0f2ef] p-1 flex items-center justify-center">
                  <img src={pro.image} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-2 mt-auto">
                <button className="bg-[#15a083] text-white text-[10px] font-bold px-3 py-2 rounded-full flex-1 hover:bg-[#11826a]">
                  BOOK INSTANTLY
                </button>

                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-full bg-[#e0f2ef] text-[#de7223] flex items-center justify-center hover:bg-[#15a083] hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#e0f2ef] text-[#de7223] flex items-center justify-center hover:bg-[#15a083] hover:text-white">
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="flex justify-center">
          <div className="bg-[#273b47] text-white rounded-full px-8 py-4 flex items-center gap-8 shadow-lg">
            <span className="font-semibold text-sm">
              Looking for a specific care specialist?
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-white/30 px-6 py-2 rounded-full text-sm font-bold hover:bg-white/10"
            >
              VIEW ALL PROFESSIONALS
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-[#273b47]/70 backdrop-blur-md flex justify-center items-center p-5 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#f4f8fb] w-full max-w-[1200px] max-h-[90vh] rounded-2xl p-10 shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-3xl font-black">
                <span className="text-[#273b47]">All Available</span>{' '}
                <span className="text-[#15a083]">Professionals</span>
              </h2>

              <button onClick={() => setIsModalOpen(false)} className="text-2xl text-[#de7223] hover:rotate-90 transition">
                <FaTimes />
              </button>
            </div>

            <div className="overflow-y-auto pr-3">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
                {extendedProfessionals.map((pro) => (
                  <div key={pro.id} className="bg-white rounded-2xl p-5 shadow flex flex-col">
                    <h3 className="font-bold text-sm">{pro.name}</h3>
                    <p className="text-xs text-[#15a083]">{pro.specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section4;