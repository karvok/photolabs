import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closePhotoDetailsModal, photo }) => {

  // TODO: Remove console logs
  console.log(`😎 Clicked photo id ${photo.id} with full URL: ${photo.urls.full}`)
  console.log(`😎 Similar photos:`)

  useEffect(() => {
    for (const key in photo.similar_photos) {
      if (photo.similar_photos.hasOwnProperty(key)) {
        const similarPhoto = photo.similar_photos[key];
        console.log(`😎 Similar photo id ${similarPhoto.id} with URL: ${similarPhoto.urls.regular}`);
      }
    }
  }, [photo]);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={closePhotoDetailsModal} >
        <img src={closeSymbol} alt='close symbol' />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
