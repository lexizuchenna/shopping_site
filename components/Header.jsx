"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaBell,
  FaUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

import Cart from "./Cart";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const totalQuantities = 0;
  return (
    <div className="bg-gradient">
      <header className="main-container">
        <nav>
          <div className="top-bar d-flex">
            <div className="left-links">
              <ul className="d-flex">
                <li>
                  <Link href="/seller/signin">Seller</Link>
                </li>
                <li>
                  <Link href="/seller/signin">Download App</Link>
                </li>
                <li>Follow us on</li>
                <li className="social-icon d-flex">
                  <Link href="/">
                    <FaInstagram color="var(--bg-primary)" />
                  </Link>
                </li>
                <li className="social-icon d-flex">
                  <Link href="/">
                    <FaTwitter color="var(--bg-primary)" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-links">
              <ul>
                <li>
                  <button className="social-icon" style={{ border: "none" }}>
                    <FaBell color="var(--bg-primary)" />
                  </button>
                </li>
                <li>
                  <Link href="/">SIGNUP</Link>
                </li>
                <li>
                  <Link href="/">LOGIN</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-container d-flex">
            <p className="logo">
              <Link href="/">Spree Store</Link>
            </p>

            <div className="right-nav d-flex">
              <div className="search-bar">
                <input type="text" name="search" placeholder="Search Spree" />
                <button>
                  <FaSearch color="#fff" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => setShowCart(true)}
                  style={{ marginRight: "30px" }}
                >
                  <FaShoppingCart color="var(--bg-primary)" size={18} />
                  <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  <FaUser color="var(--bg-primary)" size={17} />
                </button>
              </div>
            </div>

            {showMenu && (
              <div className="user-menu">
                <ul>
                  <li>
                    <Link href="/accounts">My Account</Link>
                  </li>
                  <li>
                    <Link href="/orders">My Orders</Link>
                  </li>
                  <li>
                    <Link href="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}

            {showCart && <Cart />}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
