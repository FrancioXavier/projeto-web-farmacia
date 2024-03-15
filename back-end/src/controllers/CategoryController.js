import Category from '../models/Category';

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
    const categoryName = req.body.categoryName;
    try {
      const category = new Category({
        categoryName: categoryName,
      });
      await category.save();
      return res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(401).send('deu erro!');
    }
  }

  async deleteCategory(req, res) {
    res.json('deleteCategory');
  }
}

export default new CategoryController();
