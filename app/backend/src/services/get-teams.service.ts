import CreateTeams from '../database/models/create-teams-model';

export default class GetTeamsService {
  static async getTeams() {
    const teams = await CreateTeams.findAll();
    return teams;
  }
}
