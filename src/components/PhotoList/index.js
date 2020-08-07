import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = () => {
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Moto Services',
      repo: 'https://github.com/bradleypaul/motor-services',
      site: "https://motor-services.herokuapp.com/welcome",
      description: 'User can track time and mileage on their vehicle and then be given a time frame for their next maintenance check.',
    },
    {
      name: 'Paper Locator',
      repo: "https://github.com/bradleypaul/dm-emergency-paper-locator",
      site: "https://bradleypaul.github.io/dm-emergency-paper-locator/",
      description: 'Easily locate online retail sources with essential paper products in stock',
    },
    {
      name: 'Budget Tracker',
      repo: "https://github.com/bradleypaul/budget-tracker",
      site: "https://blooming-tundra-95527.herokuapp.com/",
      description: 'A simple budget tracker for one user that demonstrates the use of PWAs, ServiceWorkers, and IndexedDB for offline use.',
    },
    {
      name: 'Password Generator (React)',
      repo: "https://github.com/bradleypaul/password-gen-react/",
      site: "https://password-gen-react.herokuapp.com/",
      description: 'Password generator written in React to demonstrate using state.',
    },
    {
      name: 'Pumpkins',
      repo: "https://github.com/bradleypaul/pumpkins",
      site: "https://bradleypaul.github.io/pumpkins/",
      description: 'Password generator written in React to demonstrate using state.',
    },
    {
      name: 'Food Festival',
      repo: "https://github.com/bradleypaul/food-festival",
      site: "https://bradleypaul.github.io/food-festival/",
      description: 'Food Festival app for foodies everywhere!',
    },
    
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/large/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            onClick={() => toggleModal(image, i)}
            repo={image.repo}
            site={image.site}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;