import React from "react";

export default function LoginButton({ icon, name, onClick }) {
  return (
    <a
      className="flex items-center justify-center m-4 p-3 font-semibold  bg-zinc-700 text-white rounded-md 
    hover:cursor-pointer hover:bg-orange-500"
      onClick={onClick}
      id={name}
    >
      <span className="mr-2">{icon}</span>
      <span>{name} 로그인</span>
    </a>
  );
}
