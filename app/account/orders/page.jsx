"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import OrderCard from "@/components/OrderCard";

function page() {
  const [category, setCategory] = useState("all");

  const orderStatus = ["all", "processing", "delivering", "delivered"];
  const arr = [
    {
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
    },
    {
      oid: "688825388872321761",
      bid: "0832773562",
      sid: "7787656255",
      status: "delivering",
      product: {
        pid: "123598548",
        name: "headphone 1",
        images: ["/images/headphone1.jpg"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
        price: 190,
        discount: true,
        discountPrice: 40,
        "store-name": "New mordern store",
        "item-quantity": 20,
        "user-quantity": 5,
        "delivery-fee": 0,
        quantity: 10,
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
      date: "13th Aug, 2020",
    },
    {
      oid: "600825388872366761",
      bid: "0832773562",
      sid: "7787656255",
      status: "delivered",
      product: {
        pid: "123598548",
        name: "max headphone",
        images: ["/images/headphone2.jpg"],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
        price: 190,
        discount: true,
        discountPrice: 40,
        "store-name": "New mordern store",
        "item-quantity": 20,
        "user-quantity": 5,
        "delivery-fee": 0,
        quantity: 5,
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
      date: "16th Aug, 2020",
    },
  ];

  const [orders, setOrders] = useState(arr);
  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Manage your orders & purchases</p>
      </div>
      <div className="user-page-body">
        <div className="orders-heading d-flex d-desktop">
          {orderStatus.map((item, i) => (
            <button
              key={i}
              onClick={() => setCategory(item)}
              className={`${
                category === item && "active"
              } btn-default btn-select`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="order-search d-flex">
          <div className="search-bar d-flex">
            <input
              type="text"
              name="search"
              placeholder="Order ID/Product ID"
            />
            <button className="d-flex">
              <FaSearch color="#fff" size={16} />
            </button>
          </div>
        </div>
        <div className="orders">
          {orders.length > 0 ? (
            orders.map((order) => <OrderCard order={order} key={order.oid} />)
          ) : (
            <div>No order</div>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
