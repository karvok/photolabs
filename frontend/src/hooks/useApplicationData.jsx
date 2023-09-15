import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  FAV_PHOTO_TOGGLED: 'FAV_PHOTO_TOGGLED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
};

const initialState = {
  displayModal: false,
  favourites: [],
  photoData: [],
  topicData: [],
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };

    case 'FAV_PHOTO_TOGGLED':
      const { selectedPhotoId } = action.payload;
      if (state.favourites.includes(selectedPhotoId)) {
        return {
          ...state,
          favourites: state.favourites.filter(
            (alreadyFavoritedPhotoId) =>
              alreadyFavoritedPhotoId !== selectedPhotoId
          ),
        };
      }
      return { ...state, favourites: [...state.favourites, selectedPhotoId] };

    case 'DISPLAY_PHOTO_DETAILS':
      const { photo } = action.payload;
      return {
        ...state,
        displayModal: photo,
      };

    case 'CLOSE_PHOTO_DETAILS':
      const { value } = action.payload;
      return {
        ...state,
        displayModal: value,
      };

    default:
      throw new Error(`
        Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (selectedPhotoId) => {
    dispatch({ type: 'FAV_PHOTO_TOGGLED', payload: { selectedPhotoId } });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: 'DISPLAY_PHOTO_DETAILS', payload: { photo } });
  };

  const onClosePhotoDetailsModal = (value) => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS', payload: { value } });
  };

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);
    
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
