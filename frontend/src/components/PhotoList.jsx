import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favourites, toggleFavourite, openPhotoDetailsModal, }) => {
  let photoArray = [];

  if (Array.isArray(photos)) {
    photoArray = photos;
  } else if (typeof photos === 'object') {
    photoArray = Object.values(photos);
  }

  return (
    <ul className='photo-list'>
      {photoArray.map((photo, index) => (
        <li key={photo.id + index}>
          <PhotoListItem
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            name={photo.user.name}
            profile={photo.user.profile}
            isFavourite={favourites && favourites.includes(photo.id)}
            toggleFavourite={() => toggleFavourite(photo.id)}
            openPhotoDetailsModal={openPhotoDetailsModal}
            photo={photo}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
