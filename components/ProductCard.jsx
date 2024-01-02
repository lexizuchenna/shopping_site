"use client";

import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus, FaBolt } from "react-icons/fa";

import { useMainContext } from "@/context/MainContext";

function ProductCard({ product, isHot }) {
  const { handleAddCartItem } = useMainContext();
  return (
    <div className="d-flex product-main">
      <div className="product-wrapper ">
        {isHot && (
          <div className="hot-sale d-flex">
            <FaBolt color="#fff" size={10} />
          </div>
        )}
        <div className="product-card-image">
          <Link
            href={`/product/${product._id}`}
            className="products-link-wrapper"
          >
            <Image
              src={product.images[0]}
              width={250}
              height={250}
              className="product-image"
              alt={product.name}
            />
          </Link>
          <button
            className="product-to-cart"
            onClick={() => handleAddCartItem(product, 1)}
          >
            <FaCartPlus color="var(--bg-secondary)" size={18} />
          </button>
        </div>
        <div className="product-card-detail">
          <div className="d-flex price">
            <span className="product-price">
              N
              {product.discount && product.discountPrice !== ""
                ? product.price - product.discountPrice
                : product.price - 0}
            </span>
            {product?.discount && product?.discountPrice !== "" && (
              <span className="product-discount">
                <del>N{product?.discountPrice}</del>
              </span>
            )}
          </div>
          <div className="d-flex name-price">
            <p className="product-name">{product?.name}</p>
          </div>
          <div className="d-flex" style={{ alignItems: "flex-end" }}>
            <div className="rating d-flex">
              {[4, 4, 4, 4, 5].map((star, i) => (
                <AiFillStar size={17} color="orange" key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
