import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const handleFavouritesClick = () => {
    console.log(`😍 Clicked! Existing favourited photos: ${isFavPhotoExist}`);
  };

  return (
    <div className='fav-badge' onClick={handleFavouritesClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;
