const express = require("express");
const product =require("../models/product.model.js")

const findProduct = async (req, res) => {
    try {
      const products = await product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  };

const findProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const productItem = await product.findById(id);
      res.status(200).json(productItem);
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  };

const addProduct = async (req, res) => {
    try {
      const Item = await product.create(req.body);
      res.status(200).json({ Item: Item });
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  };

const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const productItem = await product.findByIdAndUpdate(id, req.body);
      console.log(productItem + " value");
  
      if (!productItem) {
        return res
          .status(404)
          .json({ message: "No Product Found with given ID!" });
      }
  
      const updatedItem = await product.findById(id);
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  };

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const productItem = await product.findByIdAndDelete(id);
  
      if (!productItem) {
        return res
          .status(404)
          .json({ message: "No Product Found with given ID!" });
      }
  
      res.status(200).json({ message: "Product has been deleted" });
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  };
  
  module.exports = {
    findProduct,
    findProductById,
    addProduct,
    deleteProduct,
    updateProduct
  }