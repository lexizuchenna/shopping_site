"use client";

import ProductCard from "./ProductCard";

function HotSales() {
  const products = [
    {
      _id: "12345",
      images: ["/images/headphone.jpg"],
      name: "headphone 1",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1345",
      images: ["/images/headphone.jpg"],
      name: "headphone 2",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1245",
      images: ["/images/headphone.jpg"],
      name: "headphone 3",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
    {
      _id: "1235",
      images: ["/images/headphone.jpg"],
      name: "headphone 4",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
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
