import React from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";
import { useQuery } from "react-query";

export default function Products() {
  const { isLoading, error, data } = useQuery(["products"], () =>
    getProducts()
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 ">
        {data &&
          data.map((item) => <ProductCard key={item.id} product={item} />)}
      </ul>
    </>
  );
}
