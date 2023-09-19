import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

/**
 * Component for a top navigation bar.
 *
 * @param {Array} topics - The list of photo topics (categories) to display.
 * @param {boolean} isFavPhotoExist - Indicates if any favourited photos exist.
 * @param {function} onLoadTopic - Function triggered when a topic is selected.
 * @param {function} onLoadFavourites - Function triggered when the favourite badge is clicked.
 * @param {function} onRefetchAllPhotos - Function triggered when the app title is clicked.
 *
 * @returns {JSX.Element} - JSX element representing the top navigation bar.
 */
const TopNavigationBar = ({
  topics,
  isFavPhotoExist,
  onLoadTopic,
  onLoadFavourites,
  onRefetchAllPhotos,
}) => {
  const handleClick = () => {
    onRefetchAllPhotos();
  };

  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo' onClick={handleClick}>
        PhotoLabs
      </span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
        onLoadFavourites={onLoadFavourites}
      />
    </div>
  );
};

export default TopNavigationBar;
