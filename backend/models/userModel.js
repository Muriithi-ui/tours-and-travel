const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({

    avatar: {
        type: String,
        required: true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        maxlength: 250
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
      },
    isActive: {
        type: Boolean,
        default: true
      }
   }, 
{ timestamps: true },
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await  bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next()
});
    
const User = mongoose.model("User", userSchema);

module.exports = User;
