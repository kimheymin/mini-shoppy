import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="bg-brand m-2 p-1.5 rounded-lg" onClick={onClick}>
      {text}
    </button>
  );
}
