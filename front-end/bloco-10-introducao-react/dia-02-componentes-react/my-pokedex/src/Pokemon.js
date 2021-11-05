import React from 'react';
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { pokemon: {name, type, averageWeight, image} } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name}></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
  }).isRequired
};

export default Pokemon;