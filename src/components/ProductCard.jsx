import React from "react";
import { BiHeart } from "react-icons/bi";

export default function ProductCard({ product: { imageURL, price, text } }) {
  const priceKR = price.toLocaleString("kr");

  return (
    <li className="overflow-hidden">
      <img className="w-full h-5/6 cursor-pointer" src={imageURL} alt={text} />
      <div className=" mt-2 px-2 text-lg flex justify-between items-center">
        <div>
          <h3 className="text-sm">{text}</h3>
          <p className="font-semibold text-xl">₩ {priceKR}</p>
        </div>
        <button>
          <BiHeart />
        </button>
      </div>
    </li>
  );
}
