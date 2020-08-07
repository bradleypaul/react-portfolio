import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';
class Portfolio extends React.Component {
  // const { name, description } = currentCategory;
  render() {
    return (
      <section>
        {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} /> */}
      <div>My Projects</div>
      </section>
    );
  }
}

export default Portfolio;
