import mongoose from "mongoose";

const UserModel = mongoose.model("user", {
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default UserModel;
