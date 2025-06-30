import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

type Message = {
  text: string;
  sender: "user" | "assistant";
};

type ChatCompletionResponse = {
  choices: {
    message: {
      content: string;
    };
  }[];
};

// Helper to parse markdown for bold and code blocks
function renderBotMessage(text: string) {
  // Split into code blocks and normal text
  const codeBlockRegex = /```([\w]*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;
  const elements: React.ReactNode[] = [];
  let key = 0;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      // Text before code block
      const before = text.slice(lastIndex, match.index);
      elements.push(renderMarkdownInline(before, key++));
    }
    // Code block
    const code = match[2];
    elements.push(
      <div key={key++} style={{ position: "relative", margin: "12px 0" }}>
        <pre
          style={{
            background: "#e0f2f1",
            color: "#064e3b",
            borderRadius: 8,
            padding: "14px 12px",
            fontSize: 14,
            overflowX: "auto",
            border: "1px solid #7dd3ae",
            margin: 0,
          }}
        >
          <code>{code}</code>
        </pre>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "#059669",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "2px 10px",
            fontSize: 12,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Copy
        </button>
      </div>
    );
    lastIndex = codeBlockRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    elements.push(renderMarkdownInline(text.slice(lastIndex), key++));
  }
  return elements;
}

// Helper to render inline markdown (bold, inline code)
function renderMarkdownInline(text: string, key: number) {
  // Bold: **text** or __text__
  // Inline code: `code`
  const parts = [];
  let last = 0;
  const boldRegex = /\*\*(.*?)\*\*|__(.*?)__/g;
  let match;
  let idx = 0;
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const boldText = match[1] || match[2];
    parts.push(<strong key={key + "-b" + idx++}>{boldText}</strong>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  // Now handle inline code in each part
  return parts.map((part, i) => {
    if (typeof part !== "string") return part;
    const codeRegex = /`([^`]+)`/g;
    const codeParts = [];
    let lastCode = 0;
    let codeMatch;
    let codeIdx = 0;
    while ((codeMatch = codeRegex.exec(part)) !== null) {
      if (codeMatch.index > lastCode) {
        codeParts.push(part.slice(lastCode, codeMatch.index));
      }
      codeParts.push(
        <code
          key={key + "-c" + i + "-" + codeIdx++}
          style={{
            background: "#e0f2f1",
            color: "#166534",
            borderRadius: 4,
            padding: "2px 5px",
            fontSize: 13,
          }}
        >
          {codeMatch[1]}
        </code>
      );
      lastCode = codeMatch.index + codeMatch[0].length;
    }
    if (lastCode < part.length) codeParts.push(part.slice(lastCode));
    return <React.Fragment key={key + "-f" + i}>{codeParts}</React.Fragment>;
  });
}

const ChatbotScreen: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const newMessages: Message[] = [
      ...messages,
      { text: inputValue, sender: "user" },
    ];
    setMessages(newMessages);
    setInputValue("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((msg) => ({
            role: msg.sender,
            content: msg.text,
          })),
        }),
      });

      const data: ChatCompletionResponse = await response.json();

      if (data.choices && data.choices.length > 0) {
        const botMessage = data.choices[0].message.content;
        const sanitizedBotMessage =
          typeof botMessage === "string"
            ? botMessage
            : "Sorry, I encountered an error. Please try again.";

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: sanitizedBotMessage, sender: "assistant" },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, I encountered an error. Please try again.",
            sender: "assistant",
          },
        ]);
      }
    } catch (error) {
      console.error("Error making API call:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, I encountered an error. Please try again.",
          sender: "assistant",
        },
      ]);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      {isExpanded ? (
        <div
          style={{
            width: "340px",
            maxWidth: "95vw",
            border: "none",
            borderRadius: "18px",
            boxShadow: "0 8px 32px 0 rgba(34, 197, 94, 0.25)",
            background: "linear-gradient(135deg, #e6f9e6 0%, #b6f2c6 100%)",
            overflow: "hidden",
            animation: "fadeIn 0.3s",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              background: "linear-gradient(90deg, #059669 0%, #166534 100%)",
              color: "#fff",
              borderTopLeftRadius: "18px",
              borderTopRightRadius: "18px",
              boxShadow: "0 2px 8px rgba(34,197,94,0.08)",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaCommentDots style={{ marginRight: 8, fontSize: 20 }} />{" "}
              Tharikida UI Chatbot
            </span>
            <FaTimes
              style={{
                cursor: "pointer",
                fontSize: 20,
                transition: "color 0.2s",
              }}
              onClick={handleToggle}
              title="Close"
              onMouseOver={(e) => (e.currentTarget.style.color = "#bbf7d0")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            />
          </div>
          <div
            style={{
              padding: "16px 12px 12px 12px",
              maxHeight: "340px",
              minHeight: "120px",
              background: "rgba(236, 253, 245, 0.7)",
              overflowY: "auto",
              transition: "background 0.2s",
            }}
          >
            {messages.length === 0 && (
              <div
                style={{
                  color: "#166534", // dark green for better contrast
                  textAlign: "center",
                  marginTop: 40,
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                }}
              >
                Say hi! 👋 How can I help you today?
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <span
                  style={{
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(90deg, #059669 0%, #166534 100%)"
                        : "#b6e4c6",
                    color: msg.sender === "user" ? "#fff" : "#064e3b",
                    padding: "10px 16px",
                    borderRadius:
                      msg.sender === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    boxShadow:
                      msg.sender === "user"
                        ? "0 2px 8px rgba(34,197,94,0.10)"
                        : "0 2px 8px rgba(16,185,129,0.10)",
                    border:
                      msg.sender === "assistant"
                        ? "1px solid #7dd3ae"
                        : undefined,
                    fontSize: 15,
                    maxWidth: msg.sender === "assistant" ? "100%" : "80%",
                    width: msg.sender === "assistant" ? "100%" : undefined,
                    alignSelf:
                      msg.sender === "assistant" ? "stretch" : undefined,
                    wordBreak: "break-word",
                    transition: "background 0.2s, color 0.2s",
                    display: "block",
                  }}
                >
                  {msg.sender === "assistant"
                    ? renderBotMessage(msg.text)
                    : msg.text}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 12px",
              background: "#e6f9e6",
              borderTop: "1px solid #bbf7d0",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              style={{
                flex: 1,
                padding: "12px 14px",
                border: "1px solid #4ade80",
                borderRadius: "8px",
                marginRight: "10px",
                fontSize: 15,
                outline: "none",
                background: "#fff",
                boxShadow: "0 1px 2px rgba(34,197,94,0.04)",
                transition: "border 0.2s",
              }}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: "12px 18px",
                background: "linear-gradient(90deg, #059669 0%, #166534 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 15,
                boxShadow: "0 2px 8px rgba(34,197,94,0.10)",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#166534")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #059669 0%, #166534 100%)")
              }
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleToggle}
          style={{
            background: "linear-gradient(135deg, #059669 0%, #166534 100%)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(34,197,94,0.18)",
            cursor: "pointer",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          title="Open Chatbot"
          onMouseOver={(e) => (e.currentTarget.style.background = "#166534")}
          onMouseOut={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #059669 0%, #166534 100%)")
          }
        >
          <FaCommentDots size={28} />
        </button>
      )}
      {/* Keyframes for fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ChatbotScreen;
