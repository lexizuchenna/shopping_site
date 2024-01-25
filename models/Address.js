import { Schema, model, models } from "mongoose";

const AddressSchema = new Schema(
  {
    uid: {
      type: String,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    "zip-code": {
      type: String,
      default: false,
    },
    "is-default": {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Address = models.Address || model("Address", AddressSchema);

export default Address;
