import React from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiCart } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between h-24 p-5 my-2">
        <Link to="/">
          <h1 className="text-4xl font-semibold">MINISHOP</h1>
        </Link>
        <div className="flex items-center gap-5">
          <Link>
            <BiHeart className="text-4xl hover:text-orange-500" />
          </Link>
          <Link to="/cart">
            <BiCart className="text-4xl hover:text-orange-500" />
          </Link>
          <Link to="/products/new">
            <MdAddBox className="text-4xl hover:text-orange-500" />
          </Link>
          <div>김혜민 님</div>
          <button>로그인</button>
        </div>
      </header>
      <ul className="flex justify-center gap-10 ">
        <li>ALL</li>
        <li>상의</li>
        <li>하의</li>
        <li>원피스</li>
      </ul>
    </>
  );
}
