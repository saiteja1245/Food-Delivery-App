import express from "express";
import { getAllDishes, getDishes } from "../controllers/dishController.js";  // Correct import with .js extension

const router = express.Router();

router.get("/", getAllDishes);
router.get("/dishes", getDishes);

export default router;
