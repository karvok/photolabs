import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [isPhotoDetailsModalOpen, setIsPhotoDetailsModalOpen] = useState(false);
  const openPhotoDetailsModal = () => setIsPhotoDetailsModalOpen(true);

  return (
    <div className='App'>
      <HomeRoute photos={photos} topics={topics} openPhotoDetailsModal={openPhotoDetailsModal} />
      {isPhotoDetailsModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
