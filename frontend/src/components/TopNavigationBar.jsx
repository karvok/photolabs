import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({
  topics,
  isFavPhotoExist,
  onLoadTopic,
  onLoadFavourites,
}) => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
        onLoadFavourites={onLoadFavourites}
      />
    </div>
  );
};

export default TopNavigationBar;
