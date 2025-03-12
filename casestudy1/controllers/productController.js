const Product = require('../models/productModel');

exports.addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ msg: "Product added successfully", product });
    } catch (err) {
        res.status(400).json({ msg: `Error adding product: ${err.message}` });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ msg: `Error fetching products: ${err.message}` });
    }
};

exports.getProductByTitle = async (req, res) => {
    try {
        let title = req.params.title;
        const product = await Product.findOne({ title: title });
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ msg: `Error fetching product: ${err.message}` });
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        let category =  req.params.category;
        const products = await Product.find({ category: category});
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ msg: `Error fetching products: ${err.message}` });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, price: req.body.price },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ msg: "Product updated successfully", updatedProduct });
    } catch (err) {
        res.status(400).json({ msg: `Error updating product: ${err.message}` });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (err) {
        res.status(400).json({ msg: `Error deleting product: ${err.message}` });
    }
};
