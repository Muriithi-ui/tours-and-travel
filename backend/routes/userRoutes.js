const express = require("express");
const { createUser
} = require("../controllers/userController")
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// Get all users
router.route("/").get(createUser);

module.exports = router