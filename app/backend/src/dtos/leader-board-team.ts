import CreateTeams from '../database/models/create-teams-model';

export interface ILeaderBoardTeam extends CreateTeams{
  id: number,
  team: string;
  homeMatches: {
    id: number;
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: number;
  }[];
}
