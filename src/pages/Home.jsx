import React from "react";
import Products from "./Products";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <img className="w-full h-full bg-cover mb-10" src="images/banner1.jpg" />
      {/* <Banner /> */}
      <Products />
    </>
  );
}
