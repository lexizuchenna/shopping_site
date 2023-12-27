"use client";

import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus, FaBolt } from "react-icons/fa";

import { useMainContext } from "@/context/MainContext";

function ProductCard({ product, isHot }) {
  const { handleAddCartItem } = useMainContext();
  return (
    <div
      className="d-flex"
      style={{ justifyContent: "center", marginBottom: "40px" }}
    >
      <div className="product-wrapper">
        {isHot && (
          <div className="hot-sale d-flex">
            <FaBolt color="#fff" />
          </div>
        )}
        <Link href={`/product/${product._id}`}>
          <div className="product-card">
            <Image
              src={product.images[0]}
              width={250}
              height={250}
              className="product-image"
              alt={product.name}
            />
          </div>
        </Link>
        <p className="product-name">{product?.name}</p>
        <div className="d-flex price">
          <p className="product-price">
            $
            {product.discount && product.discountPrice !== ""
              ? product.price - product.discountPrice
              : product.price - 0}
          </p>
          {product?.discount && product?.discountPrice !== "" && (
            <p className="product-discount">
              <del>${product?.discountPrice}</del>
            </p>
          )}
        </div>
        <div className="d-flex" style={{ alignItems: "flex-end" }}>
          <div className="rating d-flex">
            {[4, 4, 4, 4, 5].map((star, i) => (
              <AiFillStar size={17} color="orange" key={i} />
            ))}
          </div>
          <button
            className="product-to-cart"
            onClick={() => handleAddCartItem(product, 1)}
          >
            <FaCartPlus color="var(--bg-secondary)" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
