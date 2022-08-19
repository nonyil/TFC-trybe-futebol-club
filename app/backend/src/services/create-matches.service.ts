import CustomError from '../Utils/CustomError';
import CreateMatches from '../database/models/create-matches-model';
import CreateMatchesDTO from '../dtos/matches-type';

export default class CreateMatchesService {
  static async Create(match: CreateMatchesDTO) {
    if (match.homeTeam === match.awayTeam) {
      throw new CustomError(401, 'It is not possible to create a match with two equal teams');
    }

    const firstTeam = await CreateMatches.findOne({
      where: { id: match.homeTeam },
    });

    const secondTeam = await CreateMatches.findOne({
      where: { id: match.awayTeam },
    });

    if (!firstTeam || !secondTeam) {
      throw new CustomError(404, 'There is no team with such id!');
    }

    const matchCreated = await CreateMatches.create(match);
    return matchCreated;
  }
}
