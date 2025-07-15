import User from "../models/User.js";
import Company from "../models/Company.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Register (as guest)
export const register = async (req, res) => {
  try {
    const { name, email, password, phone, companyId } = req.body;

    // Validate companyId
    const company = await Company.findOne({ companyId });
    if (!company) {
      return res.status(400).json({ message: "Invalid company ID" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user as guest
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role: "guest",
      companyId
    });
    await newUser.save();

    // Add user to company users list
    company.users.push(newUser._id);
    await company.save();

    // Optional: Notify admin (future implementation)

    res.status(201).json({ message: "User registered as guest and request sent to company admin" });

  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role, companyId: user.companyId },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      token,
      role: user.role,
      companyId: user.companyId
    });

  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
