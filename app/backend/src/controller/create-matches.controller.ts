import { Request, Response } from 'express';
import CreateMatchesService from '../services/create-matches.service';

export default class CreateMatchesController {
  static async create(req: Request, res: Response) {
    const match = req.body;

    const matchCreated = await CreateMatchesService.Create(match);
    return res.status(201).json(matchCreated);
  }
}
