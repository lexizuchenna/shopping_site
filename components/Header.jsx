"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaBell,
  FaUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

import Cart from "./cart/Cart";
import Menu from "./Menu";

import { useMainContext } from "@/context/Context";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems, isLogin } = useMainContext();

  return (
    <header>
      <nav>
        <div className="top-bar d-flex">
          <div className="left-links">
            <ul className="d-flex">
              <li className="d-desktop">
                <Link href="/">Seller</Link>
              </li>
              <li>
                <Link href="/seller/signin">Download App</Link>
              </li>
              <li className="d-desktop">Follow us on</li>
              <li className="social-icon d-flex d-desktop">
                <Link href="/">
                  <FaInstagram color="var(--bg-primary)" />
                </Link>
              </li>
              <li className="social-icon d-flex d-desktop">
                <Link href="/">
                  <FaTwitter color="var(--bg-primary)" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-links">
            <ul>
              <li className="social-icon" style={{ paddingLeft: "5px" }}>
                <Link href="/account/notifications">
                  <FaBell color="var(--bg-primary)" />
                </Link>
              </li>

              {isLogin ? (
                <li style={{ marginRight: "0" }}>
                  <button
                    className="social-icon"
                    style={{ border: "none" }}
                    onClick={() => setShowMenu((prev) => !prev)}
                  >
                    <FaUser color="var(--bg-primary)" />
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/authentication/register">SIGNUP</Link>
                  </li>
                  <li style={{ marginRight: "0" }}>
                    <Link href="/authentication/login">LOGIN</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-container d-flex">
          <div className="logo">
            <Link href="/">
              <Image src="/spree_logoiii.png" width={35} height={35} />
              <span className="d-desktop">Spree Store</span>
            </Link>
          </div>

          <div className="right-nav d-flex">
            <div className="search-bar d-flex">
              <input type="text" name="search" placeholder="Search Spree" />
              <button className="d-flex">
                <FaSearch color="#fff" size={16} />
              </button>
            </div>
            <div>
              <button
                type="button"
                className="cart-icon"
                onClick={() => setShowCart(true)}
              >
                <FaShoppingCart color="var(--bg-primary)" size={18} />
                <span className="cart-item-qty">{cartItems.length}</span>
              </button>
            </div>
          </div>
          {showCart && <Cart setShowCart={setShowCart} />}
          {showMenu && <Menu setShowMenu={setShowMenu} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
