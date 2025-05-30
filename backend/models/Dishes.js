import mongoose from "mongoose";

const DishesModel = mongoose.model("dishes", {
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export default DishesModel;
