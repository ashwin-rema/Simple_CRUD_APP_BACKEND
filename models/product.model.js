const mongoose = require("mongoose");

const productModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a valid name"],
    },
    quantity: {
      type: Number,
      default: 0,
      required: [true, "Quantity cannot be empty"],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, "Quantity cannot be empty"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //It provides createdAt and updatedAt as dates (ISO 8601)
  }
);

const product = mongoose.model("product", productModel);
module.exports = product;