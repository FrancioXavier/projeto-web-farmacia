import { Router } from 'express';
import productController from '../controllers/ProductController';

const router = new Router();

//rotas para o front
router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.get('/category/:category', productController.getProductsByCategory);

//rotas de desenvolvimento
router.put('/', productController.updateProduct);

router.post('/', productController.newProduct);

router.delete('/', productController.deleteProduct);

export default router;
