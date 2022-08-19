import CreateMatches from '../database/models/create-matches-model';

export default class PatchMatchesService {
  static async Patch(id: string) {
    const matchUpdate = await CreateMatches.update({
      inProgress: false,
    }, { where: { id } });

    return matchUpdate;
  }
}
