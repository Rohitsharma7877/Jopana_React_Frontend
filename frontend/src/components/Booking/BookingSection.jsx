import React, { useState } from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { BiMapPin } from 'react-icons/bi';
import { TbClockHour4 } from 'react-icons/tb';

// --- MOCK DATA BASED EXACTLY ON YOUR DESIGN ---
const mockBookings = [
  // ACTIVE BOOKINGS
  {
    id: 1,
    tab: 'Active',
    badge: { text: 'En Route • 12 mins', icon: <BiMapPin /> },
    title: 'General Physician Consultation',
    status: 'Scheduled',
    statusColor: 'text-[#15a083]',
    time: 'Today, 2:30 PM',
    desc: 'General checkup with Dr. Sharma for seasonal allergies.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150',
    otp: '4 7 6 8',
    buttons: [{ label: 'View Details', type: 'outline' }]
  },
  {
    id: 2,
    tab: 'Active',
    badge: { text: 'Waiting Room', icon: <TbClockHour4 /> },
    title: 'Pediatric Consultation',
    status: 'Scheduled',
    statusColor: 'text-[#15a083]',
    time: 'Today, 2:00 PM',
    desc: 'Pediatric consultation with Dr. Raina Vyas for seasonal.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=150&h=150',
    buttons: [{ label: 'View Details', type: 'outline' }]
  },
  {
    id: 3,
    tab: 'Active',
    badge: { text: 'En Route • 50 mins', icon: <BiMapPin /> },
    title: 'General Health Checkup',
    status: 'Scheduled',
    statusColor: 'text-[#15a083]',
    time: 'Today, 3:20 PM',
    desc: 'General checkup with Dr. Varun for seasonal allergies.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=150&h=150',
    otp: '7 5 6 7',
    package: { name: 'Essential Care Package', tag: 'Valid Till', remaining: 6, total: 10 },
    buttons: [
      { label: 'View Details', type: 'outline' },
      { label: 'Renew Package', type: 'primary' }
    ]
  },

  // UPCOMING BOOKINGS
  {
    id: 4,
    tab: 'Upcoming',
    badge: { text: 'Matching Provider' },
    title: 'Physiotherapy Session',
    status: 'Scheduled',
    statusColor: 'text-[#15a083]',
    time: '13th March, 3:00 PM',
    desc: 'General Dermatology checkup with a professional.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=150&h=150',
    buttons: [{ label: 'View Details', type: 'outline' }]
  },
  {
    id: 5,
    tab: 'Upcoming',
    badge: { text: 'Matching Provider' },
    title: 'Pediatric Consultation',
    status: 'Scheduled',
    statusColor: 'text-[#15a083]',
    time: '14th March, 7:00 PM',
    desc: 'Pediatric consultation with Dr. Raina Vyas for seasonal.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=150&h=150',
    buttons: [{ label: 'View Details', type: 'outline' }]
  },

  // PAST BOOKINGS
  {
    id: 6,
    tab: 'Past',
    title: 'Sinus & Allergy Consultation',
    status: 'Completed',
    statusColor: 'text-[#15a083]',
    time: '25th February, 2:30 PM',
    desc: 'General Dermatology checkup with a professional.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150',
    buttons: [{ label: 'Book Again', type: 'outline-teal' }]
  },
  {
    id: 7,
    tab: 'Past',
    title: 'General Physician Consultation',
    status: 'Completed',
    statusColor: 'text-[#15a083]',
    time: '22nd February, 4:30 PM',
    desc: 'Pediatric consultation with Dr. Raina Vyas for seasonal.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=150&h=150',
    buttons: [{ label: 'Book Again', type: 'outline-teal' }]
  },

  // CANCELLED BOOKINGS
  {
    id: 8,
    tab: 'Cancelled',
    title: 'Blood Pressure Monitoring',
    status: 'Cancelled',
    statusColor: 'text-[#e11d48]', // Red color for cancelled
    time: '22nd February, 2:00 PM',
    desc: 'Blood Pressure and vitals monitoring session.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150',
    buttons: [{ label: 'Book Again', type: 'outline-teal' }]
  },
  {
    id: 9,
    tab: 'Cancelled',
    title: 'Physiotherapy Session',
    status: 'Cancelled',
    statusColor: 'text-[#e11d48]',
    time: '22nd February, 3:20 PM',
    desc: 'General checkup with Dr. Varun for seasonal allergies.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=150&h=150',
    package: { name: 'Essential Care Package', tag: 'Valid Till', remaining: 9, total: 10 },
    buttons: [
      { label: 'View details', type: 'outline-teal' },
      { label: 'Renew Package', type: 'primary' }
    ]
  }
];

