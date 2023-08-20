const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  images: [String],
  rating: [Number],
  reviews: Number,
  bullets: [String],
  stock: Number,
  price: Number,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
