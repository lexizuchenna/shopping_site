"use client";

import { useContext } from "react";

import ProductCard from "@/components/ProductCard";

import { useMainContext } from "@/context/MainContext";
function page() {
  const { cartItems } = useMainContext();
  console.log(cartItems);
  const handleAddToCart = () => {};
  const products = [
    {
      _id: "12345",
      images: ["/images/headphone.jpg"],
      name: "headphone",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
    },
    {
      _id: "12345",
      images: ["/images/headphone.jpg"],
      name: "headphone",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
    },
    {
      _id: "12345",
      images: ["/images/headphone.jpg"],
      name: "headphone",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
    },
    {
      _id: "12345",
      images: ["/images/headphone.jpg"],
      name: "headphone",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
    },
  ];
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard
          product={product}
          key={index}
          addToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
}

export default page;
