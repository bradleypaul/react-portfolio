import React from 'react';
function Modal({ onClose, currentPhoto }) {
  console.log(currentPhoto)
  const { name, description, index, repo, site } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/large/${index}.png`)} alt="current category" />
        <p>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button onClick={onClose} type="button">
            Close this modal
        </button>
          <a href={repo}>
            <button>
              Visit Repository
        </button>
          </a>
          <a href={site}>
          <button>
            Visit Live Site
        </button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;