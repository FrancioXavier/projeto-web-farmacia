import { Router } from 'express';
import orderController from '../controllers/OrderController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, orderController.getOrdersByUser);

router.get('/:id', loginRequired, orderController.getOrderById);

router.post('/', loginRequired, orderController.newOrder);

router.put('/', loginRequired, orderController.updateOrder);

router.delete('/', loginRequired, orderController.deleteOrder);

export default router;
