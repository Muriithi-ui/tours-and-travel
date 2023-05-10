const express = require('express');
const { 
    createTourBooking,
    getAllTourBookingsForUser,
    getAllTourBookings,
    getTourBookingById,
    updateTourBooking,
    updateTourBookingPaymentStatus,
    cancelTourBooking
} = require('../controllers/bookingController');
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

// create a new booking
router.route('/').post(protect, createTourBooking);

// get a tour by id
router.route('/:id').get(protect, getTourBookingById);

// get all tour booking for a user
router.route('/').get(protect, getAllTourBookingsForUser);

// get all tour booking
router.route('/:tourId/bookings').get(protect, isAdmin, getAllTourBookings);

// update a tour by id
router.route('/:id').put(protect, updateTourBooking);

// update a tourBookingPaymentStatus
router.route('/:id').put(updateTourBookingPaymentStatus);

// delete a tour
router.route('/:id').delete(protect, cancelTourBooking);

module.exports = router;
