import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const { photo, name, username, imageSource, location, profile, isFavourite, toggleFavourite } = props;
  
  const handlePhotoClick = () => props.openPhotoDetailsModal(photo);

  return (
    <div className='photo-list__item'>
      <PhotoFavButton isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
      <img className='photo-list__image' src={imageSource} alt={`Photo of ${location.city}, ${location.country}`} onClick={handlePhotoClick} />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} alt={`Profile photo of ${username}`} />
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
