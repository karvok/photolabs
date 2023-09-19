import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/**
 * Component for a favourite badge.
 *
 * @param {boolean} isFavPhotoExist - Indicates if any favourited photos exist.
 * @param {function} onLoadFavourites - Function triggered when the favourite badge is clicked.
 *
 * @returns {JSX.Element} - JSX element representing the favourite badge.
 */
const FavBadge = ({ isFavPhotoExist, onLoadFavourites }) => {
  const handleClick = () => {
    onLoadFavourites(isFavPhotoExist);
  };

  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;
