import ScoreType from '../dtos/score-type';
import CreateMatches from '../database/models/create-matches-model';

export default class PatchMatchByIdService {
  static async Patch(id: string, score: ScoreType) {
    const matchUpdateById = await CreateMatches.update(
      {
        homeTeamGoals: score.homeTeamGoals,
        awayTeamGoals: score.awayTeamGoals },
      {
        where: { id },
      },
    );

    return matchUpdateById;
  }
}
