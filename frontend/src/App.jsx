import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

/**
 * Main component responsible for rendering the entire app.
 *
 * @returns {JSX.Element} The rendered application.
 */
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onLoadTopic,
    onLoadFavourites,
    onRefetchAllPhotos,
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
        onRefetchAllPhotos={onRefetchAllPhotos}
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
