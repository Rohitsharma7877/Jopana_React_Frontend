import React, { useState, useRef, useEffect } from 'react';
import { 
  FaPaperPlane, 
  FaCircle, 
  FaBriefcaseMedical,
  FaBolt,
  FaMinus,
  FaTimes
} from 'react-icons/fa';

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import doctorConsultImg from '../assets/Jimg13.jpeg';
import physioSessionImg from '../assets/Jimg14.jpeg';
import neurologyImg from '../assets/Jimg15.jpeg';
// IMPORTANT: Import the white logo for the AI Bot
import jopanaLogo from '../assets/LogoWhite.png'; 

// --- MOCK DATA ---
const CARE_OPTIONS = [
  {
    id: 1,
    title: 'Doctor Consultation',
    desc: 'General physician video call for headache assessment.',
    img: doctorConsultImg, 
    tag: 'Available in 15 min',
    icon: <FaBriefcaseMedical />
  },
  {
    id: 2,
    title: 'Physiotherapy Session',
    desc: 'Neck & shoulder tension relief at home.',
    img: physioSessionImg, 
    tag: 'Next slot: Today 4 PM',
    icon: <FaBolt />
  },
  {
    id: 3,
    title: 'Neurology Specialist',
    desc: 'Expert consultation for recurring headaches.',
    img: neurologyImg, 
    tag: 'Available Tomorrow',
    icon: <FaBolt />
  }
];

const MOCK_AI_RESPONSE = [
  { sender: 'ai', text: "Hello! I'm your JOPANA Health AI. I can help analyze your symptoms, suggest care options, and book appointments.\n\nHow are you feeling today?" },
  { sender: 'user', text: "I have had a headache since morning." },
  { sender: 'ai', text: "I'm sorry to hear that. To better understand your condition, I have a few follow-up questions:\n\n1. How severe is the headache on a scale of 1-10?\n2. Do you experience nausea or sensitivity to light?\n3. Have you taken any medication so far?" },
  { sender: 'user', text: "It's about a 6. I do feel some light sensitivity but no nausea." },
  { sender: 'ai', text: "Based on your symptoms — moderate headache (6/10) with photosensitivity — this could indicate a tension-type headache or a mild migraine episode.\n\nImmediate recommendations:\n• Stay hydrated and rest in a dimly lit room.\n• Consider a cold compress on your forehead.\n• Avoid screens for at least 30 minutes.\n\nSuggested care options:", hasCards: true, hasSupport: true }
];

