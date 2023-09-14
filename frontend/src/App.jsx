import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [photoDetailsModal, setPhotoDetailsModal] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const togglePhotoDetailsModal = (photo) => {
    if (photoDetailsModal === null) {
      setPhotoDetailsModal(photo);
    } else {
      setPhotoDetailsModal(null);
    }
  };

  const toggleFavourite = (photoId) => {
    setFavourites((previousFavourites) => {
      const updatedFavourites = previousFavourites.includes(photoId)
        ? previousFavourites.filter(
            (selectedPhoto) => selectedPhoto !== photoId
          )
        : [...previousFavourites, photoId];

      return updatedFavourites;
    });
  };

  return (
    <div className='App'>
      <HomeRoute
        topics={topics}
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        togglePhotoDetailsModal={togglePhotoDetailsModal}
      />
      {photoDetailsModal && (
        <PhotoDetailsModal
          photo={photoDetailsModal}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          togglePhotoDetailsModal={togglePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
