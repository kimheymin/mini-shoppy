import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiCart, BiUser } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import User from "./User";
import CartStatus from "../cart/CartStatus";

const NAVMENU_CLASS = "cursor-pointer hover:text-brand";
const NAVICON_CLASS = "text-4xl hover:text-brand";
export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  // const handleLogin = () => login();
  const handleLogout = () => {
    // window.location = "/";
    logout();
  };

  return (
    <>
      <header className="flex items-center justify-between h-24 p-5 my-2 ">
        {/* 메인로고  */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">MINISHOP</h1>
        </Link>
        {/* 메뉴 */}
        <ul className="flex justify-between gap-20">
          <Link to="/products" className={NAVMENU_CLASS}>
            ALL
          </Link>
          <Link
            to="/products"
            state={{ value: "상의" }}
            className={NAVMENU_CLASS}
          >
            상의
          </Link>
          <Link
            to="/products"
            state={{ value: "하의" }}
            className={NAVMENU_CLASS}
          >
            하의
          </Link>
          <Link
            to="/products"
            state={{ value: "원피스" }}
            className={NAVMENU_CLASS}
          >
            원피스
          </Link>
        </ul>
        {/* 아이콘 */}
        <div className="flex items-center gap-5">
          {user && (
            <>
              <Link to="/like">
                <BiHeart className={NAVICON_CLASS} />
              </Link>
              <Link to="/cart">
                <CartStatus />
              </Link>
              {user.isAdmin && (
                <Link to="/products/new">
                  <MdAddBox className={NAVICON_CLASS} />
                </Link>
              )}
              <User user={user} />
              {/* <button
                className="text-sm hover:text-zinc-400"
                onClick={handleLogout}
              >
                로그아웃
              </button> */}
            </>
          )}
          {!user && (
            <Link to="/login">
              <button>
                <BiUser className={NAVICON_CLASS} />
              </button>
              <div>
                <button>Google</button>
                <button>Github</button>
              </div>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
