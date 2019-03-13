import { PlayerService, MatchService } from 'services';

class StatsService {
  static getPlayerStats(playerId) {
    return new Promise(resolve =>
      PlayerService.getPlayerById(playerId).then(({ data }) =>
        MatchService.getTeamMatches(data.teamId).then((matches = []) => {
          const stats = {
            goals: 0,
            assists: 0,
            starts: 0,
            subApps: 0,
            yellow: 0,
            red: 0
          };

          matches.forEach(match => {
            match.homeTeam.lineup.forEach(player => {
              if (player.id === playerId) stats.starts++;
            });

            match.homeTeam.bench.forEach(player => {
              if (player.id === playerId) stats.subApps++;
            });

            match.awayTeam.lineup.forEach(player => {
              if (player.id === playerId) stats.starts++;
            });

            match.awayTeam.bench.forEach(player => {
              if (player.id === playerId) stats.subApps++;
            });

            match.goals.forEach(goal => {
              if (goal.scorer.id === playerId) stats.goals++;
              if (goal.assist && goal.assist.id === playerId) stats.assists++;
            });

            match.bookings.forEach(booking => {
              if (booking.player.id === playerId) {
                if (booking.card === 'YELLOW_CARD') stats.yellow++;
                if (booking.card === 'RED_CARD') stats.red++;
              }
            });
          });

          resolve({ data: stats });
        })
      )
    );
  }
}

export default StatsService;
