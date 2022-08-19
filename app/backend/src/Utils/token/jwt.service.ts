import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import LoginUserTypeDTO from '../../dtos/login-user-type';
import CustomError from '../CustomError';

export default class JwtService {
  static create(payload: LoginUserTypeDTO):string {
    return jwt.sign(payload, process.env.JWT_SECRET || 'secretPassoword', { expiresIn: '1y' });
  }

  static verify(token: string | undefined) {
    try {
      if (!token) throw new CustomError(401, 'token not found');
      return jwt.verify(token, process.env.JWT_SECRET || 'secretPassoword') as LoginUserTypeDTO;
    } catch {
      throw new CustomError(401, 'Token must be a valid token');
    }
  }
}
