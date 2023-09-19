import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

/**
 * Component for a single photo item in a list.
 *
 * @param {Object} photo - The photo data.
 * @param {string} name - Name of the user who added the photo.
 * @param {string} username - Username of the photo owner.
 * @param {string} imageSource - Source URL for the photo image.
 * @param {Object} location - Location information details for the photo.
 * @param {string} profile - Source URL for the user's profile photo.
 * @param {boolean} isFavourite - Indicates if the photo is favourited.
 * @param {function} updateToFavPhotoIds - Function triggered when the favourite button is clicked.
 * @param {function} setPhotoSelected - Function triggered to select a photo.
 *
 * @returns {JSX.Element} JSX element representing a single photo list item.
 */
const PhotoListItem = ({
  photo,
  name,
  username,
  imageSource,
  location,
  profile,
  isFavourite,
  updateToFavPhotoIds,
  setPhotoSelected,
}) => {
  const handleClick = () => {
    if (typeof setPhotoSelected === 'function') {
      setPhotoSelected(photo);
    }
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton
        isFavourite={isFavourite}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      <img
        className='photo-list__image'
        src={imageSource}
        alt={`Photo of ${location.city}, ${location.country}`}
        onClick={handleClick}
      />
      <div className='photo-list__user-details'>
        <img
          className='photo-list__user-profile'
          src={profile}
          alt={`Profile photo of ${username}`}
        />
        <div className='photo-list__user-info'>
          {name}
          <div className='photo-list__user-location'>
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
