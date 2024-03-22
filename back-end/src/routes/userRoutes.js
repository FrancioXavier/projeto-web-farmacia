import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Rotas para o front
router.get('/', userController.getUsers);

router.get('/byid', loginRequired, userController.getUserById);

router.post('/', userController.newUser);

//Rotas de desenvolvimento
router.delete('/', loginRequired, userController.deleteUser);

router.put('/', loginRequired, userController.updateUser);

export default router;
