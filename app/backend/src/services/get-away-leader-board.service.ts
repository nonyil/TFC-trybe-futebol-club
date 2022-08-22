import awayFormatBoard from '../Utils/format-board/away-leader-board-format';
import CreateMatches from '../database/models/create-matches-model';
import CreateTeams from '../database/models/create-teams-model';
import { IAwayLeaderBoardTeam } from '../dtos/away-leader-board-teams';

export default class GetAwayLeaderBoardService {
  static async getAwayLeaderBoard() {
    const boardTeams = await CreateTeams.findAll({
      include: [
        { model: CreateMatches, as: 'awayMatches', where: { inProgress: false } },
      ],
    }) as IAwayLeaderBoardTeam[];

    const leaderBoard = awayFormatBoard(boardTeams);

    return leaderBoard;
  }
}
