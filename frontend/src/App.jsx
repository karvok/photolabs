import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        topics={topics}
        photos={state.photoData}
        favourites={state.favourites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
      {state.displayModal && (
        <PhotoDetailsModal
          photo={state.displayModal}
          favourites={state.favourites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
