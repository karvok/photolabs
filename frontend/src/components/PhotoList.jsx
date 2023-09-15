import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({
  photos,
  favourites,
  updateToFavPhotoIds,
  setPhotoSelected,
}) => {
  let photoArray = [];

  if (Array.isArray(photos)) {
    photoArray = photos;
  } else if (typeof photos === 'object') {
    photoArray = Object.values(photos);
  }

  return (
    <ul className='photo-list'>
      {photoArray.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            name={photo.user.name}
            profile={photo.user.profile}
            isFavourite={favourites && favourites.includes(photo.id)}
            updateToFavPhotoIds={() => updateToFavPhotoIds(photo.id)}
            setPhotoSelected={setPhotoSelected}
            photo={photo}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
