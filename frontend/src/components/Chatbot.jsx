import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Chatbot.css';

const API_URL = 'http://localhost:5000/api';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.includes('/play-school')) return 'play-school';
    if (path.includes('/pre-primary')) return 'pre-primary';
    if (path.includes('/icse-primary')) return 'icse-primary';
    if (path.includes('/icse-high')) return 'icse-high';
    if (path.includes('/high-school')) return 'high-school';
    if (path.includes('/pu-college')) return 'pu-college';
    return 'main';
  };

  useEffect(() => {
    if (isOpen && !conversationId) {
      initializeConversation();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const initializeConversation = async () => {
    try {
      setError(null);
      const section = getCurrentSection();
      console.log('Initializing conversation for section:', section);
      
      const response = await axios.post(`${API_URL}/chatbot/conversation`, {
        section
      });
      
      console.log('Conversation created:', response.data);
      setConversationId(response.data.conversationId);
      
      setMessages([
        {
          sender: 'bot',
          message: 'Hello! Welcome to S. Cadambi Education Center. How can I help you today?',
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Failed to initialize conversation:', error);
      setError('Unable to connect to chatbot service. Please check if the server is running.');
      setMessages([
        {
          sender: 'bot',
          message: 'Sorry, I\'m having trouble connecting. Please contact us at support@sunsys.in',
          timestamp: new Date()
        }
      ]);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    if (!conversationId) {
      setError('Conversation not initialized. Please try reopening the chatbot.');
      return;
    }

    const userMessage = {
      sender: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setError(null);

    try {
      const section = getCurrentSection();
      console.log('Sending message:', inputMessage, 'to section:', section);
      
      const response = await axios.post(`${API_URL}/chatbot/message`, {
        conversationId,
        message: inputMessage,
        section
      });

      console.log('Bot response:', response.data);

      setTimeout(() => {
        const botMessage = {
          sender: 'bot',
          message: response.data.botResponse,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        sender: 'bot',
        message: 'Sorry, I encountered an error. Please try again or contact us at support@sunsys.in',
        timestamp: new Date()
      }]);
      setError('Failed to send message. Please check your connection.');
    }
  };

  const handleQuickQuery = (query) => {
    setInputMessage(query);
    // Auto-submit after a brief delay
    setTimeout(() => {
      const form = document.querySelector('.chatbot-input-form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-header-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3>S. Cadambi Assistant</h3>
                <p>Online • Typically replies instantly</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="chatbot-error">
              <span>⚠️ {error}</span>
            </div>
          )}

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">
                  {msg.message.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.message.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="message-time">
                  {new Date(msg.timestamp).toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="quick-queries">
              <button onClick={() => handleQuickQuery('Tell me about admissions')}>
                📚 Admissions
              </button>
              <button onClick={() => handleQuickQuery('What are your facilities?')}>
                🏫 Facilities
              </button>
              <button onClick={() => handleQuickQuery('School timings')}>
                🕐 Timings
              </button>
              <button onClick={() => handleQuickQuery('Contact information')}>
                📞 Contact
              </button>
            </div>
          )}

          <form onSubmit={sendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputMessage.trim() || !conversationId}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;