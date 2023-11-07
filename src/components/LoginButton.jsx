import React from "react";

export default function LoginButton({ icon, bg, text, onClick }) {
  // const handleClick = () => {
  //   console.log("a");
  // };
  return (
    <a
      className="flex items-center justify-center m-4 p-3 font-semibold  bg-zinc-700 text-white rounded-md 
    hover:cursor-pointer hover:bg-orange-500"
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
