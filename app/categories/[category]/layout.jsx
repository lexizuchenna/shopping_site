"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import ProductCard from "@/components/ProductCard";

function RootLayout({ children }) {
  const params = useParams();

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
    <>
      <div className="main-container">
        <div className="products-heading">
          <h2>Shop {params.category} </h2>
          <div>{children}</div>
        </div>
        <div className="products-heading">
          <h2>Related Products</h2>
          <p>Get more products</p>
        </div>

        <div className="products-container">
          {products.map((product, index) => (
            <ProductCard
              product={product}
              key={index}
              addToCart={() => handleAddToCart(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RootLayout;
