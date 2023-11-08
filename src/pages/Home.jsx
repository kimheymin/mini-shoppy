import React from "react";
import Products from "./products/Products";
import Banner from "../components/banner/Banner";

export default function Home() {
  return (
    <>
      {/* <img className="w-full h-full bg-cover mb-10" src="images/banner1.jpg" /> */}
      <Banner />
      <Products />
    </>
  );
}
