import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";

export default function ProductDetail() {
  const {
    user: { uid },
  } = useAuthContext();
  const {
    state: {
      product: { id, imageURL, text, category, price, options },
    },
  } = useLocation();
  const priceKR = price.toLocaleString("kr");

  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    const product = {
      id,
      imageURL,
      text,
      price,
      option: selected,
      quantity: 1,
    };
    addOrUpdateToCart(uid, product);
  };
  return (
    <section className="flex flex-col md:flex-row p-4 justify-center">
      <img className="px-4" src={imageURL} alt={text} />
      <div className="w-full basis-5/12 flex flex-col p-4">
        <p className="my-4 text-gray-700">{category}</p>
        <h2 className="text-3xl font-bold py-2">{text}</h2>
        <p className="text-2xl font-semibold py-2">₩ {priceKR}</p>
        <div className="w-full h-px my-9 border-b border-gray-200"></div>
        <div>
          <label htmlFor="select">Size : </label>
          <select
            className="p-2 m-4 w-28 flex-1 border border-zinc-500 outline-none "
            id="select"
            onChange={handleSelect}
            value={selected}
          >
            {options &&
              options.map((optionVal, index) => (
                <option key={index}>{optionVal}</option>
              ))}
          </select>
        </div>
        <button onClick={handleClick}>장바구니에 추가</button>
      </div>
    </section>
  );
}
