import React, { useState } from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { name, username, imageSource, location, profile, isFavourite } = props;
  const [isFave, setIsFave] = useState(isFavourite);

  const toggleFavourite = () => {
    setIsFave(!isFave);
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton isFavourite={isFave} toggleFavourite={toggleFavourite} />
      <img className='photo-list__image' src={imageSource} alt={`Photo of ${location.city}, ${location.country}`} />
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
