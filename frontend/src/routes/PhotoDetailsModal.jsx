import React, { useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({
  photo,
  favourites,
  updateToFavPhotoIds,
  onClosePhotoDetailsModal,
}) => {
  useEffect(() => {
    for (const key in photo.similar_photos) {
      if (photo.similar_photos.hasOwnProperty(key)) {
      }
    }
  }, [photo]);

  return (
    <div className='photo-details-modal'>
      <button
        className='photo-details-modal__close-button'
        onClick={() => onClosePhotoDetailsModal(false)}
      >
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__section'>
        <div className='photo-details-modal__card'>
          <div className='photo-details-modal__images'>
            <PhotoFavButton
              isFavourite={favourites && favourites.includes(photo.id)}
              updateToFavPhotoIds={() => updateToFavPhotoIds(photo.id)}
            />
            <img
              className='photo-details-modal__image'
              src={photo.urls.regular}
              alt={`Photo of ${photo.location.city}, ${photo.location.country}`}
            />

            <div className='photo-list__user-details'>
              <img
                className='photo-list__user-profile'
                src={photo.user.profile}
                alt={`Profile photo of ${photo.user.username}`}
              />
              <div className='photo-list__user-info'>
                {photo.user.name}
                <div className='photo-list__user-location'>
                  {photo.location.city}, {photo.location.country}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className='photo-details-modal__header'>Related Photos:</h3>
        <div className='photo-details-modal__images'>
          <PhotoList
            photos={photo.similar_photos}
            favourites={favourites}
            updateToFavPhotoIds={updateToFavPhotoIds}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
