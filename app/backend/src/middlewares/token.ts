import { NextFunction, Request, Response } from 'express';
import JwtService from '../Utils/token/jwt.service';
import CustomError from '../Utils/CustomError';

export default class TokenService {
  static async verifyToken(req: Request, _res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new CustomError(401, 'token not found');
    const tokenIsValid = JwtService.verify(authorization);
    if (!tokenIsValid) throw new CustomError(401, 'token is not valid');
    next();
  }
}
