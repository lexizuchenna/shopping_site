"use client";

import ProductCard from "@/components/ProductCard";

function layout({ children }) {
  const products = [
    {
      uid: "123450000",
      pid: "12345",
      name: "headphone 1",
      images: ["/images/headphone.jpg"],
      price: 120,
      discount: true,
      discountPrice: 40,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      ratings: [
        { uid: "1289764386783", rating: 5 },
        { uid: "1289764386783", rating: 3 },
        { uid: "1289764386783", rating: 4 },
        { uid: "1289764386783", rating: 2 },
      ],
    },

    {
      uid: "123450000",
      pid: "1345",
      images: ["/images/headphone2.jpg"],
      name: "headphone 2",
      discount: true,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      ratings: [{ uid: "1289764386783", rating: 5 }],
    },
    {
      uid: "123450000",
      pid: "1245",
      images: ["/images/headphone3.jpg"],
      name: "headphone 3",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      ratings: [{ uid: "1289764386783", rating: 5 }],
    },
    {
      uid: "123450000",
      pid: "1235",
      images: ["/images/headphone1.jpg"],
      name: "headphone 4",
      discount: false,
      discountPrice: 40,
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      ratings: [{ uid: "1289764386783", rating: 5 }],
    },
    {
      uid: "123450000",
      pid: "123598548",
      images: ["/images/coconut.jpg"],
      name: "coconut scrub",
      discount: true,
      discountPrice: 40,
      price: 190,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      ratings: [{ uid: "1289764386783", rating: 5 }],
    },
    {
      uid: "123450000",
      pid: "12350937",
      images: ["/images/scrub.jpg"],
      name: "face scrub",
      discount: false,
      discountPrice: 40,
      price: 170,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      ratings: [
        { uid: "1289764386783", rating: 5 },
        { uid: "1289764386783", rating: 2 },
      ],
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
