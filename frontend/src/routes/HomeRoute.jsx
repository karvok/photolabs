import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics } = props;
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {

    setFavourites((prev) => {
      let newFavourites = [];
      if (prev.includes(id)) {
        newFavourites = prev.filter((favourited) => favourited !== id);
      } else {
        newFavourites = [...prev, id];
      }
      // TODO: Remove console logs
      console.log(`Toggled photo id: ${id} 🌞`);
      console.log(`Favourite photos are: ${newFavourites} 🤠`);

      return newFavourites;
    });
  };

  return (
    <div className='home-route'>
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
