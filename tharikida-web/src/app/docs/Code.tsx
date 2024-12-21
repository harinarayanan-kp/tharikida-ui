import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const Code = (props: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (props.children) {
      navigator.clipboard.writeText(props.children.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied status after 2 seconds
    }
  };

  return (
    <div
      style={{
        width: "fit-content",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        fontFamily: "monospace",
        position: "relative",
        display: "flex",
        gap: 20,
      }}
    >
      <pre style={{ margin: 0, overflowX: "auto" }}>{props.children}</pre>
      <button
        onClick={handleCopy}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "12px",
          fontFamily: "monospace",
          height: "fit-content",
          transition: "0.3s ease",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Code;
