import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

/**
 * Component for a favourite button.
 *
 * @param {boolean} isFavourite - Indicates if the photo is favourited.
 * @param {function} updateToFavPhotoIds - Function triggered when the favourite button is clicked.
 *
 * @returns {JSX.Element} - JSX element representing the favourite button.
 */
const PhotoFavButton = ({ isFavourite, updateToFavPhotoIds }) => {
  return (
    <div className='photo-list__fav-icon' onClick={updateToFavPhotoIds}>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
