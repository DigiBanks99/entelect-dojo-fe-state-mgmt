import React from 'react';
import PropTypes from 'prop-types';
import { Animals as AnimalConsts } from 'app.constants';
import { Svgs } from 'resources';

const AnimalIcon = ({ animal, height, width }) => {
  switch (animal) {
    case AnimalConsts.CAT:
      return <Svgs.Animals.Cat height={height} width={width} />;
    case AnimalConsts.DOG:
      return <Svgs.Animals.Dog height={height} width={width} />;
    default:
      return <div>Invalid</div>;
  }
};

AnimalIcon.propTypes = {
  animal: PropTypes.oneOf(Object.values(AnimalConsts)).isRequired,
  height: PropTypes.number,
  width: PropTypes.number
};

AnimalIcon.defaultProps = {
  height: 50,
  width: 50
};

export default AnimalIcon;
