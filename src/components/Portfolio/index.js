import React from 'react';
import PhotoList from '../PhotoList';
class Portfolio extends React.Component {
  // const { name, description } = currentCategory;
  render() {
    return (
      <section>
        <h1>My Projects</h1>
        <PhotoList />
      </section>
    );
  }
}

export default Portfolio;
