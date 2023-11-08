import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, imageURL, price, text },
}) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product, clicked } });
  };
  const handleAddLike = () => setClicked(!clicked);

  return (
    <li className="overflow-hidden transition-all hover:scale-105">
      <img
        className="w-full h-5/6 cursor-pointer "
        src={imageURL}
        alt={text}
        onClick={handleClick}
      />
      <div className=" mt-2 px-2 text-lg flex justify-between items-center">
        <div>
          <h3 className="text-sm">{text}</h3>
          <p className="font-semibold text-xl">
            ₩ {price.toLocaleString("kr")}
          </p>
        </div>
        <button onClick={handleAddLike}>
          {clicked ? (
            <AiFillHeart className="text-red-400" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      </div>
    </li>
    // className={`${clicked} ? text-red-400 : '' `}
  );
}
