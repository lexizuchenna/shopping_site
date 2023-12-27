"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

function RootLayout({ children }) {
  const params = useParams();

  return (
    <>
      <div style={{ margin: "0 18px", paddingTop: "120px" }}>
        <div className="products-heading">
          <h2>User Profile</h2>
        </div>
        <div className="user-page-menu"></div>
        <div className="user-page-main">{children}</div>
      </div>
    </>
  );
}

export default RootLayout;
