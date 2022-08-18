import { Request, Response } from 'express';
import CreateUserService from '../services/create-user.service';
// import CustomEror from '../Utils/CustomError';

export default class CreateUserController {
  static async create(req: Request, res: Response) {
    const login = req.body;
    // console.log(login);

    const user = await CreateUserService.Login(login);
    return res.status(200).json({ token: user });
  }
}
