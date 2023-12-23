"use client";

import ProductCard from "./ProductCard";

function HotSales() {
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

  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div style={{ margin: "0 18px" }}>
      <div className="products-heading">
        <h2>Best Offers</h2>
        <p>Get your product at discounted rates and best offer</p>
      </div>

      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            isHot={true}
            addToCart={() => handleAddToCart(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HotSales;
