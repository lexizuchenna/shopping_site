import { Schema, model, models } from "mongoose";

const ProfileSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      ref: "User",
    },
    "profile-icon": {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    dob: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;