// --- SUB-COMPONENTS FOR UI ELEMENTS ---
const OtpBox = ({ otp }) => (
  <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-[10px] px-[16px] flex flex-col justify-center items-start min-w-[140px] text-left">
    <span className="text-[10px] text-[#7a8a9e] font-[600] mb-[2px] text-left">Share OTP to start service</span>
    <span className="text-[18px] text-[#15a083] font-[800] tracking-[4px] text-left">{otp}</span>
  </div>
);

const PackageBox = ({ pkg }) => {
  const progressPct = ((pkg.total - pkg.remaining) / pkg.total) * 100;
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-[10px] px-[16px] flex flex-col justify-center items-start min-w-[240px] flex-1 max-w-[320px] text-left">
      <div className="flex justify-between items-center mb-[6px] w-full">
        <span className="text-[12px] text-[#0F0F0F] font-[800] text-left">{pkg.name}</span>
        <span className="bg-[#15a083] text-white text-[9px] font-[700] px-[6px] py-[2px] rounded-full uppercase tracking-[0.5px]">{pkg.tag}</span>
      </div>
      <div className="h-[4px] w-full bg-[#eef2f6] rounded-full overflow-hidden mb-[6px]">
        <div className="h-full bg-[#15a083] rounded-full" style={{ width: `${progressPct}%` }}></div>
      </div>
      {/* Changed to text-left per your request */}
      <span className="text-[10px] text-[#e8a342] font-[700] text-left w-full">{pkg.remaining} visits remaining</span>
    </div>
  );
};

const BookingCard = ({ data }) => {
  return (
    <div className="bg-[#f2f4f7] rounded-[16px] p-[16px] flex flex-col md:flex-row gap-[20px] items-start transition-shadow hover:shadow-sm text-left">
      
      {/* Image */}
      <img src={data.image} alt={data.title} className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-[12px] shrink-0" />
      
      {/* Content */}
      <div className="flex flex-col flex-grow items-start w-full text-left">
        
        {/* Badge */}
        {data.badge && (
          <div className="bg-[#15a083] text-white text-[10px] font-[700] px-[8px] py-[4px] rounded-full flex items-center gap-[4px] w-fit mb-[8px] text-left">
            {data.badge.icon && <span className="text-[12px]">{data.badge.icon}</span>}
            {data.badge.text}
          </div>
        )}
        
        {/* Title & Status */}
        <h3 className="text-[18px] font-[800] text-[#0F0F0F] leading-tight mb-[4px] text-left w-full">{data.title}</h3>
        <p className="text-[13px] font-[600] text-[#7a8a9e] mb-[12px] text-left w-full">
          <span className={data.statusColor}>{data.status}</span> • {data.time}
        </p>
        
        {/* OTP & Packages Row */}
        {(data.otp || data.package) && (
          <div className="flex flex-wrap gap-[12px] mb-[12px] w-full justify-start">
            {data.otp && <OtpBox otp={data.otp} />}
            {data.package && <PackageBox pkg={data.package} />}
          </div>
        )}
        
        {/* Description */}
        <p className="text-[13px] text-[#6b7c8f] m-0 text-left w-full">
          {data.desc} <span className="font-[800] text-[#0F0F0F] underline cursor-pointer hover:text-[#15a083]">Details</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-[10px] w-full md:w-auto shrink-0 md:h-[120px] justify-start md:justify-center items-start md:items-end">
        {data.buttons.map((btn, idx) => {
          let btnClass = "";
          if (btn.type === 'outline') {
            btnClass = "bg-white border border-[#d8dbdd] text-[#15a083] hover:bg-[#f4f8fb]";
          } else if (btn.type === 'outline-teal') {
            btnClass = "bg-white border border-[#eef2f6] text-[#15a083] hover:bg-[#f4f8fb]";
          } else if (btn.type === 'primary') {
            btnClass = "bg-[#15a083] border border-[#15a083] text-white hover:bg-[#11826a]";
          }
          
          return (
            <button key={idx} className={`px-[20px] py-[8px] rounded-[8px] text-[12px] font-[700] transition-colors w-full md:w-[140px] text-center md:text-center ${btnClass}`}>
              {btn.label}
            </button>
          );
        })}
      </div>
      
    </div>
  );
};


