import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

/**
 * Component for a homepage view route.
 *
 * @param {Array} topics - The list of photo topics (categories) to display.
 * @param {Array|Object} photos - The list of photos to display. Can be an array or an object.
 * @param {Array} favourites - An array of favourited photo IDs.
 * @param {function} updateToFavPhotoIds - Function triggered when the favourite button is clicked.
 * @param {function} onLoadTopic - Function triggered when a topic is selected.
 * @param {function} onLoadFavourites - Function triggered when the favourite badge is clicked.
 * @param {function} onRefetchAllPhotos - Function triggered when the app title is clicked.
 * @param {function} setPhotoSelected - Function triggered to select a photo.
 *
 * @returns {JSX.Element} - JSX element representing the homepage view route.
 */
const HomeRoute = ({
  topics,
  photos,
  favourites,
  updateToFavPhotoIds,
  onLoadTopic,
  onLoadFavourites,
  onRefetchAllPhotos,
  setPhotoSelected,
}) => {
  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className='home-route'>
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        onLoadTopic={onLoadTopic}
        onLoadFavourites={onLoadFavourites}
        onRefetchAllPhotos={onRefetchAllPhotos}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
