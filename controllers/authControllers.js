const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const {username, email, password, address, phone} = req.body;
    // ! Check all the fields are filled or not
    if(!username || !email || !password || !address || !phone) {
        return res.status(500).json({
            success:false,
            msg:"Please provide all the fields"
        })
    }

    // ! Check the user email is already exist or not
    const existingUser = await userModel.findOne({email});
    if(existingUser) {
        return res.status(500).json({
            success:false,
            msg:"User already register with same email."
        });
    }

    // * Create a new User
    const user = await userModel.create({
        username, email, address, phone, password
    });

    // * Send Success message to client.
    return res.status(201).json({
        success:true,
        msg:"User register successfully",
        user
    })
  } catch (error) {
    return res.status(500).json({
        success:false,
        msg:"Error while register user.",
        error
    })
  }
};
module.exports = { registerController };
