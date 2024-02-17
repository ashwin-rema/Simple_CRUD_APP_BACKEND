const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ProductRouter = require("./routes/product.routes.js");

app.use(express.json()); // Middleware
app.use(express.urlencoded({ extended: false }));

//roues
app.use("/api/products",ProductRouter);

app.get("/", (req, res) => {
  res.send("Hello World! from ");
});


mongoose
  .connect(
    "mongodb+srv://ashwinrema:Iam007ok@mongocrud-1.lab0p36.mongodb.net/NodeAPI-1?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection Failed " + err);
  });
