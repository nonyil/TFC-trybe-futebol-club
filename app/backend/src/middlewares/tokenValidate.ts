import { NextFunction, Request, Response } from 'express';
import JwtService from '../Utils/token/jwt.service';
// import CustomError from '../Utils/CustomError';

const tokenValidate = async (req: Request, _res: Response, next: NextFunction) => {
  const { headers } = req;
  const token = headers.authorization;
  JwtService.verify(token);
  return next();
};

export default tokenValidate;