const AIBoat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpenBot = () => setIsOpen(true);
    window.addEventListener('openAIBot', handleOpenBot);
    return () => window.removeEventListener('openAIBot', handleOpenBot);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    const userMsg = { sender: 'user', text: inputText };
    setMessages([...messages, userMsg]);
    setInputText('');

    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([userMsg, ...MOCK_AI_RESPONSE]);
      }, 800);
    }
  };

  const handleMinimize = () => setIsOpen(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setMessages([]), 300);
  };

  return (
    <>
      <style>{`
        .custom-chat-scroll::-webkit-scrollbar { width: 6px; }
        .custom-chat-scroll::-webkit-scrollbar-thumb { background: #cbd6e2; border-radius: 10px; }
        .custom-card-scroll::-webkit-scrollbar { height: 4px; }
        .custom-card-scroll::-webkit-scrollbar-thumb { background: #e1e8ed; border-radius: 10px; }
      `}</style>

      {/* --- FLOATING ACTION BUTTON --- */}
      <button 
        className={`fixed bottom-[30px] right-[30px] w-[65px] h-[65px] bg-gradient-to-br from-[#16c8a6] to-[#0e8573] border-none rounded-full shadow-[0_10px_25px_rgba(22,200,166,0.4)] cursor-pointer z-[99999] flex justify-center items-center transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] max-sm:bottom-[15px] max-sm:right-[15px] hover:scale-110 ${isOpen ? 'opacity-0 pointer-events-none scale-50' : 'opacity-100'}`} 
        onClick={() => setIsOpen(true)}
      >
        {/* REPLACED ROBOT ICON WITH YOUR WHITE LOGO */}
        <img src={jopanaLogo} alt="Jopana AI" className="w-[30px] h-[30px] object-contain" />
      </button>

      {/* --- FLOATING CHAT WIDGET --- */}
      <div 
        className={`fixed bottom-[30px] right-[30px] w-[400px] h-[650px] max-h-[85vh] bg-[#fcfdfd] rounded-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-[99999] flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-bottom-right max-sm:w-full max-sm:h-full max-sm:max-h-[100vh] max-sm:bottom-0 max-sm:right-0 max-sm:rounded-none ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0 scale-100' : 'opacity-0 pointer-events-none translate-y-[20px] scale-95'}`}
      >
        
        {/* Widget Header */}
        <div className="bg-[#0f8574] text-white py-[15px] px-[20px] flex justify-between items-center shrink-0">
          <div className="text-[15px] font-[700] flex items-center gap-[10px]">
            {/* Added your logo to the header too! */}
            <img src={jopanaLogo} alt="AI" className="h-[18px] w-auto object-contain" />
            JOPANA AI Assistant
          </div>
          <div className="flex gap-[15px]">
            <button onClick={handleMinimize} title="Minimize" className="bg-transparent border-none text-white text-[14px] cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100 hover:scale-125 flex items-center justify-center"><FaMinus /></button>
            <button onClick={handleClose} title="End Chat" className="bg-transparent border-none text-white text-[14px] cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100 hover:scale-125 flex items-center justify-center"><FaTimes /></button>
          </div>
        </div>

        {/* Scrollable Chat Area */}
        <div className="flex-1 flex flex-col overflow-y-auto relative custom-chat-scroll">
          
          {messages.length === 0 && (
            <div className="bg-gradient-to-br from-[#0e8573] to-[#16c8a6] rounded-[12px] p-[20px] text-white m-[15px] relative overflow-hidden shrink-0">
              <div className="relative z-10">
                <h2 className="m-0 mb-[5px] text-[18px]">AI Health Assistant</h2>
                <p className="m-0 mb-[15px] text-[12px] leading-[1.4] text-[#e0f2ef]">Describe your symptoms and get care recommendations instantly.</p>
                <button className="bg-white text-[#0f8574] border-none px-[15px] py-[8px] rounded-[6px] font-[700] text-[12px] cursor-pointer">Start Health Check</button>
              </div>
            </div>
          )}

          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col justify-center items-center text-center p-[20px]">
              <div className="w-[80px] h-[80px] bg-[#40cbbc] rounded-full mb-[15px] shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.1)] flex justify-center items-center">
                 {/* Placed logo inside the welcome avatar circle */}
                 <img src={jopanaLogo} alt="AI" className="h-[40px] w-auto object-contain opacity-80" />
              </div>
              <h3 className="text-[18px] text-[#333333] m-0 mb-[5px]">Hi Sarah!</h3>
              <p className="text-[13px] text-[#888888] m-0">How can I help you today?</p>
            </div>
          ) : (
            <div className="p-[20px] flex flex-col gap-[20px]">
              {messages.map((msg, index) => (
                <div className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start items-start gap-[10px]'}`} key={index}>
                  {msg.sender === 'ai' && (
                    <div className="text-[#40cbbc] text-[12px] mt-[5px] shrink-0">
                      <FaCircle />
                    </div>
                  )}

                  <div className="max-w-[85%]">
                    <div className={`text-[13px] leading-[1.5] ${msg.sender === 'user' ? 'bg-[#f0f2f5] text-[#333333] py-[10px] px-[15px] rounded-[16px_16px_0_16px]' : 'bg-transparent text-[#333333] p-0'}`}>
                      {msg.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>{line}<br /></React.Fragment>
                      ))}
                    </div>

                    {msg.hasCards && (
                      <div className="flex gap-[10px] mt-[15px] overflow-x-auto pb-[10px] w-[280px] custom-card-scroll">
                        {CARE_OPTIONS.map((card) => (
                          <div className="w-[200px] bg-white border-[1px] border-[#eef2f6] rounded-[10px] overflow-hidden shrink-0" key={card.id}>
                            <div className="relative h-[90px]">
                              <span className="absolute top-[8px] right-[8px] bg-[rgba(255,255,255,0.9)] text-[#16c8a6] text-[9px] font-[700] px-[6px] py-[4px] rounded-[10px] z-10">{card.tag}</span>
                              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-[12px]">
                              <h4 className="m-0 mb-[5px] text-[13px] text-[#333333]">{card.title}</h4>
                              <p className="m-0 mb-[10px] text-[11px] text-[#888888] leading-[1.3]">{card.desc}</p>
                              <button className="w-full bg-[#16c8a6] text-white border-none rounded-[6px] p-[8px] text-[12px] font-[600] cursor-pointer transition-colors hover:bg-[#11a98c]">Book Now</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {msg.hasSupport && (
                      <div className="mt-[15px] bg-[#fcfdfd] border-[1px] border-[#eef2f6] rounded-[10px] p-[15px]">
                        <div className="flex items-center gap-[8px] mb-[5px]">
                          <div className="w-[8px] h-[8px] bg-[#ff4d4f] rounded-full shrink-0"></div>
                          <h4 className="m-0 text-[13px] text-[#333333]">Need a real person?</h4>
                        </div>
                        <p className="m-0 mb-[15px] text-[11px] text-[#666666]">Our team is available 24/7.</p>
                        <div className="flex gap-[10px]">
                          <button className="flex-1 py-[8px] text-[11px] font-[600] rounded-[6px] cursor-pointer text-center bg-transparent text-[#16c8a6] border-[1px] border-[#16c8a6] transition-colors hover:bg-[#eafaf6]">Agent</button>
                          <button className="flex-1 py-[8px] text-[11px] font-[600] rounded-[6px] cursor-pointer text-center bg-[#e53935] text-white border-none transition-colors hover:bg-[#d32f2f]">Priority</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <form className="p-[15px] bg-white border-t-[1px] border-[#eef2f6] shrink-0" onSubmit={handleSendMessage}>
          <div className="flex items-center border-[1px] border-[#dcdfe3] rounded-[30px] py-[4px] pr-[8px] pl-[20px] bg-white focus-within:border-[#16c8a6] transition-colors">
            <input 
              type="text" 
              placeholder={messages.length === 0 ? "Hi Jopana..." : "Type your message..."}
              className="flex-1 border-none outline-none text-[13px] text-[#333333] bg-transparent"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-[#1a1a1a] text-white border-none w-[32px] h-[32px] rounded-full flex justify-center items-center cursor-pointer text-[12px] transition-colors disabled:bg-[#cccccc] disabled:cursor-not-allowed hover:bg-[#000000] disabled:hover:bg-[#cccccc]" 
              disabled={!inputText.trim()}
            >
              <FaPaperPlane className="-ml-[2px]" />
            </button>
          </div>
        </form>

      </div>
    </>
  );
};

export default AIBoat;