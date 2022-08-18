import { Router } from 'express';
import CreateUserController from '../controller/create-user.controller';

const router = Router();

router.post('/login', CreateUserController.create);

export default router;
