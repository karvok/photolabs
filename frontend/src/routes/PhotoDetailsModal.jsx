import React, { useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closePhotoDetailsModal, photo }) => {
  // TODO: Remove console logs
  // console.log("PHOTO: ", photo)
  // console.log(
  //   `😎 Clicked photo id ${photo.id} with full URL: ${photo.urls.full}`
  // );
  // console.log(`😎 Similar photos:`);

  useEffect(() => {
    for (const key in photo.similar_photos) {
      if (photo.similar_photos.hasOwnProperty(key)) {
        // const similarPhoto = photo.similar_photos[key];
        // console.log(
        //   `😎 Similar photo id ${similarPhoto.id} with URL: ${similarPhoto.urls.regular}`
        // );
      }
    }
  }, [photo]);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={closePhotoDetailsModal}>
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images photo-details-modal__image'>
        <PhotoFavButton />
        <img className='photo-details-modal__image' src={photo.urls.regular} alt={`Photo of ${photo.location.city}, ${photo.location.country}`} />
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={photo.user.profile} alt={`Profile photo of ${photo.user.username}`} />
          <div className='photo-list__user-info'>
            {photo.user.name}
            <div className='photo-list__user-location'>
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <h3 className='photo-details-modal__header'>Similar Photos</h3>
        <div className='photo-details-modal__images'>
          <PhotoList photos={photo.similar_photos} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
