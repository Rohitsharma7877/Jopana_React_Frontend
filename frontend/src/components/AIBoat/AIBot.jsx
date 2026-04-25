import React, { useState, useRef, useEffect } from 'react';
import './AIBot.css';
import { 
  FaPaperPlane, 
  FaCircle, 
  FaRegComments, 
  FaBriefcaseMedical,
  FaBolt,
  FaRobot,
  FaMinus,
  FaTimes
} from 'react-icons/fa';

// --- MOCK DATA ---
const CARE_OPTIONS = [
  {
    id: 1,
    title: 'Doctor Consultation',
    desc: 'General physician video call for headache assessment.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    tag: 'Available in 15 min',
    icon: <FaBriefcaseMedical />
  },
  {
    id: 2,
    title: 'Physiotherapy Session',
    desc: 'Neck & shoulder tension relief at home.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80',
    tag: 'Next slot: Today 4 PM',
    icon: <FaBolt />
  },
  {
    id: 3,
    title: 'Neurology Specialist',
    desc: 'Expert consultation for recurring headaches.',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=300&q=80',
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
  const [isOpen, setIsOpen] = useState(false); // Controls if the widget is visible
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

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

  // Minimize keeps the chat history
  const handleMinimize = () => setIsOpen(false);

  // Close completely wipes the chat history and starts fresh next time
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setMessages([]), 300); // Clear after animation finishes
  };

  return (
    <>
      {/* --- FLOATING ACTION BUTTON --- */}
      <button 
        className={`ai-fab-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
      >
        <FaRobot className="ai-fab-icon" />
      </button>

      {/* --- FLOATING CHAT WIDGET --- */}
      <div className={`ai-widget-container ${isOpen ? 'open' : ''}`}>
        
        {/* Widget Header with Minimize and Close */}
        <div className="ai-widget-header">
          <div className="ai-widget-title">
            <FaRobot /> JOPANA AI Assistant
          </div>
          <div className="ai-widget-actions">
            <button onClick={handleMinimize} title="Minimize"><FaMinus /></button>
            <button onClick={handleClose} title="End Chat"><FaTimes /></button>
          </div>
        </div>

        {/* Scrollable Chat Area */}
        <div className="chat-interface">
          
          {/* Top Banner (Only show when chat is empty to save space) */}
          {messages.length === 0 && (
            <div className="ai-banner">
              <div className="ai-banner-content">
                <h2>AI Health Assistant</h2>
                <p>Describe your symptoms and get care recommendations instantly.</p>
                <button className="banner-btn">Start Health Check</button>
              </div>
            </div>
          )}

          {/* Welcome Screen OR Active Chat */}
          {messages.length === 0 ? (
            <div className="chat-welcome-screen">
              <div className="welcome-avatar"></div>
              <h3>Hi Sarah!</h3>
              <p>How can I help you today?</p>
            </div>
          ) : (
            <div className="chat-history">
              {messages.map((msg, index) => (
                <div className={`chat-message-row ${msg.sender === 'user' ? 'user-row' : 'ai-row'}`} key={index}>
                  {msg.sender === 'ai' && (
                    <div className="ai-dot-avatar">
                      <FaCircle />
                    </div>
                  )}

                  <div className="message-content">
                    <div className={`chat-bubble ${msg.sender}`}>
                      {msg.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>{line}<br /></React.Fragment>
                      ))}
                    </div>

                    {msg.hasCards && (
                      <div className="ai-cards-container">
                        {CARE_OPTIONS.map((card) => (
                          <div className="ai-care-card" key={card.id}>
                            <div className="card-img-wrapper">
                              <span className="card-tag">{card.tag}</span>
                              <img src={card.img} alt={card.title} />
                            </div>
                            <div className="card-body">
                              <h4>{card.title}</h4>
                              <p>{card.desc}</p>
                              <button className="card-book-btn">Book Now</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {msg.hasSupport && (
                      <div className="ai-support-box">
                        <div className="support-header">
                          <div className="red-dot"></div>
                          <h4>Need a real person?</h4>
                        </div>
                        <p>Our team is available 24/7.</p>
                        <div className="support-actions">
                          <button className="talk-agent-btn">Agent</button>
                          <button className="priority-help-btn">Priority</button>
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
        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder={messages.length === 0 ? "Hi Jopana..." : "Type your message..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="send-btn" disabled={!inputText.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </form>

      </div>
    </>
  );
};

export default AIBoat;