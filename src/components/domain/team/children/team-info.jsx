import React, { Component } from 'react';

import { Image, KeyValue } from 'components/shared';
import { CompetitionService } from 'services';

import './team-info.scss';

class TeamInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.fetchCompetition(props.team.competitionId);
  }

  fetchCompetition(competitionId) {
    CompetitionService.getCompetitionById(competitionId).then(competition => {
      this.setState({ competition });
    });
  }

  render() {
    const { team } = this.props;

    const { competition } = this.state;

    return (
      <div className='team-info'>
        <div className='crest'>
          <Image src={team.crestUrl} alt={team.name} />
        </div>
        <div className='info'>
          <div className='caption'>Info</div>
          <ul className='info-list'>
            <KeyValue label='Name' value={team.name} />
            <KeyValue label='Short Name' value={team.shortName} />
            <KeyValue label='Code' value={team.tla} />
            <KeyValue label='Address' value={team.address} />
            <KeyValue label='Phone' value={team.phone} />
            <li className='key-value-display'>
              <div className='key'>Website</div>
              <a
                className='value'
                href={team.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                {team.website}
              </a>
            </li>
            <KeyValue label='Founded' value={team.founded} />
            <KeyValue label='Club Colours' value={team.clubColors} />
            <KeyValue label='Venue' value={team.venue} />
            {competition && competition.id && (
              <li className='key-value-display'>
                <div className='key'>Competition</div>
                <div className='value'>
                  <Image
                    src={competition.emblemUrl}
                    alt={competition.name}
                    height={50}
                  />
                  <span className='name'>{competition.name}</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamInfo;
