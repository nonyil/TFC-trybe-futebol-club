import * as bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import CustomEror from './CustomError';

export default class BCrypt {
  static encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  static comparePassword(password: string, hash: string) {
    const key = bcrypt.compareSync(password, hash);
    if (!key) {
      throw new CustomEror(StatusCodes.BAD_REQUEST, 'Password does not match');
    }
  }
}
