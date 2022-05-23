import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
  try {
    const { user_id, content, category } = req.body;

    const newMessage = await Message.create({user_id, content, category})
    
    return res.status(200).json({message:"Message created successfully", newMessage})
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error happened", error: error.message });
  }
};



export default {createMessage}
