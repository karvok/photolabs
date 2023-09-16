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
  onLoadAllPhotos,
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
        onLoadAllPhotos={onLoadAllPhotos}
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
