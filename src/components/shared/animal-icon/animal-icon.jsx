import React from 'react';
import PropTypes from 'prop-types';
import { Animals as AnimalConsts } from 'app.constants';
import { Svgs } from 'resources';

function AnimalIcon({ animal, height, width }) {
  switch (animal) {
    case AnimalConsts.CAT:
      return <Svgs.Animals.Cat height={height} width={width} />;
    case AnimalConsts.DOG:
      return <Svgs.Animals.Dog height={height} width={width} />;
    case AnimalConsts.GOLDFISH:
      return <Svgs.Animals.Goldfish height={height} width={width} />;
    case AnimalConsts.MOUSE:
      return <Svgs.Animals.Mouse height={height} width={width} />;
    case AnimalConsts.PARROT:
      return <Svgs.Animals.Parrot height={height} width={width} />;
    default:
      return <div>Invalid</div>;
  }
}

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
