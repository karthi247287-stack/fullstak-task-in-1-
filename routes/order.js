const router = require("express").Router();
const Order = require("../models/Order");

router.post("/",async(req,res)=>{

    const order = new Order({
        userId:req.body.userId,
        products:req.body.products,
        total:req.body.total
    });

    await order.save();

    res.json("Order Placed");
});

module.exports = router;
