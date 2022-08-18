import { Router } from 'express';
import GetUserController from '../controller/get-user.controller';
import CreateUserController from '../controller/create-user.controller';
import LoginSchema from '../Utils/schemas/JoiUsers';

const router = Router();

router.post('/login', LoginSchema.loginSchema, CreateUserController.create);

router.get('/login/validate', GetUserController.getUser);

export default router;
