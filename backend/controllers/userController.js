import User from "../models/User.js";

export const getPendingGuests = async (req, res) => {
  try {
    const guests = await User.find({
      role: "guest",
      companyId: req.user.companyId
    }).select("-password");

    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch pending guests", error: err.message });
  }
};


// export const getGuestsByCompany = async (req, res) => {
//   const { companyId } = req.user;
//   try {
//     const guests = await User.find({ role: "guest", companyId });
//     res.status(200).json(guests);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch guests" });
//   }
// };

export const approveUser = async (req, res) => {
  try {
    const { userId, newRole } = req.body;

    // Validate role
    if (!["user", "admin"].includes(newRole)) {
      return res.status(400).json({ message: "Invalid role assignment" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if same company
    if (user.companyId !== req.user.companyId) {
      return res.status(403).json({ message: "Cannot approve user from another company" });
    }

    user.role = newRole;
    await user.save();

    res.status(200).json({ message: `User approved as ${newRole}` });
  } catch (err) {
    res.status(500).json({ message: "Failed to approve user", error: err.message });
  }
};
