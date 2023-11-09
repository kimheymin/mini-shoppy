import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/products/ProductCard";
import { useLocation } from "react-router";

export default function Products() {
  const { state } = useLocation();
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts();

  const stateValue = state && state.value;

  const dataFilter = stateValue
    ? data.filter((item) => item.category === stateValue)
    : data;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 ">
        {dataFilter &&
          dataFilter.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </ul>
    </>
  );
}
