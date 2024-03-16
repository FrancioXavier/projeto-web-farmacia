import { Router } from 'express';
import orderController from '../controllers/OrderController';

const router = new Router();

router.get('/', orderController.getOrders);

router.get('/:id', orderController.getOrderById);

router.post('/', orderController.newOrder);

router.put('/', orderController.updateOrder);

router.delete('/', orderController.deleteOrder);

export default router;
