/* eslint-disable max-lines-per-function */
import { IAwayLeaderBoardTeam } from '../../dtos/away-leader-board-teams';
import ILeaderBoard from '../../dtos/leader-board';

function awayLeaderBoardFormat(awayBoard: ILeaderBoard[]) {
  const awaySortBoard = awayBoard.sort((a, b) =>
    b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);
  return awaySortBoard;
}

export default function awayFormatBoard(awayBoardTeams: IAwayLeaderBoardTeam[]) {
  const listBoard = awayBoardTeams.map((team: IAwayLeaderBoardTeam) => {
    let totalPoints = 0; let totalGames = 0; let totalVictories = 0;
    let totalDraws = 0; let totalLosses = 0; let goalsFavor = 0;
    let goalsOwn = 0; let goalsBalance = 0;
    team.awayMatches.forEach((a) => {
      if (a.homeTeamGoals < a.awayTeamGoals) totalVictories += 1;
      if (a.homeTeamGoals === a.awayTeamGoals) totalDraws += 1;
      if (a.homeTeamGoals > a.awayTeamGoals) totalLosses += 1;
      if (a.homeTeamGoals < a.awayTeamGoals) totalPoints += 3;
      if (a.homeTeamGoals === a.awayTeamGoals) totalPoints += 1;
      totalGames += 1; goalsFavor += a.awayTeamGoals; goalsOwn += a.homeTeamGoals;
    });
    goalsBalance = goalsFavor - goalsOwn;
    const efficiency = parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
    return {
      name: team.teamName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  });
  return awayLeaderBoardFormat(listBoard);
}
