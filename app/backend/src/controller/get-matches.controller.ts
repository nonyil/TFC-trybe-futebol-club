import { Request, Response } from 'express';
import GetMatchesService from '../services/get-matches.service';

export default class GetMatchesController {
  static async getMatches(_req: Request, res: Response) {
    const matches = await GetMatchesService.getMatches();
    return res.status(200).json(matches);
  }
}
