import express from "express";
import { registerCompany } from "../controllers/companyController.js";

const router = express.Router();

// Company registration route
router.post("/register", registerCompany);

export default router;
