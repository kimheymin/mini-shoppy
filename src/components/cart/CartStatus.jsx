import React from "react";
import { BiCart } from "react-icons/bi";
import useCarts from "../../hooks/useCarts";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCarts();

  return (
    <div className="relative">
      <BiCart className="text-3xl md:text-4xl hover:text-brand" />
      {products && (
        <p className="w-6 h-6 text-white text-center bg-green-600 font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
