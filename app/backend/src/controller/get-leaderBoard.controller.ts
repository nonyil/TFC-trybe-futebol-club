import { Request, Response } from 'express';
import GetLeaderBoardService from '../services/get-leaderboard.service';

export default class GetLeaderBoardControlller {
  static async getLeaderBoard(req: Request, res: Response) {
    const boardTeams = await GetLeaderBoardService.getLeaderBoard();

    return res.status(200).json(boardTeams);
  }
}
