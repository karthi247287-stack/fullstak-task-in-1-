const router = require("express").Router();

let cart=[];

router.post("/add",(req,res)=>{
    cart.push(req.body);
    res.json(cart);
});

router.get("/",(req,res)=>{
    res.json(cart);
});

module.exports = router;
