"use client";

import { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";

import { useMainContext } from "@/context/MainContext";

const Menu = ({ setShowMenu }) => {
  const menuRef = useRef();

  const { user } = useMainContext();

  return (
    <div className="cart-wrapper" ref={menuRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowMenu(false)}
        >
          <AiOutlineLeft />
          <span className="heading">{user.username}</span>
        </button>

        <div
          className="cart-product-container"
          style={{
            margin: "8px 0 25px 0",
            overflow: "auto",
            maxHeight: "70vh",
            padding: "20px 10px",
          }}
        >
          <ul className="menu-list">
            <li>
              <div className="menu-icon">
                <FaUser />
              </div>
              <Link href="/accounts/profile">Profile</Link>
            </li>
            <li>
              <div className="menu-icon">
                <FaSignOutAlt />
              </div>
              <Link href="/accounts/profile">Profile</Link>
            </li>
            <li>
              <div className="menu-icon">
                <FaSignOutAlt />
              </div>
              <Link href="/accounts/profile">Profile</Link>
            </li>
            <li>
              <div className="menu-icon">
                <AiOutlineLogout />
              </div>
              <Link href="/accounts/profile">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="cart-bottom menu-footer">
          <ul className="menu-list">
            <li>
              <div className="menu-icon">
                <AiOutlineLogout />
              </div>
              <Link href="/accounts/profile">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
