import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, requires: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, requires: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
