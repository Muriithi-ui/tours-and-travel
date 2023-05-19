const express = require("express");
const {
    allTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour,
    getToursByLocation,
    getToursByDate,
    addReview,
    deleteReview,
    updateReview
} = require("../controllers/tourControllers");
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

// Get all tours
router.route("/").get(allTours);

// Create a new tour
router.route("/").post(protect, isAdmin, createTour);

// Get a single tour by ID
router.route("/:id").get(protect, getTourById);

// Update a tour by ID
router.route("/:id").put(protect, isAdmin, updateTour);

// Delete a tour by ID
router.route("/:id").delete(protect, isAdmin, deleteTour);

// Get tours by location
router.route("/location/:location").get(getToursByLocation);

// Get tours by date
router.route("/date/:date").get(getToursByDate);

// Add review to tour
router.route("/:id/reviews").post(protect, addReview);

// Delete review from tour
router.route("/:id/reviews/:reviewId").delete(protect, isAdmin, deleteReview);

// Update review for tour
router.route("/:id/reviews/:reviewId").put(protect, updateReview);

module.exports = router;
