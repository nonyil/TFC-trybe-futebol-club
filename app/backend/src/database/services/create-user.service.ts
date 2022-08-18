import { StatusCodes } from 'http-status-codes';
import LoginUserTypeDTO from '../dtos/login-user-type';
import CustomEror from '../Utils/CustomError';
import JwtService from '../Utils/token/jwt.service';

export default class CreateUserService {
  static Login(login: LoginUserTypeDTO): string {
    const token = JwtService.create(login);

    if (!token) {
      throw new CustomEror(StatusCodes.BAD_REQUEST, 'Invalid credentials');
    }

    return token;
  }
}
