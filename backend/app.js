const express = require("express");
const connectDB = require("./config/db")
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes")

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("API Running!");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
