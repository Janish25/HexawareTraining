const express = require('express');
const { addProduct, deleteProduct, updateProduct, getProductByTitle, getAllProducts, getProductsByCategory } = require('../controllers/productController');

const router = express.Router();

router.post("/add", addProduct);
router.get("/getall", getAllProducts);
router.get("/get/:title", getProductByTitle);
router.get("/category/:category", getProductsByCategory);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
