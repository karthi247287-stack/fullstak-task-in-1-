const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
});

module.exports = mongoose.model("User",UserSchema);


const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String
});

module.exports = mongoose.model("Product",ProductSchema);




const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId:String,
    products:Array,
    total:Number,
    status:{
        type:String,
        default:"Pending"
    }
});

module.exports = mongoose.model("Order",OrderSchema);
