import TeamService from './team-service';
import * as matches2002 from 'assets/matches.2002.json';
import * as matches2014 from 'assets/matches.2014.json';
import * as matches2015 from 'assets/matches.2015.json';
import * as matches2016 from 'assets/matches.2016.json';
import * as matches2019 from 'assets/matches.2019.json';
import * as matches2021 from 'assets/matches.2021.json';

const matchSets = {
  2002: matches2002.matches,
  2014: matches2014.matches,
  2015: matches2015.matches,
  2016: matches2016.matches,
  2019: matches2019.matches,
  2021: matches2021.matches
};

class MatchService {
  static getCompetitionMatches(competitionId) {
    return new Promise(resolve => {
      resolve(matchSets[competitionId]);
    });
  }

  static getTeamMatches(teamId) {
    return new Promise(resolve => {
      TeamService.getTeamById(teamId).then(team => {
        MatchService.getCompetitionMatches(team.competitionId).then(matches =>
          resolve(matches)
        );
      });
    });
  }
}

export default MatchService;
