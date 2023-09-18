import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  FAV_PHOTO_TOGGLED: 'FAV_PHOTO_TOGGLED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  GET_PHOTOS_BY_FAVOURITED: 'GET_PHOTOS_BY_FAVOURITED',
  REFETCH_ALL_PHOTOS: 'REFETCH_ALL_PHOTOS',
};

const initialState = {
  displayModal: false,
  favourites: [],
  photoData: [],
  topicData: [],
  topicId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.FAV_PHOTO_TOGGLED:
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

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      const { photo } = action.payload;
      return {
        ...state,
        displayModal: photo,
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      const { value } = action.payload;
      return {
        ...state,
        displayModal: value,
      };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
        topicId: action.topicId,
      };

    case ACTIONS.GET_PHOTOS_BY_FAVOURITED:
      const favoritedPhotos = state.photoData.filter((photo) =>
        state.favourites.includes(photo.id)
      );
      return {
        ...state,
        photoData: favoritedPhotos,
      };

    case ACTIONS.REFETCH_ALL_PHOTOS:
      return {
        ...state,
      };

    default:
      throw new Error(`
        ☹️ Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (selectedPhotoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLED, payload: { selectedPhotoId } });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo } });
  };

  const onClosePhotoDetailsModal = (value) => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS, payload: { value } });
  };

  const onLoadTopic = (topicId, data, updateTopicId = true) => {
    if (updateTopicId && topicId !== state.topicId) {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data, topicId });
    }
  };

  const onLoadFavourites = () => {
    if (state.favourites.length > 0) {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_FAVOURITED });
    }
  };

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    if (state.topicId === null) {
      fetch('/api/photos')
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        );
    } else {
      const url = `/api/topics/photos/${state.topicId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: ACTIONS.GET_PHOTOS_BY_TOPICS,
            payload: data,
            topicId: state.topicId,
          });
        });
    }
  }, [state.topicId]);

  const onRefetchAllPhotos = () => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        const currentFavorites = state.favourites;
        const mergedPhotos = data.map((photo) => ({
          ...photo,
          isFavorite: currentFavorites.includes(photo.id),
        }));
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: mergedPhotos });
      });
  };

  return {
    state,
    updateToFavPhotoIds,
    onLoadTopic,
    onLoadFavourites,
    onRefetchAllPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
