import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import User from "./User";
import CartStatus from "../cart/CartStatus";

const NAVMENU_CLASS = "cursor-pointer hover:text-brand";
const NAVICON_CLASS = "text-4xl hover:text-brand";
export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  const handleLogin = () => login();
  const handleLogout = () => logout();

  return (
    <>
      <header className="flex items-center justify-between p-5">
        {/* 메인로고  */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">MINISHOP</h1>
        </Link>

        {/* 아이콘 */}
        <div className="flex items-center gap-5">
          {user && (
            <>
              <Link to="/cart">
                <CartStatus />
              </Link>
              {user.isAdmin && (
                <Link to="/products/new">
                  <MdAddBox className={NAVICON_CLASS} />
                </Link>
              )}
              <User user={user} />
              <button
                className="text-sm hover:text-zinc-400"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </>
          )}
          {!user && (
            <button>
              <BiUser className={NAVICON_CLASS} onClick={handleLogin} />
            </button>
          )}
        </div>
      </header>

      <div className="flex items-center justify-center">
        {/* 메뉴 */}
        <ul className="flex m-3 gap-20">
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
      </div>
    </>
  );
}
