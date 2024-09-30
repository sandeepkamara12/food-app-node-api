const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Username is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        required:[true, "Phone is required"],
    },
    usertype:{
        type:String,
        required:[true, "User Type is required"],
        default:'client',
        enum:['client', 'admin', 'vendor', 'driver']
    },
    profile:{
        type:String,
        default:"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    }
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);