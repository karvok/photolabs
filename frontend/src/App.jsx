import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onLoadTopic,
    onLoadFavourites,
    onLoadAllPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favourites={state.favourites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        onLoadTopic={onLoadTopic}
        onLoadFavourites={onLoadFavourites}
        onLoadAllPhotos={onLoadAllPhotos}
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
