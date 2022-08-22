import { Request, Response } from 'express';
import GetAwayLeaderBoardService from '../services/get-away-leader-board.service';

export default class GetAwayLeaderBoardControlller {
  static async getAwayLeaderBoard(req: Request, res: Response) {
    const boardTeams = await GetAwayLeaderBoardService.getAwayLeaderBoard();

    return res.status(200).json(boardTeams);
  }
}
