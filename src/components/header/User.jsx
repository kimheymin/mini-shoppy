import React from "react";

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div>
      <img
        className="w-11 h-11 rounded-full m-auto hover:cursor-pointer hidden md:block"
        src={photoURL}
        alt={displayName}
      />
      <span className="text-sm font-bold md:text-md">{displayName}</span> 님
    </div>
  );
}
