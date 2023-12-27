"use client";

import ProductCard from "@/components/ProductCard";

function layout({ children }) {
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
    <div className="main-container">
      <div>{children}</div>
      <div>
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
    </div>
  );
}

export default layout;
