import React from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiCart, BiUser } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import User from "./User";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  // const handleLogin = () => login();
  const handleLogout = () => logout();

  return (
    <>
      <header className="flex items-center justify-between h-24 p-5 my-2">
        <Link to="/">
          <h1 className="text-4xl font-semibold">MINISHOP</h1>
        </Link>
        <div className="flex items-center gap-5">
          <Link to="/like">
            <BiHeart className="text-4xl hover:text-orange-500" />
          </Link>
          <Link to="/cart">
            <BiCart className="text-4xl hover:text-orange-500" />
          </Link>
          {user && user.isAdmin && (
            <Link to="/products/new">
              <MdAddBox className="text-4xl hover:text-orange-500" />
            </Link>
          )}
          {user && <User user={user} />}
          {!user && (
            <Link to="/login">
              <button>
                <BiUser className="text-4xl hover:text-orange-500" />
              </button>
            </Link>
          )}
          {user && (
            <button className="hover:text-zinc-400" onClick={handleLogout}>
              로그아웃
            </button>
          )}
        </div>
      </header>
      <nav className="mb-4 p-4 border border-zinc-300">
        <ul className="flex justify-center gap-10 ">
          <li>ALL</li>
          <li>상의</li>
          <li>하의</li>
          <li>원피스</li>
        </ul>
      </nav>
    </>
  );
}
