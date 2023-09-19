import React from 'react';
import '../styles/TopicListItem.scss';

/**
 * Component for a single topic (category) item in a list.
 *
 * @param {string} id - The topic id.
 * @param {string} title - The topic title.
 * @param {function} onLoadTopic - Function triggered when a topic is selected.
 *
 * @returns {JSX.Element} - JSX element representing a single topic list item.
 */
const TopicListItem = ({ id, title, onLoadTopic }) => {
  const handleClick = () => {
    onLoadTopic(id);
  };

  return (
    <span className='topic-list__item' onClick={handleClick}>
      <span>{title}</span>
    </span>
  );
};

export default TopicListItem;
