import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import { Mistral } from '@mistralai/mistralai';

// Load the API key from environment variables
const apiKey = process.env.MISTRAL_API_KEY;
// const apiKey = '';

// Initialize the Mistral client
const client = new Mistral({ apiKey: apiKey });

const ChatbotScreen: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");

    try {
      const chatResponse = await client.agents.complete({
        agentId: "ag:305d2485:20250114:tharikida-ui:9ae94d61",
        messages: [{ role: 'user', content: inputValue }],
      });

      if (chatResponse.choices && chatResponse.choices.length > 0) {
        const botMessage = chatResponse.choices[0].message.content;
        const sanitizedBotMessage = typeof botMessage === 'string' ? botMessage : 'Sorry, I encountered an error. Please try again.';

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: sanitizedBotMessage, sender: "bot" },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, I encountered an error. Please try again.", sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error('Error making API call:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, I encountered an error. Please try again.", sender: "bot" },
      ]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {isExpanded ? (
        <div style={{ width: "300px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#f0f0f0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
            <span style={{ fontWeight: "bold" }}>Tharikida UI Chatbot</span>
            <FaTimes style={{ cursor: "pointer" }} onClick={handleToggle} />
          </div>
          <div style={{ padding: "10px", maxHeight: "300px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: "10px", textAlign: msg.sender === "user" ? "right" : "left" }}>
                <span style={{ backgroundColor: msg.sender === "user" ? "#dcf8c6" : "#f1f0f0", padding: "10px", borderRadius: "8px", display: "inline-block" }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              style={{ flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "4px", marginRight: "10px" }}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleToggle} style={{ backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "50%", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 10px rgba(0,0,0,0.1)", cursor: "pointer" }}>
          <FaCommentDots size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatbotScreen;
