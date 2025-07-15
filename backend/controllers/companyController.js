import Company from "../models/Company.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerCompany = async (req, res) => {
  try {
    const { companyName, name, email, password, phone, address } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role: "admin"
    });
    await newUser.save();

    // Create company and link admin
    const newCompany = new Company({
      companyInfo: {
        name: companyName,
        email,
        phone,
        address
      },
      users: [newUser._id]
    });
    await newCompany.save();

    // Update user's companyId
    newUser.companyId = newCompany.companyId;
    await newUser.save();

    // Token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role, companyId: newUser.companyId },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Company registered successfully",
      companyId: newCompany.companyId,
      token
    });
  } catch (err) {
    res.status(500).json({ message: "Company registration failed", error: err.message });
  }
};
