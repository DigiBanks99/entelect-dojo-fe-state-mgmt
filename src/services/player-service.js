import Config from 'app.config';
import TeamService from './team-service';

import * as players from 'assets/player.json';

const ENDPOINT = Config.baseUrl + 'player.json';

class PlayerService {
  static getAllPlayers() {
    const apiRequest = {
      method: 'GET',
      url: `${ENDPOINT}`
    };
    return new Promise(resolve => {
      const data = [
        ...players.players.filter(
          player => player.role.toLocaleUpperCase() === 'PLAYER'
        )
      ];

      data.sort((a, b) => {
        const nameA = (a.name || '').toLocaleLowerCase();
        const nameB = (b.name || '').toLocaleLowerCase();

        if (nameA < nameB) return -1;

        if (nameA === nameB) return 0;

        return 1;
      });

      data.forEach(player => {
        TeamService.getTeamById(player.teamId).then(team => {
          player.teamName = team.name;
          player.crestUrl = team.crestUrl;
        });
      });

      resolve({
        data: data
      });
    });
  }

  static getPlayerById(id) {
    return new Promise(resolve => {
      this.getAllPlayers().then(({ data }) => {
        const p = data.find(player => {
          return player.id === +id;
        });
        resolve({ data: p });
      });
    });
  }

  static getPlayerByTeam(team) {
    if (team.toLowerCase() === 'all') {
      return this.getAllPlayers();
    }

    return new Promise(resolve => {
      this.getAllPlayers().then((response = { data: [] }) => {
        const filtered = response.data.filter(
          player => player.teamName === team
        );
        resolve({ data: filtered });
      });
    });
  }

  static getPlayerByTeamId(teamId) {
    return new Promise(resolve => {
      this.getAllPlayers().then(({ data }) => {
        const filtered = data.filter(player => player.teamId === teamId);
        resolve({ data: filtered });
      });
    });
  }
}

export default PlayerService;
