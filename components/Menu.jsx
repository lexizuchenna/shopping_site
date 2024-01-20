"use client";

import { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";

import { useMainContext } from "@/context/Context";

const Menu = ({ setShowMenu }) => {
  const menuRef = useRef();

  const { user, handleLogout } = useMainContext();

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
            <li onClick={() => setShowMenu(false)}>
              <div className="menu-icon">
                <FaUser />
              </div>
              <Link href="/account/profile">Profile</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <div className="menu-icon">
                <FaSignOutAlt />
              </div>
              <Link href="/account/profile">Profile</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <div className="menu-icon">
                <FaSignOutAlt />
              </div>
              <Link href="/account/profile">Profile</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <div className="menu-icon">
                <AiOutlineLogout />
              </div>
              <button
                onClick={() => {
                  setShowMenu(false);
                  handleLogout();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="cart-bottom menu-footer">
          <ul className="menu-list">
            <li onClick={() => setShowMenu(false)}>
              <div className="menu-icon">
                <AiOutlineLogout />
              </div>
              <Link href="/account/profile">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
