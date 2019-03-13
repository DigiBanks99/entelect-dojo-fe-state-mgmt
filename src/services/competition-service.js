import Config from 'app.config';
import * as competitions from 'assets/competition.json';

class CompetitionService {
  static getAllCompetitions() {
    const apiRequest = {
      method: 'GET',
      url: `${Config.baseUrl}competition.json`
    };

    return new Promise(resolve => {
      resolve({ data: competitions.competitions});
    });
  }

  static getCompetitionById(id) {
    return new Promise(resolve => {
      this.getAllCompetitions().then((response = {data: []}) => {
        const found = response.data.find(competition => competition.id === id);
        resolve(found);
      })
    });
  }
}

export default CompetitionService;