"use client";

import Link from "next/link";
import Image from "next/image";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus, FaBolt } from "react-icons/fa";

import { useMainContext } from "@/context/Context";
import { calcAveRating } from "@/utils";

function ProductCard({ product, isHot }) {
  const { handleAddCartItem } = useMainContext();
  return (
    <div className="d-flex product-main">
      <div className="product-wrapper ">
        {product["item-quantity"] <= 0 && (
          <div className="out-of-stock d-flex">
            <div className="out-of-stock-text">
              <p>Out of stock</p>
            </div>
          </div>
        )}
        {isHot && (
          <div className="hot-sale d-flex">
            <FaBolt color="#fff" size={10} />
          </div>
        )}
        <div className="product-card-image">
          <Link
            href={`/product/${product.pid}`}
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
            <Rating
              initialRating={calcAveRating(product)}
              emptySymbol={<AiFillStar size={17} color="#aaa" />}
              fullSymbol={<AiFillStar size={17} color="#ee4d2d" />}
              readonly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
