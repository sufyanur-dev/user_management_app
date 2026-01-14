import Users from "../models/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: `All fields are required`,
      });
    }

    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.status(409).json({
        success: false,
        message: `User ${userExist?.name} is already exists!`,
      });
    }

    const data = await Users.create({
      name,
      email,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await Users.find();

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error!" });
  }
};

export const deleteUserById = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const data = await Users.findById({ _id });

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found!" });
    }

    await Users.findByIdAndDelete({ _id });

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
