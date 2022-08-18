// import LoginUserTypeDTO from '../dtos/login-user-type';
import Users from '../database/models/create-users-model';
import CustomError from '../Utils/CustomError';
import JwtService from '../Utils/token/jwt.service';

export default class GetUserService {
  static async getUser(token: string | undefined) {
    if (!token) throw new CustomError(401, 'token not found');
    const { email } = JwtService.verify(token);
    const user = await Users.findOne({ where: { email } }) as Users;
    if (!user) {
      throw new CustomError(404, 'User not found');
    }

    return user;
  }
}
