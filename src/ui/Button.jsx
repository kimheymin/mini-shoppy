import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="text-white bg-brand h-10 m-2 p-1.5 rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
