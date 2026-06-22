const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register",async(req,res)=>{
    try{
        const hash = await bcrypt.hash(req.body.password,10);

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hash
        });

        await user.save();

        res.json("Registration Successful");
    }
    catch(err){
        res.json(err);
    }
});

module.exports = router;
 ---- login API ------ 
const jwt = require("jsonwebtoken");

router.post("/login",async(req,res)=>{
    const user = await User.findOne({
        email:req.body.email
    });

    if(!user)
        return res.json("User Not Found");

    const valid =
    await bcrypt.compare(
        req.body.password,
        user.password
    );

    if(!valid)
        return res.json("Wrong Password");

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET
    );

    res.json(token);
});
