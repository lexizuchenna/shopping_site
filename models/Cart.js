import { Schema, model, models } from "mongoose";

const CartSchema = new Schema(
  {
    uid: {
      type: String,
      ref: "User",
      required: true,
    },
    bid: {
      type: String,
      ref: "User",
      required: true,
    },
    pid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: true }],
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Boolean,
      default: false,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    "store-name": {
      type: String,
      required: true,
    },
    "item-quantity": {
      type: Number,
      default: 1,
    },
    "user-quantity": {
      type: Number,
      default: null,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: { updatedAt: true, createdAt: false } }
);

const Cart = models.Cart || model("Cart", CartSchema);

export default Cart;
