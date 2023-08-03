// src/repositories/productRepository.js

const Product = require('../models/Product');

class ProductRepository {
  async getAllProducts() {
    return Product.find();
  }

  async getProductById(id) {
    return Product.findById(id);
  }

  async createProduct(productData) {
    return Product.create(productData);
  }

  async updateProduct(id, productData) {
    return Product.findByIdAndUpdate(id, productData, { new: true });
  }

  async deleteProduct(id) {
    return Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductRepository();
