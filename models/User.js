import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["admin", "seller", "buyer"],
      default: "buyer",
      required: true,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
