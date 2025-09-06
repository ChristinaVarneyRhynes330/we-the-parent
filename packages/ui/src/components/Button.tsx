import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      style={{ padding: "0.5rem 1rem", background: "#007acc", color: "#fff", border: "none", borderRadius: "4px" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
