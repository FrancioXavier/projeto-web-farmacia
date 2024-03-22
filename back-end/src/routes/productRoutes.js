import { Router } from 'express';
import productController from '../controllers/ProductController';

const router = new Router();

//rotas para o front
router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.get('/:category', productController.getProductByCategory);

router.put('/', productController.updateProduct);

//rotas de desenvolvimento
router.post('/', productController.newProduct);

router.delete('/', productController.deleteProduct);

export default router;
