"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";

import { useMainContext } from "@/context/Context";

function RootLayout({ children }) {
  const pathname = usePathname();

  const { user } = useMainContext();

  const menuItems = [
    { icon: <FaUser size={20} />, text: "Profile", link: "/account/profile" },
    {
      icon: <FaUser size={20} />,
      text: "Banks & Cards",
      link: "/account/payment",
    },
    {
      icon: <FaUser size={20} />,
      text: "Addresses",
      link: "/account/addresses",
    },
    { icon: <FaUser size={20} />, text: "Security", link: "/account/security" },
    {
      icon: <FaUser size={20} />,
      text: "Purchases",
      link: "/account/orders",
    },
    {
      icon: <FaUser size={20} />,
      text: "Notifications",
      link: "/account/notifications",
    },
  ];

  return (
    <div
      className="main-container"
      style={{ backgroundColor: "hsl(0, 0%, 93%)" }}
    >
      <div className="d-flex  user-page">
        <div className="user-page-menu">
          <div className="user-header d-flex">
            <div className="placeholder">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon tHTenE icon-headshot"
              >
                <g>
                  <circle
                    cx="7.5"
                    cy="4.5"
                    fill="none"
                    r="3.8"
                    strokeMiterlimit="10"
                  ></circle>
                  <path
                    d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="account-name">
              <h4>{user ? user.username : "username"}</h4>
              <Link href="/account/profile/edit">Edit Profile</Link>
            </div>
          </div>
          <div className="menu-page-list">
            <ul>
              {menuItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className={`d-flex page-link ${
                      pathname === item.link && "active"
                    }`}
                  >
                    <span className="page-icon">{item.icon}</span>
                    <span className="page-text">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="user-page-main">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
