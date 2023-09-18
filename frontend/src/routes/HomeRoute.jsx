import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

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
