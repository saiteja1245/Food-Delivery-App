import DishesModel from "../models/Dishes.js";

const getDishes = async (req, res) => {
  const results = await DishesModel.find({});
  return res.status(200).send(results);
};

const getAllDishes = (req, res) => {
  // your logic to get dishes
  res.send("All dishes");
};

export { getDishes, getAllDishes };



