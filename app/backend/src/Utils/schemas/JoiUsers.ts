import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import CustomEror from '../CustomError';

const message = 'All fields must be filled';
export default class LoginSchema {
  static loginSchema(req: Request, _res: Response, next: NextFunction) {
    const loginSchema = Joi.object({
      email: Joi.string().email().required().empty()
        .messages({
          'string.email': 'Invalid email',
          'any.required': message,
          'string.empty': message }),
      password: Joi.string().min(6).required().empty()
        .messages({
          'string.min': 'Password must be at least 6 characters',
          'any.required': message,
          'string.empty': message }),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) throw new CustomEror(400, error.message);
    return next();
  }
}
