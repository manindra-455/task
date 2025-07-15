import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const companySchema = new mongoose.Schema({
  companyInfo: {
    name: { type: String, required: true },
    email: String,
    phone: String,
    address: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  companyId: {
    type: String,
    unique: true,
    default: uuidv4
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const Company = mongoose.model("Company", companySchema);
export default Company;
