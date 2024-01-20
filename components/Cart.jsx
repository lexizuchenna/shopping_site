"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";

import toast from "react-hot-toast";

import { useMainContext } from "@/context/Context";

import CartCard from "./CartCard";

const Cart = ({ setShowCart }) => {
  const cartRef = useRef();
  const router = useRouter();

  const { totalAmount, cartItems } = useMainContext();

  const handleCheckout = () => {
    setShowCart(false);
    router.push(`/checkout?product_type=checkout-items`);

    toast.loading("Redirecting...", {
      duration: 2000,
    });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">
            ({cartItems.length} {cartItems.length > 1 ? "items" : "item"})
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>

            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn"
            >
              Continue Shopping
            </button>
          </div>
        )}

        <div className="cart-product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <CartCard item={item} key={index} />
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalAmount}</h3>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="btn checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
