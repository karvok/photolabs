import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

/**
 * Component for a list of photos.
 *
 * @param {Array|Object} photos - The list of photos to display. Can be an array or an object.
 * @param {Array} favourites - An array of favourited photo IDs.
 * @param {function} updateToFavPhotoIds - Function triggered when the favourite button is clicked.
 * @param {function} setPhotoSelected - Function triggered to select a photo.
 *
 * @returns {JSX.Element} - JSX element representing the list of photos.
 */
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
