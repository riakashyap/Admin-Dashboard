import User from "../models/User.js";

export const getUser = async (requestAnimationFrame, res) => {
  try {
    const { id } = requestAnimationFrame.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
