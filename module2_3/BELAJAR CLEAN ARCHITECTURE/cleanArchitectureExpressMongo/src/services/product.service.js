// src/services/productService.js

const productRepository = require('../repositories/productRepository');

class ProductService {
  async getAllProducts() {
    return productRepository.getAllProducts();
  }

  async getProductById(id) {
    return productRepository.getProductById(id);
  }

  async createProduct(productData) {
    return productRepository.createProduct(productData);
  }

  async updateProduct(id, productData) {
    return productRepository.updateProduct(id, productData);
  }

  async deleteProduct(id) {
    return productRepository.deleteProduct(id);
  }
}

module.exports = new ProductService();
