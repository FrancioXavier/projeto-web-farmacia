import { Router } from 'express';
import photoController from '../controllers/PhotoController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/:id', /*loginRequired,*/ photoController.store);

export default router;
