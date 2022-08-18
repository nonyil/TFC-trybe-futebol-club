// import { StatusCodes } from 'http-status-codes';
import LoginUserTypeDTO from '../dtos/login-user-type';
import Users from '../models/create-users-model';
import BCrypt from '../Utils/bCrypt';
import CustomEror from '../Utils/CustomError';
import JwtService from '../Utils/token/jwt.service';

export default class CreateUserService {
  static async Login(login: LoginUserTypeDTO) {
    const userLogin = await Users
      .findOne({ where: { email: login.email } });

    if (!login.email || !login.password) {
      throw new CustomEror(400, 'All fields must be filled');
    }

    if (!userLogin || !userLogin.password) {
      throw new CustomEror(401, 'Incorrect email or password');
    }

    BCrypt.comparePassword(login.password, userLogin.password);

    const token = JwtService.create(login);
    if (!token) {
      throw new CustomEror(400, 'Invalid credentials');
    }

    return token;
  }
}
