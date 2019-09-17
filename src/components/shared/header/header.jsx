import './header.scss';
import { AppBar, Toolbar } from '@material-ui/core';
import { AnimalService } from 'components/services';
import { HeaderAnimal } from './header-animal';
import { HeaderHome } from './header-home';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history, match, description }) => {
  const isHome = history.location.pathname === '/';
  const petName = match.params.petName;
  const animal = AnimalService.instance.getAnimal(petName);
  return (
    <AppBar>
      <Toolbar>
        {isHome ? (
          <HeaderHome />
        ) : (
          <HeaderAnimal
            type={(animal || { type: 'CAT' }).type}
            petName={petName}
            description={description}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
