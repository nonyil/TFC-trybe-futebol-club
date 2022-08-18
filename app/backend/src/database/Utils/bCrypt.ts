import * as bcrypt from 'bcryptjs';

export default class BCrypt {
  static encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  static comparePassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
