import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const Chatbot = () => {
  const { setChatbot, login1, setlogin1, currentColor, handleClick, initialState } = useStateContext();
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  
  // Initialize messages with the initial message from the chatbot
  const [messages, setMessages] = useState([
    {
      message: "Hi , How can I assist you?",
      direction: 'incoming',
      sender: 'bot'
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    }
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);

    // Call fetch POST API
    try {
      const response = await fetch('http://127.0.0.1:5000/chatbot_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_question: newMessage.message }),
      });

      const data = await response.json();
      const botMessage = {
        message: data.response,  // Assuming the API returns a reply in a field called 'reply'
        direction: 'incoming',
        sender: 'bot'
      };

      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setIsTyping(false);
  };

  return (
 <div
  className="nav-item absolute right-4 bg-[#1d2041] p-0 rounded-xl w-[420px] overflow-hidden shadow-lg"
  style={{ marginTop: "150px" }}
>
  {/* Header */}
  <div className="w-full bg-[#2d325c] flex items-center justify-between px-4 py-3">
    <p className="font-semibold text-lg text-white">AI Assistant</p>
    <button
      type="button"
      onClick={() => setChatbot(false)}
      className="flex items-center justify-center text-2xl text-gray-400 hover:text-red-500 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 transition"
      aria-label="Close"
    >
      <MdOutlineCancel />
    </button>
  </div>

  {/* Chatbot Body */}
  <div className="px-0 pt-0 pb-0">
    <MainContainer style={{ height: "500px", width: "100%" }}>
      <ChatContainer>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={isTyping ? <TypingIndicator content="AI Assistant is typing" /> : null}
        >
          {messages.map((message, i) => (
            <Message key={i} model={message} />
          ))}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  </div>
</div>

  );
};

export default Chatbot;