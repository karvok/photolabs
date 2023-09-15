import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavourite, updateToFavPhotoIds }) {
  return (
    <div className='photo-list__fav-icon' onClick={updateToFavPhotoIds}>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
