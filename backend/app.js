require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./controllers/product");

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/products", productRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db Connected");
  })
  .catch(() => {
    console.error("error");
  });

module.exports = app;
