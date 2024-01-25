import { Schema, model, models } from "mongoose";

const CardSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  "exp-date": {
    type: String,
    required: true,
  },
  "is-default": {
    type: Boolean,
    default: false,
  },
});

const Card = models.Card || model("Card", CardSchema);

export default Card;
