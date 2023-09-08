import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, location, profile } = props;
  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={imageSource} alt={`Photo of ${location.city}, ${location.country}`} />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} alt={`Profile photo of ${username}`} />
        <div className='photo-list__user-info'>
          {username}
          <div className='photo-list__user-location'>
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
