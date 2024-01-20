import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    uid: {
      type: String,
      ref: "User",
      required: true,
    },
    pid: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: [
        {
          validator: (array) => {
            return array.length <= 5;
          },
          message: "Maximum of 5 images",
        },
        {
          validator: (array) => {
            return array.length > 0;
          },
          message: "Must add one image",
        },
      ],
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      validate: [
        {
          validator: (array) => {
            return array.length <= 3;
          },
          message: "Maximum of 3 categories",
        },
        {
          validator: (array) => {
            return array.length < 0;
          },
          message: "Must add one category",
        },
      ],
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
    "delivery-fee": {
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
    ratings: [
      {
        uid: {
          type: String,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
