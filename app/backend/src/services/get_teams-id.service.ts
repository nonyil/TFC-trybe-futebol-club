import CreateTeams from '../database/models/create-teams-model';

export default class GetTeamsByIdService {
  static async getTeamsById(id: number) {
    const teams = await CreateTeams.findOne({ where: { id } });
    return teams;
  }
}
