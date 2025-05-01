import express from "express";
const router = express.Router();

// Import your controllers
import { registerUser, loginUser } from "../controllers/userController.js";  // Ensure to add .js extension

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;  // Use `export default`