// --- MAIN COMPONENT ---
const BookingSection = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const tabs = ['Active', 'Upcoming', 'Past', 'Cancelled'];

  // Filter bookings based on active tab
  const displayedBookings = mockBookings.filter(booking => booking.tab === activeTab);

  return (
    <div className="min-h-screen bg-[#f4faff] font-sans pb-[60px] text-left w-full">
      
      {/* Header Area */}
      <div className="bg-[#ffffff] pt-[40px] pb-[30px] px-[20px] w-full text-left">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px]">
          
          {/* Title & Back Arrow */}
          <div className="flex items-start justify-start gap-[15px] w-full text-left">
            <button className="mt-[6px] text-[#273b47] hover:text-[#15a083] transition-colors bg-transparent border-none cursor-pointer p-0">
              <FiArrowLeft className="text-[24px]" />
            </button>
            <div className="flex flex-col items-start text-left w-full">
              <h1 className="text-[28px] md:text-[32px] font-[900] text-[#0F0F0F] m-0 mb-[4px] leading-none text-left">Your Bookings</h1>
              <p className="text-[14px] text-[#7a8a9e] m-0 font-[500] text-left w-full">View, manage, and stay updated on your appointments</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[320px] shrink-0">
            <FiSearch className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#7a8a9e] text-[16px]" />
            <input 
              type="text" 
              placeholder="Search for bookings" 
              className="w-full h-[45px] bg-white border border-[#15a083] rounded-[10px] pl-[40px] pr-[15px] text-[14px] text-[#0F0F0F] placeholder-[#a3b1bf] focus:outline-none focus:border-[#15a083] transition-colors shadow-sm text-left"
            />
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-[20px] mt-[30px] flex flex-col items-start w-full text-left">
        
        {/* Tabs */}
        <div className="flex gap-[12px] overflow-x-auto hide-scrollbar mb-[40px] pb-[5px] w-full justify-start items-start text-left">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-[24px] py-[10px] rounded-[10px] text-[13px] font-[700] transition-colors border-none cursor-pointer text-left ${
                activeTab === tab 
                  ? "bg-[#0F0F0F] text-white" 
                  : "bg-[#eef2f6] text-[#6b7c8f] hover:bg-[#e2e8f0] hover:text-[#0F0F0F]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Title based on Tab */}
        <h2 className="text-[22px] font-[800] text-[#0F0F0F] mb-[20px] text-left w-full">
          {activeTab} Booking
        </h2>

        {/* Bookings List */}
        <div className="flex flex-col gap-[20px] w-full items-start text-left">
          {displayedBookings.length > 0 ? (
            displayedBookings.map(booking => (
              <BookingCard key={booking.id} data={booking} />
            ))
          ) : (
            <div className="py-[50px] text-[#7a8a9e] font-[500] text-left w-full">
              No {activeTab.toLowerCase()} bookings found.
            </div>
          )}
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default BookingSection;