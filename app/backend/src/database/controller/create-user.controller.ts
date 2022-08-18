import { Request, Response } from 'express';
import CreateUserService from '../services/create-user.service';

export default class CreateUserController {
  static async create(req: Request, res: Response) {
    const login = req.body;
    const user = await CreateUserService.Login(login);
    return res.status(201).json({ token: user });
  }
}
