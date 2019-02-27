import React, { Component } from 'react';
import ExtractService from './service/extractService';
import Loader from './components/loader/loader';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiToken: '',
      areas: [],
      competitions: [],
      teams: [],
      players: [],
      loading: false,
      progress: {
        end: 0,
        position: 0
      }
    };

    this.handleApiTokenChange = this.handleApiTokenChange.bind(this);
    this.getAllData = this.getAllData.bind(this);
  }

  getAllData() {
    const extractService = new ExtractService(this.state.apiToken);
    this.getValidAreas(extractService);
  }

  getValidAreas(extractService) {
    extractService
      .getAreas()
      .then(response => {
        const validAreas = response.data.areas.filter(area =>
          this.filterValidArea(area.name)
        );

        this.setData('areas', validAreas);
        this.getCompetitions(
          extractService,
          validAreas.map(area => area.id).join()
        );
      })
      .catch(err => console.error(err));
  }

  getCompetitions(extractService, areas) {
    extractService
      .getCompetitions(areas)
      .then(response => {
        const competitions = response.data.competitions;
        this.setData('competitions', competitions);
        this.getCompetitionTeams(extractService, competitions);
      })
      .catch(err => console.error(err));
  }

  getCompetitionTeams(extractService, competitions) {
    const promises = [];
    competitions.forEach(competition =>
      promises.push(extractService.getCompetitionTeams(competition.id))
    );

    Promise.all(promises)
      .then(async responses => {
        let teams = [...this.state.teams];
        responses.forEach(
          response => (teams = [...teams, ...response.data.teams])
        );
        this.setData('teams', teams);
        let offset = 0;

        this.setData('loading', true);
        while (offset < teams.length) {
          this.setData('progress', { end: teams.length, position: offset });
          await this.sleep(61000);
          this.getTeams(extractService, teams, offset);
          offset += 10;
        }
        this.setData('progress', { end: teams.length, position: teams.length });
        this.setData('loading', false);
      })
      .catch(err => console.error(err));
  }

  getTeams(extractService, teams, offset) {
    var subTeams = this.getNextNItems(teams, 10, offset);
    this.getTeamResponsesForInterval(extractService, subTeams);
  }

  getNextNItems(items = [], n = 10, start = 0) {
    return items.slice(start, start + n);
  }

  getTeamResponsesForInterval(extractService = {}, teams = []) {
    const promises = [];

    teams.forEach(team => promises.push(extractService.getTeam(team.id)));

    Promise.all(promises)
      .then(responses => {
        let players = [...this.state.players];
        responses.forEach(response => {
          let { squad, id } = response.data;
          squad.forEach(person => {
            players = [
              ...players,
              {
                ...person,
                teamId: id
              }
            ];
          });
        });
        this.setData('players', players);
      })
      .catch(err => console.error(err));
  }

  filterValidArea(areaName) {
    return (
      areaName.toLocaleLowerCase() === 'england' ||
      areaName.toLocaleLowerCase() === 'france' ||
      areaName.toLocaleLowerCase() === 'germany' ||
      areaName.toLocaleLowerCase() === 'italy' ||
      areaName.toLocaleLowerCase() === 'spain'
    );
  }

  handleApiTokenChange(event) {
    this.setState({ apiToken: event.target.value });
  }

  setData(key, data) {
    this.setState({ [key]: data });
  }

  sleep(timeout = 60000) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  render() {
    const {
      apiToken,
      areas,
      competitions,
      teams,
      players,
      loading,
      progress
    } = this.state;
    const jsonAreas = JSON.stringify(areas, null, 2);
    const jsonCompetitions = JSON.stringify(competitions, null, 2);
    const jsonTeams = JSON.stringify(teams, null, 2);
    const jsonPlayers = JSON.stringify(players, null, 2);

    return (
      <div className='app'>
        <header className='app-header'>Data extractor</header>
        <main className='app-main'>
          <label className='app-label api-token' for='api-token'>
            Api Token
          </label>
          <input
            type='text'
            id='api-token'
            className='app-input-text'
            value={apiToken}
            onChange={this.handleApiTokenChange}
          />
          <button className='app-button' onClick={this.getAllData}>
            Get data
          </button>
          <Loader loading={loading} progress={progress} />
          <label className='app-label' for='api-token'>
            Areas
          </label>
          <code>
            <pre>{jsonAreas}</pre>
          </code>
          <label className='app-label' for='api-token'>
            Competitions
          </label>
          <code>
            <pre>{jsonCompetitions}</pre>
          </code>
          <label className='app-label' for='api-token'>
            Teams
          </label>
          <code>
            <pre>{jsonTeams}</pre>
          </code>
          <label className='app-label' for='api-token'>
            Players
          </label>
          <code>
            <pre>{jsonPlayers}</pre>
          </code>
        </main>
      </div>
    );
  }
}

export default App;
