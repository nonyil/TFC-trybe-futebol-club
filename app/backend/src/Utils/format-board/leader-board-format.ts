import ILeaderBoard from '../../dtos/leader-board';
/* eslint-disable max-lines-per-function */
import { ILeaderBoardTeam } from '../../dtos/leader-board-team';

function sort(leaderBoard: ILeaderBoard[]) {
  const sorted = leaderBoard.sort((a, b) =>
    b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);

  return sorted;
}

export default function leaderBoardFormat(boardTeams: ILeaderBoardTeam[]) {
  const leaderBoard = boardTeams.map((team: ILeaderBoardTeam) => {
    let totalPoints = 0; let totalGames = 0; let totalVictories = 0; let totalDraws = 0;
    let totalLosses = 0; let goalsFavor = 0; let goalsOwn = 0; let goalsBalance = 0;
    team.homeMatches.forEach((a) => {
      if (a.homeTeamGoals > a.awayTeamGoals) { totalVictories += 1; } // +vitorias
      if (a.homeTeamGoals === a.awayTeamGoals) { totalDraws += 1; } // +empates
      if (a.homeTeamGoals < a.awayTeamGoals) { totalLosses += 1; } // +derrotas
      if (a.homeTeamGoals > a.awayTeamGoals) { totalPoints += 3; } // + pontos vitorias
      if (a.homeTeamGoals === a.awayTeamGoals) { totalPoints += 1; } // + pontos empate
      totalGames += 1; goalsFavor += a.homeTeamGoals; goalsOwn += a.awayTeamGoals;
    });
    goalsBalance = goalsFavor - goalsOwn;
    const efficiency = parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
    return { name: team.teamName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency };
  });
  return sort(leaderBoard);
}
