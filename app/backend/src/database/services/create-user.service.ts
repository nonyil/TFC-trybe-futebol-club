import LoginUserTypeDTO from '../dtos/login-user-type';
import JwtService from '../Utils/token/jwt.service';

export default class CreateUserService {
  static Login(login: LoginUserTypeDTO): string {
    const token = JwtService.create(login);
    return token;
  }
}
