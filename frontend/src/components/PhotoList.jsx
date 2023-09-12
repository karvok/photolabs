import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favourites, toggleFavourite, openPhotoDetailsModal }) => {
  return (
    <ul className='photo-list'>
      {photos.map((photo, index) => (
        <li key={photo.id + index}>
          <PhotoListItem
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            name={photo.user.name}
            profile={photo.user.profile}
            isFavourite={favourites.includes(photo.id)}
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
