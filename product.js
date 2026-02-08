const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  discount: Number
});

module.exports = mongoose.model("Product", productSchema);
