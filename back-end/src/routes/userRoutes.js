import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Rotas para o front
router.get('/', loginRequired, userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.newUser);

//Rotas de desenvolvimento
router.delete('/', userController.deleteUser);

router.put('/');

export default router;
