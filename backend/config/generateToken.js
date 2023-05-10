const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const generateVerificationToken = () => {
  const verificationToken = crypto.randomBytes(20).toString("hex");
  return verificationToken;
};

module.exports = {
  generateToken,
  generateVerificationToken,
};
