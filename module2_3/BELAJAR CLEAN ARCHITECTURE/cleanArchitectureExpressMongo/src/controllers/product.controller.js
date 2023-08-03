// src/controllers/productController.js

const productService = require("../services/productService");

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await productService.getProductById(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createProduct(req, res) {
    const productData = req.body;
    try {
      const product = await productService.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const productData = req.body;
    try {
      const product = await productService.updateProduct(id, productData);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const deletedProduct = await productService.deleteProduct(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new ProductController();
