import { Router } from 'express';
import categoryController from '../controllers/CategoryController';

const router = new Router();

router.get('/', categoryController.getCategories);

router.get('/:id', categoryController.getCategoryById);

router.post('/', categoryController.newCategory);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

export default router;
