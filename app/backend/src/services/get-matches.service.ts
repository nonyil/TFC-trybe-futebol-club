import CreateTeams from '../database/models/create-teams-model';
import CreateMatches from '../database/models/create-matches-model';

export default class GetMatchesService {
  static async getMatches() {
    const matches = await CreateMatches.findAll({
      include: [
        { model: CreateTeams, as: 'teamHome', attributes: ['teamName'] },
        { model: CreateTeams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }
}
