import Image from "next/image";
import Link from "next/link";

import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="d-flex">
        <ul>
          <li className="footer-heading">Customer Service</li>
          <li className="footer-item">
            <Link href="/">Help Center</Link>
          </li>
          <li className="footer-item">
            <Link href="/">How To Buy</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Payment Method</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Spree Shop Guarantee</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Cookie Preference</Link>
          </li>
        </ul>
        <ul>
          <li className="footer-heading">About Spree Shop</li>
          <li className="footer-item">
            <Link href="/">About Us</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Spree Policies</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Spree Shop Guarantee</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="footer-item">
            <Link href="/">Cookie Preference</Link>
          </li>
        </ul>
        <ul>
          <li className="footer-heading">Payment</li>
          <li className="footer-image">
            <Image
              src="/images/mscard.png"
              width={60}
              height={25}
              alt="mastercard"
            />
          </li>
          <li className="footer-image">
            <Image
              src="/images/viisa.png"
              width={60}
              height={25}
              alt="visacard"
            />
          </li>
          <li className="footer-image">
            <Image
              src="/images/verve.png"
              width={60}
              height={35}
              alt="vervecard"
            />
          </li>
        </ul>
        <ul>
          <li className="footer-heading">Follow Us</li>
          <li className="footer-item">
            <Link
              href="https://instagram.com/spree"
              className=" d-flex"
              target="_blank"
            >
              <div className="footer-icon d-flex">
                <FaInstagram size={16} color="#fff" />
              </div>
              Instagram
            </Link>
          </li>
          <li className="footer-item">
            <Link
              href="https://instagram.com/spree"
              className=" d-flex"
              target="_blank"
            >
              <div className="footer-icon d-flex">
                <FaTwitter size={16} color="#fff" />
              </div>
              Twitter
            </Link>
          </li>
          <li className="footer-item ">
            <Link
              href="https://instagram.com/spree"
              className="d-flex"
              target="_blank"
            >
              <div className="footer-icon d-flex">
                <FaFacebook size={16} color="#fff" />
              </div>
              Facebook
            </Link>
          </li>
        </ul>
      </footer>
      <div className="footer-text">
        <p>&copy; 2023 Spree Shop. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
