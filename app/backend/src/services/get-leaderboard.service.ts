import { ILeaderBoardTeam } from '../dtos/leader-board-team';
import leaderBoardFormat from '../Utils/format-board/leader-board-format';
import CreateMatches from '../database/models/create-matches-model';
import CreateTeams from '../database/models/create-teams-model';

export default class GetLeaderBoardService {
  static async getLeaderBoard() {
    const boardTeams = await CreateTeams.findAll({
      include: [
        { model: CreateMatches, as: 'homeMatches', where: { inProgress: false } },
      ],
    }) as ILeaderBoardTeam[];

    const leaderBoard = leaderBoardFormat(boardTeams);

    return leaderBoard;
  }
}
