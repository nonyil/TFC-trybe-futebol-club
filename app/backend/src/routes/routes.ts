import { Router } from 'express';
import CreateUserController from '../controller/create-user.controller';
import LoginSchema from '../Utils/schemas/JoiUsers';

const router = Router();

router.post('/login', LoginSchema.loginSchema, CreateUserController.create);

export default router;
