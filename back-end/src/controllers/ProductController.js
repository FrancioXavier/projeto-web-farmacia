class ProductController {
  async index(req, res) {
    res.json('Index');
  }

  async getProducts(req, res) {
    res.json('getProducts');
  }

  async getProductById(req, res) {
    res.json('getProducts');
  }

  async getProductByCategory(req, res) {
    res.json('getProducts');
  }

  async newProduct(req, res) {
    res.json('newProduct');
  }

  async updateProduct(req, res) {
    res.json('updateProduct');
  }

  async deleteProduct(req, res) {
    res.json('deleteProduct');
  }
}

export default new ProductController();
