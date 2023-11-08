import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useAuthContext } from "../../context/AuthContext";

export default function User({ user: { displayName, photoURL, isAdmin } }) {
  const { logout } = useAuthContext();
  const [dropdown, setDropDown] = useState(false);

  const handleLogout = () => {
    logout();
  };
  const handleShowUserInfo = () => setDropDown(!dropdown);

  return (
    <div>
      <img
        className="relative w-11 h-11 rounded-full m-auto hover:cursor-pointer"
        src={photoURL}
        alt={displayName}
        onClick={handleShowUserInfo}
      />

      <div
        className={`absolute md:right-10 z-10 text-center text-md p-3 bg-gray-200 ${
          dropdown ? "visible" : "hidden"
        }`}
      >
        {isAdmin && <p className="text-red-600 pt-2">Admin 관리자</p>}
        <span className="font-bold ">{displayName}</span> 님 환영해요!
        <div className="m-1 text-gray-800">
          {isAdmin && (
            <Link to="/products/new">
              <Button text={"상품등록"} />
            </Link>
          )}
          <Button text={"로그아웃"} onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}
