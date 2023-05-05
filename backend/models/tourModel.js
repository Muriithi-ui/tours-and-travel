const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

const tourSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: [String],
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      availableSeats: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
      },
      reviews: [reviewSchema],
    },
  { timestamps: true }
);

const Tour = mongoose.model("tour", tourSchema);

module.exports = Tour
