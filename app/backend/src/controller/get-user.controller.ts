import { Request, Response } from 'express';
import GetUserService from '../services/get-users.service';

export default class GetUserController {
  static async getUser(req: Request, res: Response) {
    const { authorization } = req.headers;

    const user = await GetUserService.getUser(authorization);
    return res.status(200).json({ role: user.role });
  }
}
