"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import CheckoutCard from "@/components/CheckoutCard";

import { useMainContext } from "@/context/Context";

function page() {
  const [totalCost, setTotalCost] = useState(0);
  const query = useSearchParams();
  const { checkoutItems } = useMainContext();

  const productType = query.get("product_type");
  const product = query.get("product");

  useEffect(() => {
    let total = 0;

    checkoutItems.forEach((item) => {
      if (item.discount) {
        const totalItem = (item.price - item.discountPrice) * item.quantity;
        total += totalItem;
      } else {
        const totalItem = item.price * item.quantity;
        total += totalItem;
      }
    });

    setTotalCost(() => total);
  }, [checkoutItems]);

  const handleOrder = () => {};

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
            {productType === "checkout-items" ? (
              <>
                <div className="products-heading">
                  <p className="title">Products</p>
                </div>
                {checkoutItems.map((product, i) => (
                  <CheckoutCard item={product} key={i} />
                ))}
              </>
            ) : (
              <CheckoutCard item={product} />
            )}
          </div>
        </div>
        <div className="checkout-summary">
          <div className="summary-main">
            <div className="products-heading">
              <p className="title">Checkout Summary</p>
            </div>
            <div className="d-flex">
              <p className="total-title">Total item costs</p>
              <p className="total-digit">NGN {totalCost}</p>
            </div>
            <div className="d-flex">
              <p className="total-title">Total shipping costs</p>
              <p className="total-digit">NGN 200000.00</p>
            </div>
            <div className="d-flex">
              <p className="grand-total">Grand Total</p>
              <p className="grand-total">NGN 200000.00</p>
            </div>
            <div className="input-group submit-btn">
              <input type="button" value="Place order" onClick={handleOrder} />
            </div>
            <p className="disclaimer">
              Upon clicking <b>Place Order</b>, you agree to have read and abide
              by our{" "}
              <Link href="/terms-and-service-policies">
                terms and service policies
              </Link>
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
