const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken")

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const createUser = asyncHandler(async (req, res) => {
  const { avatar, name, email, password, bio, role, isActive } = req.body;

  if (!name || !email ||!password) {
      res.status(400);
      throw new Error("Please enter all the fields")
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
      res.status(400);
      throw new Error("User already exists");
  }

  const user = await User.create({
      avatar,
      name,
      email,
      password,
      bio,
      role,
      isActive,
  });
  if (user) {
    const token = generateToken(user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      bio: user.bio,
      role: user.role,
      isActive: user.isActive,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
}); 

//@description     Authenticate a Users 
//@route           GET /api/user/
//@access          Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({ token });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});


//@description     get all Users 
//@route           GET /api/user/
//@access          Private
const getAllUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
  ? {
    $or: [
      { name: {$regex: req.query.search, $options: "i"} },
      { email: { $regex: req.query.search, $options: "i"} },
    ],
  }
  : {};

  const users = (await User.find( {...keyword, _id: {$ne: req.user._id } }));

  res.status(200).json(users);
});


//@description     get user by id
//@route           GEt /api/user/:id/deactivate
//@access          Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@description     update user
//@route           PUT /api/user/:id/deactivate
//@access          Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password")

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.bio = req.body.bio || user.bio;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      bio: updatedUser.bio,
    });
  } else {
    res.status(404).json({ message:"User not found"});
  }  
});

//@description     delete user
//@route           DELETE /api/user/:id
//@access          Private
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(404).json({ message: "No User"})
    }

    const user = await User.findByIdAndRemove(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", deletedUser: user })

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


//@description     deactivateUser user
//@route           POST /api/user/:id/deactivate
//@access          Public
const deactivateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
  
    if (!req.user.isAdmin && req.user.id !== user.id) {
      res.status(401);
      throw new Error("Not authorized to deactivate this user account");
    }
  
    user.isActive = false;
  
    await user.save();
  
    res.status(200).json({
      message: "User account deactivated successfully",
    });
});
  
//@description     Reactivate user
//@route           POST /api/user/:id/deactivate
//@access          Public
const reactivateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
  
    if (user.isActive) {
      res.status(400);
      throw new Error("User account is already active");
    }
  
    if (req.user.role !== "admin" && req.user._id.toString() !== user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized to reactivate this account");
    }
  
    user.isActive = true;
    const updatedUser = await user.save();
  
    res.status(200).json(updatedUser);
  });
  
module.exports = {createUser, 
  authUser,
  deactivateUser,
  reactivateUser, 
  getAllUsers, 
  getUser,
  updateUser,
  deleteUser
}