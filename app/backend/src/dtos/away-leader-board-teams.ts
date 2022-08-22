import CreateTeams from '../database/models/create-teams-model';

export interface IAwayLeaderBoardTeam extends CreateTeams{
  id: number,
  team: string;
  awayMatches: {
    id: number;
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: number;
  }[];
}
