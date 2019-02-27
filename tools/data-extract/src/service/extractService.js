import axios from 'axios';

const ApiTokenHeader = 'X-Auth-Token';
class ExtractService {
  constructor(apiToken) {
    this.defaultGetRequest.headers[ApiTokenHeader] = apiToken;
    delete this.defaultGetRequest.headers['ApiTokenHeader'];
  }

  defaultGetRequest = {
    method: 'GET',
    url: 'http://api.football-data.org/v2/',
    headers: { ApiTokenHeader: null }
  };

  async getAreas() {
    const url = `${this.defaultGetRequest.url}areas`;
    const apiRequest = { ...this.defaultGetRequest, url };

    return await axios(apiRequest);
  }

  async getArea(area) {
    const url = `${this.defaultGetRequest.url}areas/${area}`;
    const apiRequest = { ...this.defaultGetRequest, url };

    return await axios(apiRequest);
  }

  async getCompetitions(area = null) {
    let url = `${this.defaultGetRequest.url}competitions?plan=TIER_ONE`;
    if (area) url = `${url}&areas=${area}`;
    const apiRequest = { ...this.defaultGetRequest, url };

    return await axios(apiRequest);
  }

  async getCompetitionTeams(competition) {
    const url = `${
      this.defaultGetRequest.url
    }competitions/${competition}/teams`;
    const apiRequest = { ...this.defaultGetRequest, url };

    return await axios(apiRequest);
  }

  async getTeam(team) {
    const url = `${this.defaultGetRequest.url}teams/${team}`;
    const apiRequest = { ...this.defaultGetRequest, url };

    return await axios(apiRequest);
  }
}

export default ExtractService;
