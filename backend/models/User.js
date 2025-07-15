import mongoose from "mongoose";

const weeklyUptimeSchema = new mongoose.Schema({
  week: String,
  Mon: Number,
  Tue: Number,
  Wed: Number,
  Thu: Number,
  Fri: Number,
  Sat: Number,
  Sun: Number
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  position: String,
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["guest", "user", "admin", "superadmin"],
    default: "guest"
  },
  joinedDate: {
    type: Date,
    default: Date.now
  },
  weeklyUptime: [weeklyUptimeSchema],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  companyId: String
});

const User = mongoose.model("User", userSchema);
export default User;
