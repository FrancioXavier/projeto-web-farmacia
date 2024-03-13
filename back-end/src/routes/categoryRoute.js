import { Router } from 'express';
import categoryController from '../controllers/CategoryController';

const router = new Router();

router.get('/', categoryController.getCategories);

router.get('/:id', categoryController.getCategoryById);

router.post('/', categoryController.newCategory);

router.put('/', categoryController.updateCategory);

router.delete('/', categoryController.deleteCategory);

export default router;
