"use client";

import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { BsClipboard2Check } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import {} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

function page() {
  const order = {
    oid: "688825388872366761",
    bid: "0832773562",
    sid: "7787656255",
    status: "processing",
    product: {
      pid: "123598548",
      name: "coconut scrub",
      images: ["/images/coconut.jpg"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
      price: 190,
      discount: true,
      discountPrice: 40,
      "store-name": "New mordern store",
      "item-quantity": 20,
      "user-quantity": 5,
      "delivery-fee": 0,
      quantity: 1,
    },
    "payment-method": "Debit Card/Paystack",
    "delivery-address": {
      name: "Alexander Ukwueze",
      phonenumber: "+2347043696226",
      street: "17 Ogugua Street, Mainland",
      city: "Enugu",
      state: "Enugu",
      country: "Nigeria",
      "zip-code": "410010",
    },
    date: "12th Aug, 2020",
  };

  const router = useRouter();

  const query = useSearchParams();
  const orderId = query.get("order-id");

  useEffect(() => {
    if (!orderId) {
      toast.error("Order id not found", { duration: 5000 });
      router.push("/");
    }
  }, []);

  const displayStatus = (status) => {
    switch (status) {
      case "processing":
        return "Awaiting confirmation";
      case "delivering":
        return "Awaiting delivery";
      case "delivered":
        return "Product deviered";
    }
  };

  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Order: {order.oid}</p>
      </div>
      <div className="user-page-body">
        <div className="order-card-container">
          <h4>{displayStatus(order.status)}</h4>
          <div className="order-detail">
            <p>
              The system will automatically confirm receipt after 3 days. If
              there are any problems,{" "}
              <Link href="/contact/support?customer-id=${user.uid}">
                Contact support
              </Link>
            </p>
          </div>
          <div className="order-action-btn">
            <button className="contained btn-default">Confirm</button>
          </div>
        </div>
        <div className="d-flex order-add-id">
          <div className="order-card-container d-flex">
            <div className="icon-pane">
              <FaLocationDot size={25} color="var(--btn-bg)" />
            </div>

            <div className="address-container">
              <p className="name">
                <b>{order["delivery-address"].name}</b>
              </p>
              <p>{order["delivery-address"].phonenumber}</p>
              <p>{order["delivery-address"].street}</p>
              <p>{order["delivery-address"].city}</p>
              <p>{order["delivery-address"].state} State</p>
              <p>{order["delivery-address"].country} State</p>
              <p>{order["delivery-address"]["zip-code"]}</p>
            </div>
          </div>
          <div className="order-card-container d-flex">
            <div className="icon-pane">
              <BsClipboard2Check size={25} color="var(--btn-bg)" />
            </div>
            <div className="order-oid">
              <p> Order ID: {order.oid} </p>
              <p> Order placed on: {order.date} </p>
              <p> Payment method: {order["payment-method"]} </p>
              <p> Estimated delivery: {order["payment-method"]} </p>
            </div>
          </div>
        </div>
        <div className="order-card-container">
          <div className="order-card-body d-flex">
            <div className="order-product">
              <h4 className="store-name">
                <Link href={`/sellers/${order.sid}`}>
                  {order.product["store-name"]}
                </Link>
              </h4>
              <div className="order-product-img-title d-flex">
                <div className="order-img-container">
                  <Image
                    src={order.product.images[0]}
                    alt={order.product.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h1>{order.product.name}</h1>
                  <p>
                    N{order.product.price} x{order.product.quantity}
                  </p>
                </div>
              </div>
              <div className="order-product-desc">
                <p>{order.product.desc}</p>
              </div>
            </div>
            <div className="order-action-btn">
              {order.status === "processing" ? (
                <>
                  <p className="order-total">
                    Total: N{order.product.price * order.product.quantity}
                  </p>
                  <button className="contained btn-default">
                    Cancel Order
                  </button>
                  <button className="outlined btn-default">
                    Contact Seller
                  </button>
                </>
              ) : order.status === "delivering" ? (
                <>
                  <p className="order-total">
                    Total: N{order.product.price * order.product.quantity}
                  </p>
                  <button className="contained btn-default">
                    Confirm Delivery
                  </button>
                  <button className="outlined btn-default">
                    Contact Seller
                  </button>
                </>
              ) : order.status === "delivered" ? (
                <>
                  <p className="order-total">
                    Total: N{order.product.price * order.product.quantity}
                  </p>
                  <button className="contained btn-default">
                    View Product
                  </button>
                  <button className="outlined btn-default">Remove Order</button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
