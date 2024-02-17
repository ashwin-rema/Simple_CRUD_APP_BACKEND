const express = require("express");
const router = express.Router();
const {findProduct,findProductById,addProduct,updateProduct,deleteProduct} = require("../controllers/product.controller.js")

router.get("/",findProduct);
router.get("/:id",findProductById);
router.post("/add",addProduct);
router.put("update/:id",updateProduct);
router.delete("delete/:id",deleteProduct);

module.exports = router;