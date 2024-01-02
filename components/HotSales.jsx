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
      images: ["/images/headphone2.jpg"],
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
      images: ["/images/headphone3.jpg"],
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
      images: ["/images/headphone1.jpg"],
      name: "headphone 4",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
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
      images: ["/images/headphone2.jpg"],
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
      images: ["/images/headphone3.jpg"],
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
      images: ["/images/headphone1.jpg"],
      name: "headphone 4",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "item-quantity": 20,
      "user-quantity": 5,
    },
  ];

  return (
    <div>
      <div className="products-heading">
        <h2>Best Offers</h2>
        <p>Get your product at discounted rates and best offer</p>
      </div>

      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} isHot={true} />
        ))}
      </div>
    </div>
  );
}

export default HotSales;
