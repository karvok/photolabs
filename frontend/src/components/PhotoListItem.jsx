import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

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
  const handlePhotoClick = () => {
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
        onClick={handlePhotoClick}
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
