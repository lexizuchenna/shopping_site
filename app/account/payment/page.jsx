"use client";

import { useState } from "react";

function page() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Manage and protect your account</p>
      </div>
      <div className="user-page-body">
        <div className="orders-heading"></div>
      </div>
    </>
  );
}

export default page;
