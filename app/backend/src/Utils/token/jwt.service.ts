import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import LoginUserTypeDTO from '../../dtos/login-user-type';

export default class JwtService {
  static create(payload: LoginUserTypeDTO):string {
    return jwt.sign(payload, process.env.JWT_SECRET || 'secretPassoword', { expiresIn: '1y' });
  }

  static verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET || 'secretPassoword') as LoginUserTypeDTO;
  }
}
