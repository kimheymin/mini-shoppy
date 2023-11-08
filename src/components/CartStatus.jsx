import React from "react";
import { BiCart } from "react-icons/bi";
import { useQuery } from "react-query";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));

  return (
    <div className="relative">
      <BiCart className="text-4xl hover:text-orange-500" />
      {products && (
        <p className="w-6 h-6 text-white text-center bg-green-600 font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
