"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CheckoutCard from "@/components/CheckoutCard";

function page() {
  const query = useSearchParams();

  const productType = query.get("product_type");
  const product = query.get("product");

  console.log(productType, product);

  const checkoutItems = [
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
      quantity: 2,
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
  ];

  return (
    <div className="main-container">
      <div className="d-flex checkout">
        <div className="checkout-details">
          <div className="checkout-address">
            <div className="products-heading">
              <p className="title">Shipping Address</p>
            </div>
            <div className="d-flex">
              <div className="address-container">
                <p className="name">Alexander Ukwueze</p>
                <p>+2347043696226</p>
                <p>24 Bank Street, Mainland, Emene</p>
                <p>Enugu</p>
                <p>Enugu State</p>
                <p>410001</p>
              </div>
              <div className="change-btn">
                <button>Change</button>
              </div>
            </div>
          </div>
          <div className="payment-method">
            <div className="products-heading">
              <p className="title">Payment Method</p>
            </div>
            <div className="d-flex">
              <div className="address-container">
                <p className="add-name">417396******2094</p>
              </div>
              <div className="change-btn">
                <button>Change</button>
              </div>
            </div>
          </div>
          <div className="checkout-products">
            <div className="products-heading">
              <p className="title">Products</p>
            </div>
            {checkoutItems.map((product, i) => (
              <CheckoutCard item={product} key={i} />
            ))}
          </div>
        </div>
        <div className="checkout-summary">
          <div className="summary-main">
            <div className="products-heading">
              <p className="title">Checkout Summary</p>
            </div>
            <div className="d-flex">
              <p className="total-title">Total item costs</p>
              <p className="total-digit">NGN 200000.00</p>
            </div>
            <div className="d-flex">
              <p className="total-title">Total shipping costs</p>
              <p className="total-digit">NGN 200000.00</p>
            </div>
            <div className="d-flex">
              <p className="grand-total">Grand Total</p>
              <p className="grand-total">NGN 200000.00</p>
            </div>
            <div className="btn-container">
              <button type="button" className="btn checkout-btn">
                Place Order
              </button>
            </div>
            <p className="disclaimer">
              Upon clicking "Place Order", you agree to have read and abide by
              our{" "}
              <Link href="/terms-and-service-policies">
                terms and service policies{" "}
              </Link>{" "}
            </p>
          </div>
          {/* <div className="summary-footer">
            <p>Spree keeps your information and payment safe</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default page;
