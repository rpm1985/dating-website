const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    name: {
        type: string,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: string,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: string,
        required: [true, "Please ener your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: string,
        default: "https://res.cloudinary.com/dpxiwsqtg/image/upload/v1614860496/146-1468479_my-profile-icon-blank-profile-picture-circle-hd_vwor4w.png"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema);