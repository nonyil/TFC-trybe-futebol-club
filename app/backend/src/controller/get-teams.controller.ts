import { Request, Response } from 'express';
import GetTeamsService from '../services/get-teams.service';

export default class GetTeamsController {
  static async getTeams(_req: Request, res: Response) {
    const teams = await GetTeamsService.getTeams();
    return res.status(200).json(teams);
  }
}
