import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash, FaCheckCircle, FaCircle } from "react-icons/fa";

import { useMainContext } from "@/context/MainContext";

function CartCard({ item }) {
  const {
    checkoutItems,
    handleSelectCheckoutItem,
    handleRemoveCartItem,
    handleCartItemQty,
  } = useMainContext();
  return (
    <div className="product" key={item._id}>
      <Image
        src={item.images[0]}
        className="cart-product-image"
        width={70}
        height={70}
        alt={item.name}
      />
      <div className="item-desc">
        <div className="flex top">
          <h5>{item.name}</h5>
          <div className="d-flex">
            <button
              type="button"
              className="remove-item"
              onClick={() => handleRemoveCartItem(item)}
            >
              <FaTrash />
            </button>
            <button
              type="button"
              className="remove-item"
              style={{ marginLeft: "15px" }}
            >
              {checkoutItems.find((product) => product._id === item._id) ? (
                <FaCheckCircle
                  onClick={(e) => handleSelectCheckoutItem(e, item, "remove")}
                />
              ) : (
                <FaCircle
                  style={{
                    border: "1px solid var(--bg-secondary)",
                    borderRadius: "50%",
                  }}
                  color="transparent"
                  onClick={(e) => handleSelectCheckoutItem(e, item, "add")}
                />
              )}
            </button>
          </div>
        </div>
        <div className="">
          <p className="cart-desc">{item.desc}</p>
        </div>
        <div className="flex bottom">
          <div>
            <p className="quantity-desc d-flex">
              <span
                className="minus d-flex"
                onClick={() => handleCartItemQty(item, "dec")}
              >
                <AiOutlineMinus size={18} />
              </span>
              <span className="num" style={{ cursor: "default" }}>
                {item.quantity}
              </span>
              <span
                className="plus d-flex"
                onClick={() => handleCartItemQty(item, "inc")}
              >
                <AiOutlinePlus size={18} />
              </span>
            </p>
          </div>

          <div className="d-flex">
            {item?.discount && item?.discountPrice !== "" && (
              <p className="cart-discount">
                <del>${item?.discountPrice}</del>
              </p>
            )}
            <p className="cart-price">
              $
              {item.discount && item.discountPrice !== ""
                ? item.price - item.discountPrice
                : item.price - 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
