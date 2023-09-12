import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {

  const [photoDetailsInModal, setPhotoDetailsInModal] = useState(null);

  const togglePhotoDetailsInModal = (photo) => {
    if (photoDetailsInModal === null) {
      setPhotoDetailsInModal(photo);
    } else {
      setPhotoDetailsInModal(null);
    }
  };

  return (
    <div className='App'>
      <HomeRoute
        photos={photos}
        topics={topics}
        openPhotoDetailsModal={togglePhotoDetailsInModal}
      />
      {photoDetailsInModal && (
        <PhotoDetailsModal photo={photoDetailsInModal} closePhotoDetailsModal={togglePhotoDetailsInModal} />
      )}
    </div>
  );
};

export default App;
