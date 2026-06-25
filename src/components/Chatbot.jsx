import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const QA_DATA = {
  "¿Qué es la Ventanilla Digital?": "Es la plataforma oficial del Gobierno de Honduras donde puedes encontrar y realizar tus trámites gubernamentales de forma rápida, segura y transparente.",
  "¿Cómo busco un trámite?": "Puedes usar la barra de búsqueda en la página de inicio o ir a la sección 'Trámites' para filtrar por categoría o institución.",
  "Horarios de atención": "La plataforma está disponible 24/7 para consultas. Sin embargo, las gestiones de las instituciones se procesan en horario laboral de 8:00 AM a 4:00 PM."
};

const OPTIONS = Object.keys(QA_DATA);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy el asistente virtual de la Ventanilla Digital. ¿En qué te puedo ayudar hoy?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (option) => {
    const userMsg = { id: Date.now(), text: option, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    
    // Simulate thinking delay
    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, text: QA_DATA[option], sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: "Gracias por tu mensaje. Actualmente estoy en fase de prueba y respondo mejor a las opciones predeterminadas. ¿Te puedo ayudar con algo más?", 
        sender: "bot" 
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="chatbot-container">
      {/* Ventana del Chatbot */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="chatbot-title">Asistente Virtual</h3>
                <p className="chatbot-status">En línea</p>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Cerrar chat">
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="message-icon bot-icon">
                    <Bot size={14} />
                  </div>
                )}
                <div className="message-bubble">
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="message-icon user-icon">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}
            
            {/* Mostrar opciones si el último mensaje es del bot */}
            {messages[messages.length - 1].sender === 'bot' && (
              <div className="chatbot-options">
                {OPTIONS.map((opt, i) => (
                  <button key={i} className="chatbot-option-btn" onClick={() => handleOptionClick(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Escribe tu mensaje..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputValue.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Botón flotante Toggle */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir asistente"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
