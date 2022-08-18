import LoginUserTypeDTO from '../dtos/login-user-type';
import Users from '../database/models/create-users-model';
import BCrypt from '../Utils/bCrypt';
import CustomError from '../Utils/CustomError';
import JwtService from '../Utils/token/jwt.service';

export default class CreateUserService {
  static async Login(login: LoginUserTypeDTO) {
    const userLogin = await Users
      .findOne({ where: { email: login.email } }) as Users;

    if (!userLogin) {
      throw new CustomError(401, 'Incorret email or password');
    }

    BCrypt.comparePassword(login.password, userLogin.password);
    const token = JwtService.create(login);
    // console.log(token);

    // if (!token) {
    //   throw new CustomEror(400, 'Invalid credentials');
    // }
    return token;
  }
}
