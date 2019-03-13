import Config from 'app.config';
import * as teams from 'assets/teams.json';

class TeamService {
  static getAllTeams() {
    const apiRequest = {
      method: 'GET',
      url: `${Config.baseUrl}teams.json`
    };

    return new Promise(resolve => {
      resolve({ data: teams.teams });
    });
  }

  static getTeamById(id) {
    return new Promise(resolve => {
      this.getAllTeams().then((response = { data: [] }) => {
        const found = response.data.find(team => team.id === id);
        resolve(found);
      });
    });
  }

  static getTeamsByCompetitionId(competitionId) {
    return new Promise(resolve => {
      this.getAllTeams().then((response = { data: [] }) => {
        const filtered = response.data.filter(
          team => team.competitionId === competitionId
        );
        resolve({ data: filtered });
      });
    });
  }

  static getTeamsByArea(area) {
    if (area.toLowerCase() === 'all') {
      return this.getAllTeams();
    }

    return new Promise(resolve => {
      this.getAllTeams().then((response = { data: [] }) => {
        const filtered = response.data.filter(team => team.area.name === area);
        resolve({ data: filtered });
      });
    });
  }
}

export default TeamService;
