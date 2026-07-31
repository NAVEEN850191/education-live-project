const User = require("../models/User");
const generateToken = require("../utils/generateToken");


// Register User
const registerUser = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      role,
      phone,
      usn,
      department,
      year,
      photo,
    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      phone,
      usn,
      department,
      year,
      photo,
    });

    if (user) {
      res.status(201).json({
        message: "Registration Successful",
        token: generateToken(user._id, user.role),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    }

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// Login User

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  registerUser,
  loginUser,
};