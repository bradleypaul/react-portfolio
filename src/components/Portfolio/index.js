import React from 'react';
import PhotoList from '../PhotoList';
class Portfolio extends React.Component {
  // const { name, description } = currentCategory;
  render() {
    return (
      <section>
        {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} /> */}
      <h1>My Projects</h1>
      </section>
    );
  }
}

export default Portfolio;