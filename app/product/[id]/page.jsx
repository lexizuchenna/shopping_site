"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import { FaCartPlus } from "react-icons/fa";

import { useMainContext } from "@/context/Context";
import { calcRating, calcAveRating } from "@/utils";

function page() {
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);

  const { handleAddCartItem } = useMainContext();

  const product = {
    uid: "123450000",
    pid: "12350937",
    images: ["/images/scrub.jpg", "/images/coconut.jpg"],
    name: "face scrub",
    discount: false,
    discountPrice: 40,
    price: 170,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis libero dolore blanditiis incidunt soluta voluptatem exercitationem nobis dicta voluptatibus.",
    "store-name": "New mordern store",
    "item-quantity": 20,
    "user-quantity": 5,
    ratings: [
      { uid: "1289764386783", rating: 5 },
      { uid: "1289764386783", rating: 2 },
    ],
  };

  const incQty = () => {
    setQuantity((prevQty) => {
      if (prevQty + 1 > product.quantity) return product.quantity;

      return prevQty + 1;
    });
  };

  const decQty = () => {
    setQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={product.images[index]} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {product.images?.map((image, i) => (
            <img
              key={i}
              src={image}
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{product.name}</h1>
        <div className="reviews">
          <Rating
            initialRating={calcAveRating(product)}
            emptySymbol={<AiFillStar size={17} color="#aaa" />}
            fullSymbol={<AiFillStar size={17} color="#ee4d2d" />}
            readonly
          />
          <p>({calcRating(product)})</p>
        </div>
        <h4>Details: </h4>
        <p>{product.desc}</p>
        <div className="d-flex product-price-wrapper">
          <p className="price">
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
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc d-flex">
            <span className="minus d-flex" onClick={decQty}>
              <AiOutlineMinus />
            </span>
            <span className="num">{quantity}</span>
            <span className="plus d-flex" onClick={incQty}>
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="add-to-cart d-flex"
            style={{ justifyContent: "center" }}
            onClick={() => handleAddCartItem(product, quantity)}
          >
            <span className="d-desktop">Add to Cart</span>
            <FaCartPlus
              color="var(--bg-secondary)"
              size={18}
              style={{ marginLeft: "10px" }}
            />
          </button>
          <button type="button" className="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
