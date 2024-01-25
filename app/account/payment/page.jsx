"use client";

import { useState } from "react";
import PaymentCard from "@/components/PaymentCard";

function page() {
  const cards = [1, 2, 3, 4];
  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Manage your payment cards</p>
      </div>
      <div className="user-page-body">
        <div className="orders-heading"></div>
        <div className="cards-body">
          {cards.map((card) => (
            <PaymentCard key={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
