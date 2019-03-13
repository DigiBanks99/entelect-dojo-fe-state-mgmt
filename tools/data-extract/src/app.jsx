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
      matches: [],
      loading: {
        teams: false,
        matches: false
      },
      progress: {
        endTeams: 0,
        endMatches: 0,
        positionTeams: 0,
        positionMatches: 0
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
        this.getMatches(extractService, competitions);
        this.getCompetitionTeams(extractService, competitions);
      })
      .catch(err => console.error(err));
  }

  getMatches(extractService, competitions) {
    const promises = [];

    this.setData('loading.matches', true);
    this.setData('progress.endMatches', competitions.length);
    this.setData('progress.positionMatches', 0);

    competitions.forEach(competition =>
      promises.push(extractService.getMatches(competition.id))
    );

    Promise.all(promises)
      .then(async responses => {
        let allMatches = [];
        responses.forEach((response, index) => {
          allMatches = [...allMatches, ...response.data.matches];
          this.setData('loading.matches', false);
          this.setData('progress.endMatches', competitions.length);
          this.setData('progress.positionMatches', index + 1);
        });
        this.setData('matches', allMatches);
      })
      .catch(err => {
        this.setData('loading.matches', false);
        console.error(err);
      });
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

        this.setData('loading.teams', true);
        while (offset < teams.length) {
          this.setData('progress.endTeams', teams.length);
          this.setData('progress.positionTeams', offset);
          await this.sleep(61000);
          this.getTeams(extractService, teams, offset);
          offset += 10;
        }
        this.setData('progress.endTeams', teams.length);
        this.setData('progress.positionTeams', teams.length);
        this.setData('loading.teams', false);
      })
      .catch(err => {
        this.setData('loading.teams', false);
        if (err.code === '429') {
          this.sleep(30000);
          this.getCompetitionTeams(extractService, competitions);
        }
        console.error(err);
      });
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
      progress,
      matches
    } = this.state;

    const jsonAreas = JSON.stringify({ areas: areas }, null, 2);
    const jsonCompetitions = JSON.stringify(
      { competitions: competitions },
      null,
      2
    );
    const jsonTeams = JSON.stringify({ teams: teams }, null, 2);
    const jsonPlayers = JSON.stringify({ players: players }, null, 2);
    const jsonMatches = JSON.stringify({ matches: matches }, null, 2);

    const displayProgress = {
      end: progress.endMatches + progress.endTeams,
      position: progress.positionMatches + progress.positionTeams
    };
    const displayLoading = loading.teams && loading.matches;

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
          <Loader loading={displayLoading} progress={displayProgress} />
          <label className='app-label'>Areas</label>
          <code>
            <pre>{jsonAreas}</pre>
          </code>
          <label className='app-label'>Competitions</label>
          <code>
            <pre>{jsonCompetitions}</pre>
          </code>
          <label className='app-label'>Matches</label>
          <code>
            <pre>{jsonMatches}</pre>
          </code>
          <label className='app-label'>Teams</label>
          <code>
            <pre>{jsonTeams}</pre>
          </code>
          <label className='app-label'>Players</label>
          <code>
            <pre>{jsonPlayers}</pre>
          </code>
        </main>
      </div>
    );
  }
}

export default App;
