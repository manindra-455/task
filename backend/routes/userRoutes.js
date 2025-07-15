import express from "express";
import { getPendingGuests, approveUser } from "../controllers/userController.js";
import { protect, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

// List pending guest users (Admin only)
router.get("/guests", protect, authorizeRoles("admin"), getPendingGuests);

// Approve a guest to user/admin (Admin only)
router.post("/approve", protect, authorizeRoles("admin"), approveUser);

export default router;
