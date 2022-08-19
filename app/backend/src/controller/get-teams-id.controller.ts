import { Request, Response } from 'express';
import GetTeamsByIdService from '../services/get_teams-id.service';

export default class GetTeamsByIdController {
  static async getTeamsById(req: Request, res: Response) {
    const { id } = req.params;
    const teams = await GetTeamsByIdService.getTeamsById(+(id));
    return res.status(200).json(teams);
  }
}
