import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useCarts from "../../hooks/useCarts";

const ICON_CLASS = "transition-all cursor-pointer hover:scale-105 mx-1";

export default function CartItem({
  product,
  product: { id, imageURL, text, price, option, quantity },
  uid,
}) {
  const { addOrUpdateItem, removeItem } = useCarts();

  const handleIncrement = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  const handleDecrement = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-32 ml-4" src={imageURL} alt={text} />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{text}</p>
          <p className="text-xl font-bold">{option}</p>
          <p>{price.toLocaleString("kr")}</p>
        </div>
        <div className="text-2xl flex items-center">
          <CiSquarePlus className={ICON_CLASS} onClick={handleIncrement} />
          <span>{quantity}</span>
          <CiSquareMinus className={ICON_CLASS} onClick={handleDecrement} />
          <MdDelete className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
