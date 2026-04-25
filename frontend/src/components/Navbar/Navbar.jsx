import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMobileAlt,
  FaUser, 
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaRegUser,
  FaRegCalendarAlt,
  FaRegEnvelope,
  FaArrowLeft,
  FaCheckCircle,
  FaPlus,
  FaPen,       
  FaTrashAlt,
  FaSearch, 
  FaCrosshairs,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaTimes,
  FaBell
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import jopanaLogo from '../assets/jopanaLogo.png';

const Navbar = () => {
  // Modal & Step State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginStep, setLoginStep] = useState('phone'); 
  const [isScrolled, setIsScrolled] = useState(false);
  // Input State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(""));
  


  // Profile Form State
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

  // Referral State
  const [referralCode, setReferralCode] = useState('');
  const [isReferralApplied, setIsReferralApplied] = useState(false);

  // Family Members Array State
  const [familyMembers, setFamilyMembers] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [memberToDelete, setMemberToDelete] = useState(null);

  // Add Family Member Form State
  const [famName, setFamName] = useState('');
  const [famDob, setFamDob] = useState('');
  const [famGender, setFamGender] = useState('');
  const [famPhone, setFamPhone] = useState('');
  const [famEmail, setFamEmail] = useState('');
  const [famRelation, setFamRelation] = useState('');
  
  const [isRelationDropdownOpen, setIsRelationDropdownOpen] = useState(false);
  const [showOtherRelation, setShowOtherRelation] = useState(false);

  // Location State
  const [searchLocation, setSearchLocation] = useState('');
  const [showLocationList, setShowLocationList] = useState(false);

  // Mock data for location search
  const locationSuggestions = [
    { title: 'Delhi', subtitle: 'India' },
    { title: 'Delhi Airport, DEL', subtitle: 'New Delhi, India' },
    { title: 'Delhi cantt railway Junction', subtitle: 'Kirby Place, Delhi, Cantonment, New Delhi, Delhi, India' },
    { title: 'Delhi High Court', subtitle: 'Shershah Road, Delhi High Court, India Gate, New Delhi, Delhi, India' }
  ];

  // Timer State
  const [timer, setTimer] = useState(30);

  // --- TIMER LOGIC ---
  useEffect(() => {
    let interval;
    if (loginStep === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [loginStep, timer]);

  useEffect(() => {
    const handleScroll = () => {
      // Detects if the user has scrolled down
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // --- HANDLERS ---
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^[0-9\b]+$/.test(value) && value.length <= 10)) {
      setPhoneNumber(value);
    }
  };

  const handleFamPhoneChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^[0-9\b]+$/.test(value) && value.length <= 10)) {
      setFamPhone(value);
    }
  };

  const handleContinue = () => {
    if (phoneNumber.length === 10) {
      setLoginStep('otp');
      setTimer(30); 
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && e.target.previousSibling) {
        e.target.previousSibling.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const resendOtp = () => {
    setOtp(new Array(6).fill(""));
    setTimer(30);
  };

  const handleApplyReferral = () => {
    if (referralCode.trim() !== '') {
      setIsReferralApplied(true);
    }
  };

  const selectRelation = (relation) => {
    if (relation === 'Other') {
      setShowOtherRelation(true);
      setFamRelation(''); 
    } else {
      setShowOtherRelation(false);
      setFamRelation(relation);
    }
    setIsRelationDropdownOpen(false);
  };

  const resetFamilyForm = () => {
    setFamName('');
    setFamDob('');
    setFamGender('');
    setFamPhone('');
    setFamEmail('');
    setFamRelation('');
    setShowOtherRelation(false);
    setEditIndex(null);
  };

  const handleSaveFamilyMember = () => {
    const newMember = { famName, famDob, famGender, famPhone, famEmail, famRelation };
    
    if (editIndex !== null) {
      const updatedMembers = [...familyMembers];
      updatedMembers[editIndex] = newMember;
      setFamilyMembers(updatedMembers);
    } else {
      setFamilyMembers([...familyMembers, newMember]);
    }
    
    resetFamilyForm();
    setLoginStep('family'); 
  };

  const handleEditMember = (index) => {
    const member = familyMembers[index];
    setFamName(member.famName);
    setFamDob(member.famDob);
    setFamGender(member.famGender);
    setFamPhone(member.famPhone);
    setFamEmail(member.famEmail);
    setFamRelation(member.famRelation);
    
    const standardRelations = ['Spouse', 'Parent', 'Cousin', 'Child'];
    if (!standardRelations.includes(member.famRelation) && member.famRelation !== '') {
      setShowOtherRelation(true);
    } else {
      setShowOtherRelation(false);
    }
    
    setEditIndex(index);
    setLoginStep('addFamilyMember');
  };

  const confirmDeleteMember = (index) => {
    setMemberToDelete(index);
  };

  const executeDeleteMember = () => {
    const updatedMembers = familyMembers.filter((_, i) => i !== memberToDelete);
    setFamilyMembers(updatedMembers);
    setMemberToDelete(null);
  };

  const getInitials = (name) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name ? name[0].toUpperCase() : '';
  };

  const handleLocationSearch = (e) => {
    setSearchLocation(e.target.value);
    if (e.target.value.length > 0) {
      setShowLocationList(true);
    } else {
      setShowLocationList(false);
    }
  };

  const selectLocation = (locationTitle) => {
    setSearchLocation(locationTitle);
    setShowLocationList(false); 
  };

  const closeAndResetModal = () => {
    setIsLoginModalOpen(false);
    setTimeout(() => {
      setLoginStep('phone');
      setPhoneNumber('');
      setOtp(new Array(6).fill(""));
      setTimer(30);
      setFullName('');
      setDob('');
      setGender('');
      setEmail('');
      setReferralCode('');
      setIsReferralApplied(false);
      resetFamilyForm();
      setFamilyMembers([]); 
      setSearchLocation('');
      setShowLocationList(false);
      setMemberToDelete(null); 
    }, 300); 
  };

  const isOtpComplete = otp.every((digit) => digit !== ""); 
  const isProfileComplete = fullName.trim() !== '' && dob.trim() !== '' && gender !== '' && email.includes('@');
  const isReferralComplete = referralCode.trim() !== '';
  const isFamComplete = famName.trim() !== '' && famDob.trim() !== '' && famRelation.trim() !== '' && famGender !== '' && famPhone.length === 10 && famEmail.includes('@');

  // NavLink active class handler to replicate original CSS functionality exactly
  const getNavLinkClass = ({ isActive }) => 
    `no-underline cursor-pointer h-[60px] flex items-center transition-all duration-200 hover:text-[#ff8c00] ${isActive ? 'text-[#ff8c00] border-b-[4px] border-[#ff8c00] font-[700]' : 'text-white border-b-[4px] border-transparent font-[500]'}`;
  return (
    <>
     
      <style>{`
        /* --- NEW: IMPORT POPPINS FONT --- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes navPulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .animate-nav-pulse { animation: navPulseGlow 2s infinite; }
        .hover-nav-pulse:hover { animation: none; }

        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-pop { animation: modalPop 0.3s ease-out forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.3s ease-in-out forwards; }

        @keyframes slideLeft { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .animate-slide-left { animation: slideLeft 0.3s ease-in-out forwards; }

        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes popInTranslate {
          0% { opacity: 0; transform: scale(0.9) translateY(-50%); }
          100% { opacity: 1; transform: scale(1) translateY(-50%); }
        }
        .animate-pop-in { animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-pop-in-translate { animation: popInTranslate 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }

        /* PERFECTED CUSTOM SCROLLBAR FOR MODAL */
        .custom-scrollbar::-webkit-scrollbar { 
          width: 4px; /* Made it thinner for a sleeker look */
        }
        .custom-scrollbar::-webkit-scrollbar-track { 
          background: transparent; 
          margin-top: 20px; /* Keeps scrollbar away from the top rounded corner */
          margin-bottom: 20px; /* Keeps scrollbar away from the bottom rounded corner */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: #008080; /* Changed to Jopana Teal */
          border-radius: 10px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #006666; /* Slightly darker teal on hover */
        }
      `}</style>

      {/* --- ADDED font-['Poppins',sans-serif] --- */}
      <nav className={`font-['Poppins',sans-serif] w-full sticky top-0 z-[50] transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-[10%] py-[20px] bg-[#f4faff] gap-[20px] relative z-[50]">
          
          {/* LOGO & SEARCH BAR GROUP */}
          <div className="flex items-center gap-[40px] flex-1">
            <img src={jopanaLogo} alt="Jopana Trusted Excellence in Care" className="h-[45px] w-auto object-contain shrink-0" />
            
            {/* --- NEW SEARCH BAR --- */}
            <div className="hidden md:flex items-center bg-[#ffffff] border-[1px] border-[#e1e8ed] rounded-full px-[16px] h-[38px] w-full max-w-[280px] transition-all duration-200 focus-within:border-[#008080] focus-within:shadow-sm">
              <FaSearch className="text-[#6b7280] text-[14px]" />
              <input 
                type="text" 
                placeholder="Search for 'Doctors'" 
                className="flex-1 border-none outline-none bg-transparent ml-[10px] text-[13px] text-[#333] placeholder-[#888]"
              />
            </div>
          </div>
          
          {/* CONTACT INFO & BUTTON */}
          <div className="hidden lg:flex items-center gap-[30px] justify-end">
            <div className="flex items-center gap-[10px]">
              <FaPhoneAlt className="text-[#008080] bg-white p-[10px] w-[34px] h-[34px] rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.1)]" />
              <div>
                <p className="text-[12px] text-[#666] m-0">Phone Number</p>
                <p className="text-[14px] font-bold m-0">+123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <FaEnvelope className="text-[#008080] bg-white p-[10px] w-[34px] h-[34px] rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.1)]" />
              <div>
                <p className="text-[12px] text-[#666] m-0">Email Address</p>
                <p className="text-[14px] font-bold m-0">info@jopana.com</p>
              </div>
            </div>
            <button className="bg-[#ff8c00] text-white border-none py-[8px] px-[18px] text-[13px] rounded-[20px] font-semibold cursor-pointer transition-all duration-300 hover:bg-[#e67e00] shrink-0">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>

        <div className="px-[10%] mt-[-20px] relative z-[51]">
          <div className="bg-[#008080] flex justify-between items-center px-[30px] rounded-[10px] text-white h-[60px] overflow-x-auto [&::-webkit-scrollbar]:hidden shadow-md">
            <ul className="flex list-none gap-[25px] m-0 p-0 text-[14px]">
              <li className="flex"><NavLink to="/" end className={getNavLinkClass}>HOME</NavLink></li>
              <li className="flex"><NavLink to="/services" className={getNavLinkClass}>SERVICES</NavLink></li>
              <li className="flex"><NavLink to="/booking" className={getNavLinkClass}>BOOKING</NavLink></li>
              <li className="flex"><NavLink to="/about" className={getNavLinkClass}>ABOUT US</NavLink></li>          
              
              
              
            </ul>

            <div className="flex items-center gap-[30px]">
              
              {/* --- NEW LOCATION SELECTOR --- */}
              <div className="flex items-center justify-between bg-[#ffffff] border-[1px] border-[#e1e8ed] rounded-[8px] px-[15px] h-[38px] cursor-pointer transition-all duration-200 hover:border-[#008080] hover:shadow-sm">
                <div className="flex items-center gap-[8px]">
                  <FaMapMarkerAlt className="text-[#6b7280] text-[15px]" />
                  <span className="text-[#6b7280] text-[14px] font-[500]">Delhi, India</span>
                </div>
                <FaChevronDown className="text-[#6b7280] text-[12px] ml-[20px]" />
              </div>

              {/* GET THE APP BUTTON */}
              <button className="flex items-center gap-[8px] bg-[#ffffff] text-[#008080] border-[2px] border-[#ffffff] py-[8px] px-[20px] rounded-[30px] text-[13px] font-[800] cursor-pointer uppercase shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300 animate-nav-pulse hover-nav-pulse hover:bg-[#ff8c00] hover:text-[#ffffff] hover:border-[#ff8c00] hover:shadow-[0_5px_15px_rgba(255,140,0,0.4)] hover:-translate-y-[2px]">
                <FaMobileAlt className="text-[16px]" /> GET THE APP
              </button>

              {/* --- NEW NOTIFICATION ICON --- */}
              <div className="relative flex items-center cursor-pointer transition-all duration-200 hover:text-[#ff8c00]">
                <FaBell className="text-[20px]" />
                
                {/* Red Notification Badge */}
                {/* Change '3' to a dynamic state variable like {notificationCount} in your app */}
                <span className="absolute top-[-6px] right-[-6px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#ff4d4f] text-[9px] font-bold text-white shadow-sm">
                  3
                </span>
              </div>

              <div className="bg-[rgba(255,255,255,0.2)] text-white w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ml-[10px] hover:bg-[#ff8c00] hover:scale-110" onClick={() => setIsLoginModalOpen(true)}>
                <FaUser />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MODAL OVERLAY --- */}
      {isLoginModalOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.6)] backdrop-blur-[5px] z-[9999] flex justify-center items-center p-[20px]" onClick={closeAndResetModal}>
          {/* --- ADDED font-['Poppins',sans-serif] --- */}
          <div className="bg-[#ffffff] w-full max-w-[420px] rounded-[20px] py-[40px] px-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative text-left max-h-[90vh] overflow-y-auto custom-scrollbar animate-modal-pop font-['Poppins',sans-serif]" onClick={(e) => {
            e.stopPropagation();
            if(isRelationDropdownOpen) setIsRelationDropdownOpen(false); 
          }}>
          {/* --- GLOBAL CLOSE 'X' BUTTON --- */}
            <button className="absolute top-[20px] right-[20px] bg-none border-none text-[20px] text-[#a0aab2] cursor-pointer z-[50] flex justify-center items-center p-[5px] transition-all duration-300 hover:text-[#ff4d4f] hover:rotate-90 hover:scale-110" onClick={closeAndResetModal}>
              <FaTimes />
            </button>
            
            {/* STEP 1: PHONE NUMBER INPUT */}
            {loginStep === 'phone' && (
              <div className="animate-fade-in">
                <div className="w-[45px] h-[45px] bg-[#e0f2ef] text-[#008080] rounded-full flex justify-center items-center text-[20px] mb-[20px]">
                  <FaPhoneAlt />
                </div>
                <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0 mb-[10px]">Enter your phone number</h2>
                <p className="text-[13px] text-[#666] leading-[1.5] m-0 mb-[25px]">
                  We'll send you a text with verification code, standard tariff may apply
                </p>

                <div className="flex border-[1px] border-[#e1e8ed] rounded-[10px] overflow-hidden h-[42px] focus-within:border-[#008080] transition-colors">
                  <div className="flex items-center gap-[8px] px-[15px] bg-[#fafafa] border-r-[1px] border-[#e1e8ed] text-[14px] font-[500] text-[#333]">
                    <span>🇮🇳 (+91)</span>
                    <FaChevronDown className="text-[10px] text-[#666]" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter 10-digit number" 
                    className="flex-1 border-none px-[15px] text-[14px] outline-none text-[#333] placeholder-[#aaa] bg-transparent"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                  />
                </div>

                <div className="flex items-center text-center my-[25px] text-[#aaa] text-[13px] before:content-[''] before:flex-1 before:border-b-[1px] before:border-[#e1e8ed] after:content-[''] after:flex-1 after:border-b-[1px] after:border-[#e1e8ed]">
                  <span className="px-[15px]">or</span>
                </div>

                <button className="w-full bg-[#1a1a1a] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[600] flex justify-center items-center gap-[12px] cursor-pointer transition-all duration-300 hover:bg-[#000000]">
                  <FcGoogle className="text-[20px]" /> Continue with Google
                </button>

                <p className="text-[11px] text-[#888] my-[20px]">
                  By continuing, you agree to our <strong className="text-[#333] cursor-pointer underline">T&C</strong> and <strong className="text-[#333] cursor-pointer underline">Privacy policy</strong>
                </p>

                <button 
                  className={`w-full border-none rounded-[10px] h-[42px] text-[15px] font-[700] transition-all duration-300 ${phoneNumber.length === 10 ? 'bg-[#008080] text-white cursor-pointer hover:bg-[#006666]' : 'bg-[#f0f2f5] text-[#a0aab2] cursor-not-allowed'}`} 
                  disabled={phoneNumber.length !== 10}
                  onClick={handleContinue}
                >
                  Continue
                </button>

                <p className="text-center text-[12px] text-[#666] mt-[25px]">
                  Don't have an account? <span className="text-[#008080] font-[700] cursor-pointer hover:underline">Register</span>
                </p>
              </div>
            )}

            {/* STEP 2: OTP VERIFICATION */}
            {loginStep === 'otp' && (
              <div className="animate-slide-left">
                <div className="w-[45px] h-[45px] bg-[#a8ebd9] text-[#008080] rounded-[8px] flex justify-center items-center text-[20px] mb-[20px]">
                  <FaMobileAlt />
                </div>
                <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0 mb-[10px]">Enter verification code</h2>
                <p className="text-[13px] text-[#666] leading-[1.5] m-0 mb-[25px]">
                  A 6-digit verification code has been sent on <strong className="text-[#333]">+91 {phoneNumber}</strong>
                </p>

                <div className="flex justify-between gap-[8px] mt-[25px] mb-[20px]">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="w-[48px] h-[55px] text-center text-[20px] font-[700] text-[#333] border-[1px] border-[#e1e8ed] rounded-[8px] outline-none bg-[#ffffff] transition-all duration-200 focus:border-[#008080] focus:ring-[2px] focus:ring-[#008080]/10 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleOtpChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center pt-[20px] mb-[25px] border-t-[1px] border-dashed border-[#cbd6e2]">
                  {timer > 0 ? (
                    <span className="flex items-center gap-[8px] text-[13px] font-[600] text-[#444]">
                      <FaClock className="text-[14px]"/> 00:{timer < 10 ? `0${timer}` : timer}
                    </span>
                  ) : (
                    <button className="bg-none border-none text-[#008080] text-[13px] font-[700] cursor-pointer p-0 underline" onClick={resendOtp}>
                      Resend OTP
                    </button>
                  )}
                </div>

                <button 
                  className="w-full bg-[#16c8a6] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[700] cursor-pointer transition-all duration-300 hover:bg-[#11a98c] disabled:bg-[#f0f2f5] disabled:text-[#a0aab2] disabled:cursor-not-allowed" 
                  onClick={() => setLoginStep('profile')}
                  disabled={!isOtpComplete}
                >
                  Verify
                </button>

                <p className="text-center text-[12px] text-[#666] mt-[25px]">
                  Don't have an account? <span className="text-[#008080] font-[700] cursor-pointer hover:underline">Register</span>
                </p>
              </div>
            )}

            {/* STEP 3: PROFILE FORM */}
            {loginStep === 'profile' && (
              <div className="animate-slide-left">
                <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0 mb-[10px]">Tell us about yourself</h2>
                <p className="text-[13px] text-[#666] leading-[1.5] m-0 mb-[15px] pb-[12px] border-b-[1px] border-[#eef2f6]">
                  Help us personalize your experience
                </p>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Full Name</label>
                  <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[42px] px-[15px] bg-[#ffffff] transition-all duration-200 focus-within:border-[#008080]">
                    <FaRegUser className="text-[#555] text-[15px] mr-[12px]" />
                    <input 
                      type="text" 
                      placeholder="your full name" 
                      className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa]"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">DOB</label>
                  <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[42px] px-[15px] bg-[#ffffff] transition-all duration-200 focus-within:border-[#008080]">
                    <FaRegCalendarAlt className="text-[#555] text-[15px] mr-[12px]" />
                    <input 
                      type="text" 
                      placeholder="DD/MM/YYYY" 
                      className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa]"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Gender</label>
                  <div className="flex gap-[10px]">
                    <button 
                      className={`flex-1 h-[42px] border-[1px] rounded-[8px] text-[14px] cursor-pointer transition-all duration-200 ${gender === 'Male' ? 'bg-[#d1f4ec] border-[#16c8a6] text-[#008080] font-[600]' : 'bg-[#ffffff] border-[#e1e8ed] text-[#666] font-[500]'}`}
                      onClick={() => setGender('Male')}
                    >
                      Male
                    </button>
                    <button 
                      className={`flex-1 h-[42px] border-[1px] rounded-[8px] text-[14px] cursor-pointer transition-all duration-200 ${gender === 'Female' ? 'bg-[#d1f4ec] border-[#16c8a6] text-[#008080] font-[600]' : 'bg-[#ffffff] border-[#e1e8ed] text-[#666] font-[500]'}`}
                      onClick={() => setGender('Female')}
                    >
                      Female
                    </button>
                    <button 
                      className={`flex-1 h-[42px] border-[1px] rounded-[8px] text-[14px] cursor-pointer transition-all duration-200 ${gender === 'Other' ? 'bg-[#d1f4ec] border-[#16c8a6] text-[#008080] font-[600]' : 'bg-[#ffffff] border-[#e1e8ed] text-[#666] font-[500]'}`}
                      onClick={() => setGender('Other')}
                    >
                      Other
                    </button>
                  </div>
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Email</label>
                  <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[42px] px-[15px] bg-[#ffffff] transition-all duration-200 focus-within:border-[#008080]">
                    <FaRegEnvelope className="text-[#555] text-[15px] mr-[12px]" />
                    <input 
                      type="email" 
                      placeholder="ex..@gmail.com" 
                      className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  className="mt-[10px] w-full bg-[#16c8a6] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[700] cursor-pointer transition-all duration-300 hover:bg-[#11a98c] disabled:bg-[#f0f2f5] disabled:text-[#a0aab2] disabled:cursor-not-allowed" 
                  onClick={() => setLoginStep('referral')}
                  disabled={!isProfileComplete}
                >
                  Continue
                </button>
              </div>
            )}

            {/* STEP 4: REFERRAL CODE */}
            {loginStep === 'referral' && (
              <div className="animate-slide-left">
                
                <div className="flex items-start gap-[15px] mb-[20px]">
                  <button className="bg-none border-none text-[18px] text-[#333] cursor-pointer py-[5px] transition-transform duration-200 hover:-translate-x-[3px]" onClick={() => {
                    setLoginStep('profile');
                    setIsReferralApplied(false); 
                  }}>
                    <FaArrowLeft />
                  </button>
                  <div>
                    <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0">Referral</h2>
                    <p className="text-[13px] text-[#666] leading-[1.5] m-0">
                      Use a referral code to get rewarded
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#eef2f6] mb-[25px]"></div>

                <h3 className="text-[16px] font-[700] text-[#333] m-0 mb-[10px]">Do you have a referral code?</h3>
                <p className="text-[13px] text-[#666] leading-[1.5] m-0 mb-[25px]">
                  If someone referred you to Jopana, enter their code below and you'll both get rewarded.
                </p>

                <div className="flex gap-[15px] mb-[10px]">
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      placeholder="Enter referral code" 
                      className={`w-full box-border border-[1px] rounded-[8px] py-0 pr-[40px] pl-[15px] h-[42px] text-[14px] outline-none transition-all duration-300 ${isReferralApplied ? 'text-[#008080] border-[#4bd2ba] font-[600] bg-[#fafffe]' : 'border-[#e1e8ed] focus:border-[#008080]'}`}
                      value={referralCode}
                      onChange={(e) => {
                        setReferralCode(e.target.value);
                        setIsReferralApplied(false); 
                      }}
                      disabled={isReferralApplied}
                    />
                    {isReferralApplied && <FaCheckCircle className="absolute right-[15px] top-1/2 text-[#4bd2ba] text-[18px] animate-pop-in-translate" />}
                  </div>

                  <button 
                    className="bg-[#4bd2ba] text-[#ffffff] border-none rounded-[8px] px-[25px] h-[42px] font-[600] text-[13px] cursor-pointer transition-all duration-200 hover:bg-[#16c8a6] disabled:bg-[#f0f2f5] disabled:text-[#a0aab2] disabled:cursor-not-allowed" 
                    disabled={!isReferralComplete || isReferralApplied}
                    onClick={handleApplyReferral}
                  >
                    Apply
                  </button>
                </div>

                {isReferralApplied && (
                  <div className="bg-[#eaf0ff] text-[#5c85ff] px-[15px] py-[12px] rounded-[8px] text-[12px] font-[600] mb-[15px] animate-fade-in">
                    Referral code applied! You'll receive your reward after your first booking.
                  </div>
                )}

                <p className="text-[11px] text-[#a0aab2] m-0 mb-[40px]">You can only apply a referral code once during sign up.</p>

                <div className="flex flex-col gap-[15px]">
                  {!isReferralApplied && (
                    <button className="bg-none border-none text-[#555] text-[14px] font-[700] cursor-pointer hover:text-[#008080]" onClick={() => setLoginStep('family')}>
                      Skip for now
                    </button>
                  )}
                  
                  <button 
                    className="w-full bg-[#16c8a6] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[700] cursor-pointer transition-all duration-300 hover:bg-[#11a98c] disabled:bg-[#f0f2f5] disabled:text-[#a0aab2] disabled:cursor-not-allowed" 
                    onClick={() => setLoginStep('family')} 
                    disabled={!isReferralApplied && isReferralComplete} 
                  >
                    Continue
                  </button>
                </div>

              </div>
            )}

            {/* STEP 5: ADD FAMILY MEMBERS LANDING (LIST VIEW) */}
            {loginStep === 'family' && (
              <div className="animate-slide-left">
                
                <div className="flex items-start gap-[15px] mb-[20px]">
                  <button className="bg-none border-none text-[18px] text-[#333] cursor-pointer py-[5px] transition-transform duration-200 hover:-translate-x-[3px]" onClick={() => setLoginStep('referral')}>
                    <FaArrowLeft />
                  </button>
                  <div>
                    <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0">Add family members</h2>
                    <p className="text-[13px] text-[#666] leading-[1.5] m-0">
                      Book healthcare services on their behalf
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#eef2f6] mb-[25px]"></div>

                <div className="flex flex-col gap-[15px] mb-[15px]">
                  {familyMembers.map((member, index) => (
                    <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[12px] px-[15px] py-[12px] bg-[#ffffff] transition-all duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]" key={index}>
                      <div className="w-[40px] h-[40px] bg-[#f0f2f5] text-[#555] rounded-full flex justify-center items-center text-[13px] font-[700] mr-[15px] tracking-[0.5px]">
                        {getInitials(member.famName)}
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="text-[14px] font-[700] text-[#333] mb-[3px]">{member.famName}</span>
                        <span className="text-[11px] text-[#888] font-[500]">{member.famRelation}</span>
                      </div>
                      <div className="flex gap-[15px]">
                        <button className="bg-none border-none text-[14px] cursor-pointer p-[5px] transition-all duration-200 text-[#555] hover:text-[#008080] hover:scale-110" onClick={() => handleEditMember(index)}>
                          <FaPen />
                        </button>
                        <button className="bg-none border-none text-[14px] cursor-pointer p-[5px] transition-all duration-200 text-[#e57373] hover:text-[#f44336] hover:scale-110" onClick={() => confirmDeleteMember(index)}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className="w-full h-[55px] bg-transparent text-[#008080] border-[1px] border-dashed border-[#4bd2ba] rounded-[8px] flex justify-center items-center gap-[10px] text-[14px] font-[600] cursor-pointer transition-all duration-300 mt-[10px] hover:bg-[#fafffe] hover:border-[#008080]" 
                  onClick={() => { resetFamilyForm(); setLoginStep('addFamilyMember'); }}
                >
                  <FaPlus className="text-[14px]" /> Add Members
                </button>

                <div className="flex flex-col gap-[15px] mt-[30px]">
                  <button className="w-full bg-[#16c8a6] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[700] cursor-pointer transition-all duration-300 hover:bg-[#11a98c]" onClick={() => setLoginStep('location')}>
                    Continue
                  </button>
                </div>

                {/* --- DELETE CONFIRMATION POPUP OVERLAY --- */}
                {memberToDelete !== null && (
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[2px] rounded-[20px] flex justify-center items-center z-[200] animate-fade-in" onClick={() => setMemberToDelete(null)}>
                    <div className="bg-[#ffffff] rounded-[16px] py-[30px] px-[25px] w-[85%] text-center shadow-[0_15px_35px_rgba(0,0,0,0.15)] animate-pop-in" onClick={(e) => e.stopPropagation()}>
                      <div className="bg-[#fff0f0] text-[#ff4d4f] w-[55px] h-[55px] rounded-full flex justify-center items-center text-[24px] mx-auto mb-[15px]">
                        <FaExclamationTriangle />
                      </div>
                      <h3 className="text-[18px] font-[700] text-[#333] m-0 mb-[10px]">Remove this member?</h3>
                      <p className="text-[13px] text-[#666] leading-[1.5] m-0 mb-[25px]">
                        Are you sure you want to remove <strong className="text-[#333]">{familyMembers[memberToDelete]?.famName}</strong> from your members list? You can add them again later.
                      </p>
                      <div className="flex gap-[15px]">
                        <button className="flex-1 bg-[#f0f2f5] text-[#555] border-none rounded-[8px] h-[42px] text-[14px] font-[600] cursor-pointer transition-all duration-200 hover:bg-[#e4e7ea]" onClick={() => setMemberToDelete(null)}>
                          Cancel
                        </button>
                        <button className="flex-1 bg-[#008080] text-[#ffffff] border-none rounded-[8px] h-[42px] text-[14px] font-[600] cursor-pointer transition-all duration-200 hover:bg-[#11a98c]" onClick={executeDeleteMember}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* STEP 6: ADD/EDIT FAMILY MEMBER FORM */}
            {loginStep === 'addFamilyMember' && (
              <div className="animate-slide-left">
                
                <div className="flex items-start gap-[15px] mb-[10px]">
                  <button className="bg-none border-none text-[18px] text-[#333] cursor-pointer py-[5px] transition-transform duration-200 hover:-translate-x-[3px]" onClick={() => setLoginStep('family')}>
                    <FaArrowLeft />
                  </button>
                  <div>
                    <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0">
                      {editIndex !== null ? 'Edit family member' : 'Add family members'}
                    </h2>
                    <p className="text-[13px] text-[#666] leading-[1.5] m-0">
                      Book healthcare services on their behalf
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#eef2f6] mb-[15px]"></div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Full Name</label>
                  <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[42px] px-[15px] bg-[#ffffff] transition-all duration-200 focus-within:border-[#008080]">
                    <FaRegUser className="text-[#555] text-[15px] mr-[12px]" />
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa]"
                      value={famName}
                      onChange={(e) => setFamName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-[15px]">
                  <div className="flex-1 mb-[12px]">
                    <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">DOB</label>
                    <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[42px] px-[15px] bg-[#ffffff] transition-all duration-200 focus-within:border-[#008080]">
                      <FaRegCalendarAlt className="text-[#555] text-[15px] mr-[12px]" />
                      <input 
                        type="text" 
                        placeholder="DD/MM/YYYY" 
                        className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa] w-full"
                        value={famDob}
                        onChange={(e) => setFamDob(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex-1 mb-[12px] relative">
                    <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Relation</label>
                    
                    <div className={`flex justify-between items-center border-[1px] rounded-[8px] h-[42px] px-[15px] text-[14px] cursor-pointer bg-[#ffffff] transition-all duration-200 hover:border-[#008080] ${showOtherRelation && isRelationDropdownOpen ? 'border-b-transparent rounded-b-none border-dashed border-[#e1e8ed]' : 'border-[#e1e8ed]'}`}
                         onClick={(e) => { e.stopPropagation(); setIsRelationDropdownOpen(!isRelationDropdownOpen); }}>
                      <span style={{ color: famRelation ? '#333' : '#aaa' }}>
                        {showOtherRelation ? 'Other' : (famRelation || 'Select')}
                      </span>
                      {isRelationDropdownOpen ? <FaChevronUp className="text-[10px] text-[#666]" /> : <FaChevronDown className="text-[10px] text-[#666]" />}
                    </div>
                    
                    {isRelationDropdownOpen && (
                      <div className="absolute top-[45px] left-0 w-full bg-[#ffffff] border-[1px] border-[#e1e8ed] rounded-[8px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-[100] pt-[5px] pb-[15px] animate-pop-in" onClick={(e) => e.stopPropagation()}>
                        <div className="px-[15px] py-[12px] text-[14px] text-[#333] cursor-pointer transition-all duration-200 hover:bg-[#f4f8fb]" onClick={() => selectRelation('Spouse')}>Spouse</div>
                        <div className="px-[15px] py-[12px] text-[14px] text-[#333] cursor-pointer transition-all duration-200 hover:bg-[#f4f8fb]" onClick={() => selectRelation('Parent')}>Parent</div>
                        <div className="px-[15px] py-[12px] text-[14px] text-[#333] cursor-pointer transition-all duration-200 hover:bg-[#f4f8fb]" onClick={() => selectRelation('Cousin')}>Cousin</div>
                        <div className="px-[15px] py-[12px] text-[14px] text-[#333] cursor-pointer transition-all duration-200 hover:bg-[#f4f8fb]" onClick={() => selectRelation('Child')}>Child</div>
                        
                        <div className="px-[15px] pt-[10px] pb-0">
                          <label className="text-[11px] text-[#666] block mb-[8px] font-[600]">Some other relation?</label>
                          <input 
                            type="text" 
                            placeholder="Mention relation" 
                            className="w-full box-border bg-[#f4f5f7] border-none rounded-[6px] py-[10px] px-[12px] text-[13px] outline-none text-[#333] focus:bg-[#ebeef1]"
                            value={showOtherRelation ? famRelation : ''}
                            onChange={(e) => {
                              setShowOtherRelation(true);
                              setFamRelation(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Gender</label>
                  <div className="flex gap-[10px]">
                    <button 
                      className={`flex-1 h-[42px] border-[1px] rounded-[8px] text-[14px] cursor-pointer transition-all duration-200 ${famGender === 'Male' ? 'bg-[#d1f4ec] border-[#16c8a6] text-[#008080] font-[600]' : 'bg-[#ffffff] border-[#e1e8ed] text-[#666] font-[500]'}`}
                      onClick={() => setFamGender('Male')}
                    >
                      Male
                    </button>
                    <button 
                      className={`flex-1 h-[42px] border-[1px] rounded-[8px] text-[14px] cursor-pointer transition-all duration-200 ${famGender === 'Female' ? 'bg-[#d1f4ec] border-[#16c8a6] text-[#008080] font-[600]' : 'bg-[#ffffff] border-[#e1e8ed] text-[#666] font-[500]'}`}
                      onClick={() => setFamGender('Female')}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Phone Number</label>
                  <div className="flex border-[1px] border-[#e1e8ed] rounded-[10px] overflow-hidden h-[42px] focus-within:border-[#008080] transition-colors">
                    <div className="flex items-center gap-[8px] px-[15px] bg-[#fafafa] border-r-[1px] border-[#e1e8ed] text-[14px] font-[500] text-[#333]">
                      <span>🇮🇳 (+91)</span>
                      <FaChevronDown className="text-[10px] text-[#666]" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter 10-digit number" 
                      className="flex-1 border-none px-[15px] text-[14px] outline-none text-[#333] placeholder-[#aaa] bg-transparent"
                      value={famPhone}
                      onChange={handleFamPhoneChange}
                    />
                  </div>
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-[700] text-[#333] mb-[8px]">Email</label>
                  <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[42px] px-[15px] bg-[#ffffff] transition-all duration-200 focus-within:border-[#008080]">
                    <FaRegEnvelope className="text-[#555] text-[15px] mr-[12px]" />
                    <input 
                      type="email" 
                      placeholder="user@gmail.com" 
                      className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa]"
                      value={famEmail}
                      onChange={(e) => setFamEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  className="mt-[10px] w-full bg-[#16c8a6] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[700] cursor-pointer transition-all duration-300 hover:bg-[#11a98c] disabled:bg-[#f0f2f5] disabled:text-[#a0aab2] disabled:cursor-not-allowed" 
                  onClick={handleSaveFamilyMember}
                  disabled={!isFamComplete}
                >
                  {editIndex !== null ? 'Save Changes' : 'Continue'}
                </button>

              </div>
            )}

            {/* STEP 7: SET LOCATION */}
            {loginStep === 'location' && (
              <div className="animate-slide-left">
                
                <div className="flex items-start gap-[15px] mb-[15px]">
                  <button className="bg-none border-none text-[18px] text-[#333] cursor-pointer py-[5px] transition-transform duration-200 hover:-translate-x-[3px]" onClick={() => setLoginStep('family')}>
                    <FaArrowLeft />
                  </button>
                  <div>
                    <h2 className="text-[24px] font-[700] text-[#1a1a1a] m-0">Set your location</h2>
                    <p className="text-[13px] text-[#666] leading-[1.5] m-0">
                      Find healthcare services available in your area
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#eef2f6] mb-[25px]"></div>

                <div className="flex items-center border-[1px] border-[#e1e8ed] rounded-[8px] h-[48px] px-[15px] bg-[#ffffff] transition-all duration-200 mb-[20px] focus-within:border-[#008080]">
                  <FaSearch className="text-[#888] text-[16px] mr-[12px]" />
                  <input 
                    type="text" 
                    placeholder="Search for your location/apartment...." 
                    className="flex-1 border-none outline-none text-[14px] text-[#333] bg-transparent placeholder-[#aaa]"
                    value={searchLocation}
                    onChange={handleLocationSearch}
                  />
                </div>

                <button className="flex items-center gap-[8px] bg-none border-none text-[#008080] text-[14px] font-[600] cursor-pointer p-0 transition-all duration-200 hover:text-[#11a98c]">
                  <FaCrosshairs className="text-[16px]" /> Use current location
                </button>

                {showLocationList && (
                  <div className="mt-[15px] animate-fade-in">
                    <div className="h-[6px] bg-[#f4f5f7] my-[20px] -mx-[35px]"></div>
                    {locationSuggestions.map((loc, index) => (
                      <div 
                        className="flex items-start py-[15px] border-b-[1px] border-[#eef2f6] cursor-pointer transition-all duration-200 last:border-b-0 hover:bg-[#fafffe] hover:rounded-[8px] hover:pl-[10px]" 
                        key={index}
                        onClick={() => selectLocation(loc.title)}
                      >
                        <div className="text-[#555] text-[16px] mr-[15px] mt-[2px]">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-[700] text-[#333] mb-[4px]">{loc.title}</span>
                          <span className="text-[12px] text-[#888]">{loc.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-[15px] mt-[50px]">
                  <button className="bg-none border-none text-[#555] text-[14px] font-[700] cursor-pointer hover:text-[#008080]" onClick={closeAndResetModal}>
                    Skip for now
                  </button>
                  <button 
                    className="w-full bg-[#16c8a6] text-[#ffffff] border-none rounded-[10px] h-[42px] text-[15px] font-[700] cursor-pointer transition-all duration-300 hover:bg-[#11a98c] disabled:bg-[#f0f2f5] disabled:text-[#a0aab2] disabled:cursor-not-allowed" 
                    onClick={closeAndResetModal}
                    disabled={searchLocation.trim() === ''}
                  >
                    Continue
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;