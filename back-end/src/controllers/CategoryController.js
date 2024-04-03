import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    res.json('Index');
  }

  async getCategories(req, res) {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      return res
        .status(401)
        .json({ message: 'Não foi possível recuperar as categorias' });
    }
  }

  async getCategoryById(req, res) {
    try {
      const id = req.params.id;
      const categoriesById = await Category.findById(id);

      return res.status(200).json(categoriesById);
    } catch (error) {
      return res
        .status(401)
        .json({ message: 'Não foi possível recuperar Categoria' });
    }
  }

  async updateCategory(req, res) {
    try {
      const categoryId = req.params.id;
      const category = req.body.category;
      const newCategory = await Category.findByIdAndUpdate(
        categoryId,
        category,
      );

      const { id, categoryName } = newCategory;

      return res.status(200).json({ id, categoryName });
    } catch (error) {
      return res.status(500).json({ message: 'Erro no servidor' });
    }
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
      return res.status(401).send('deu erro!');
    }
  }

  async deleteCategory(req, res) {
    try {
      const id = req.params.id;
      const deleteUser = await Category.findByIdAndDelete(id);

      if (!deleteUser) {
        res.status(404).json({ message: 'Categoria não encontrado' });
      }

      return res
        .status(200)
        .json({ message: 'Categoria deletado com sucesso' });
    } catch (err) {}
  }
}

export default new CategoryController();
