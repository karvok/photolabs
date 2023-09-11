import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, openPhotoDetailsModal } = props;
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavourites((previousFavourites) => {
      const updatedFavourites = previousFavourites.includes(photoId)
        ? previousFavourites.filter((selectedPhoto) => selectedPhoto !== photoId)
        : [...previousFavourites, photoId];

      return updatedFavourites;
    });
  };

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openPhotoDetailsModal={openPhotoDetailsModal}
      />
    </div>
  );
};

export default HomeRoute;
