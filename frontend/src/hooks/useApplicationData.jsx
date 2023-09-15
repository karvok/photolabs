import { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    displayModal: false,
    favourites: [],
  });

  const setPhotoSelected = (photo) => {
    setState({ ...state, displayModal: photo });
  };

  const onClosePhotoDetailsModal = (value) => {
    setState({ ...state, displayModal: value });
  };

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      setState({ ...state, favourites: [...state.favourites].filter((alreadyFavoritedPhotoId) => photoId !== alreadyFavoritedPhotoId) });
      return;
    }
    setState({ ...state, favourites: [...state.favourites, photoId] });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
