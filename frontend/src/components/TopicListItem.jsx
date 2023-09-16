import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, title, onLoadTopic }) => {

  const handleClick = () => {    
    onLoadTopic(id);
  };
 
  return (
    <span
      className='topic-list__item'
      onClick={handleClick}
    >
      <span>{title}</span>
    </span>
  );
};

export default TopicListItem;
