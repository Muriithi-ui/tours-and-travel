const express = require("express");
const connectDB = require("./config/db")
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const cors = require('cors');


dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use(cors());


app.get("/", (req,res) => {
    res.send("API Running!");
});

app.use("/api/user", userRoutes);
app.use("/api/tour", tourRoutes);
app.use("/api/booking", bookingRoutes);


const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
