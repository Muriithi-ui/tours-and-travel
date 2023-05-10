const express = require("express");
const { 
    createUser, 
    verifyAccount,
    authUser,
    getUser, 
    updateUser, 
    deleteUser, 
    getAllUsers,
    deactivateUser,
    reactivateUser
} = require("../controllers/userController")

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");


const router = express.Router();

// Create a user
router.route("/").post(createUser);

// Create a user
router.route("/verify").put(verifyAccount);

// Get all users
router.route("/").get(protect, getAllUsers);

// Get a single user by ID
router.route("/:id").get(protect, getUser);

//Login a User
router.post("/login", authUser);

// Update a user by ID
router.route("/:id").put(protect, updateUser);

// Delete a user by ID
router.route("/:id").delete(protect, isAdmin, deleteUser);

// Deactivate user account
router.route("/:id/deactivate").put(protect, isAdmin, deactivateUser);

// Reactivate a user account
router.route("/:id/reactivate").put(protect, isAdmin, reactivateUser);

module.exports = router
