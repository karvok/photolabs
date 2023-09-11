import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics } = props;
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((prev) => {
      const newFavourites = prev.includes(id)             // Check if id is already in the prev array
        ? prev.filter((favourited) => favourited !== id)  // Remove id if it is already in the prev array
        : [...prev, id];                                  // Add id if it is not already in the prev array

      // TODO: Remove console logs
      console.log(`Toggled photo id: ${id} 🌞`);
      console.log(`Favourite photos are: ${newFavourites} 🤠`);

      return newFavourites;
    });
  };

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
