class CategoryController {
  async index(req, res) {
    res.json('Index');
  }

  async getCategories(req, res) {
    res.json('getCategories');
  }

  async getCategoryById(req, res) {
    res.son('getCategoryById');
  }

  async updateCategory(req, res) {
    res.json('updateCategory');
  }

  async newCategory(req, res) {
    res.json('newCategory');
  }

  async deleteCategory(req, res) {
    res.json('deleteCategory');
  }
}

export default new CategoryController();
