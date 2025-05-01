import UserModel from "../models/User.js";  // Make sure to import using 'import' if you're using ES modules
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password, cnf_password } = req.body;

  if (password !== cnf_password) {
    return res.status(400).send("The two passwords don't match");
  }

  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send("User already exists!");
    }

    // Hash password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
    });

    // Save the user and await the result
    const savedUser = await newUser.save();

    // Create payload for JWT token
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET || "randomsecret");

    return res.status(201).json({
      user: savedUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).send("Error registering user: " + error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).send("User does not exist");
    }

    // Compare password with hashed password in DB
    const isPasswordMatchingFromDb = await bcrypt.compare(password, user.password);

    if (isPasswordMatchingFromDb) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "randomsecret");

      return res.status(200).json({
        user: user,
        token: token,
      });
    }

    return res.status(401).send("Incorrect login credentials");
  } catch (error) {
    return res.status(500).send("Error logging in user: " + error.message);
  }
};

export { registerUser, loginUser };  // Export using ES module syntax
