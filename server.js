const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err);
});

app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/product"));
app.use("/cart", require("./routes/cart"));
app.use("/orders", require("./routes/order"));

app.listen(5000,()=>{
    console.log("Server Running");
});
