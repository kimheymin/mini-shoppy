import React from "react";

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div>
      <img
        className="w-11 h-11 rounded-full m-auto "
        src={photoURL}
        alt={displayName}
      />
      {/* <span className="text-sm">{displayName} 님</span> */}
    </div>
  );
}
