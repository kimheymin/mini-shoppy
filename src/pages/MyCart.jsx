import React from "react";
import { FaPlusCircle, FaEquals } from "react-icons/fa";
import CartItem from "../components/cart/CartItem";
import PriceCard from "../components/products/PriceCard";
import Button from "../ui/Button";
import useCarts from "../hooks/useCarts";

const DELIVERY_PRICE = 3000;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCarts();

  if (isLoading) return <p>Loading...</p>;

  const hasProduct = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className="w-full md:w-8/12 p-8 flex flex-col m-auto">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-200">
        장바구니
      </p>
      {!hasProduct && (
        <p className="text-center">장바구니에 아무것도 없습니다.</p>
      )}
      {hasProduct && (
        <>
          <ul className="px-0 border-b border-gray-300 mb-8 p-4 md:px-8">
            {products &&
              products.map((item) => <CartItem key={item.id} product={item} />)}
          </ul>

          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16 ">
            <PriceCard
              text="상품 총액"
              price={totalPrice.toLocaleString("kr")}
            />
            <FaPlusCircle className="shrink-0" />
            <PriceCard
              text="배송비"
              price={DELIVERY_PRICE.toLocaleString("kr")}
            />
            <FaEquals className="shrink-0" />
            <PriceCard
              text="총 금액"
              price={(totalPrice + DELIVERY_PRICE).toLocaleString("kr")}
            />
          </div>
          <Button text={"주문하기"} />
        </>
      )}
    </section>
  );
}
