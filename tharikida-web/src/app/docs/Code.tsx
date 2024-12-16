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
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        fontFamily: "monospace",
        position: "relative",
      }}
    >
      <pre style={{ margin: 0, overflowX: "auto" }}>{props.children}</pre>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Code;
