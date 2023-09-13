import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  topics,
  photos,
  favourites,
  toggleFavourite,
  togglePhotoDetailsModal,
}) => {
  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        togglePhotoDetailsModal={togglePhotoDetailsModal}
      />
    </div>
  );
};

export default HomeRoute;
