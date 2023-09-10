import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isFavourite, toggleFavourite } = props;
  return (
    <div className='photo-list__fav-icon' onClick={toggleFavourite}>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
