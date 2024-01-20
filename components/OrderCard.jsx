import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";

function OrderCard({ order }) {
  const displayStatus = (status) => {
    switch (status) {
      case "processing":
        return "Awaiting confirmation";
      case "delivering":
        return "Awaiting delivery";
      case "delivered":
        return "Product deviered";
    }
  };

  return (
    <div className="order-card-container">
      <div className="order-card-head d-flex">
        <h4>{displayStatus(order.status)}</h4>
        <div className="order-details d-flex">
          <div>
            <h5 className="order-date">
              <b>Date:</b> {order.date}
            </h5>
            <h5 className="order-id">
              <b>Order ID:</b> {order.oid}
              <FaCopy
                color="var(--btn-bg)"
                style={{ marginLeft: "5px", cursor: "pointer" }}
              />
            </h5>
          </div>
          <h4>
            <Link href={`/account/orders/order?order-id=${order.oid}`}>
              View order {">"}
            </Link>
          </h4>
        </div>
      </div>
      <div className="order-card-body d-flex">
        <div className="order-product">
          <h4 className="store-name">
            <Link href={`/sellers/${order.sid}`}>
              {order.product["store-name"]}
            </Link>
          </h4>
          <div className="order-product-img-title d-flex">
            <div className="order-img-container">
              <Image
                src={order.product.images[0]}
                alt={order.product.name}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1>{order.product.name}</h1>
              <p>
                N{order.product.price} x{order.product.quantity}
              </p>
            </div>
          </div>
          <div className="order-product-desc">
            <p>{order.product.desc}</p>
          </div>
        </div>
        <div className="order-action-btn">
          {order.status === "processing" ? (
            <>
              <p className="order-total">
                Total: N{order.product.price * order.product.quantity}
              </p>
              <button className="contained btn-default">Cancel Order</button>
              <button className="outlined btn-default">Contact Seller</button>
            </>
          ) : order.status === "delivering" ? (
            <>
              <p className="order-total">
                Total: N{order.product.price * order.product.quantity}
              </p>
              <button className="contained btn-default">
                Confirm Delivery
              </button>
              <button className="outlined btn-default">Contact Seller</button>
            </>
          ) : order.status === "delivered" ? (
            <>
              <p className="order-total">
                Total: N{order.product.price * order.product.quantity}
              </p>
              <button className="contained btn-default">View Product</button>
              <button className="outlined btn-default">Remove Order</button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
