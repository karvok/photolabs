import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, title }) => {
  const handleTopicClick = () => {
    console.log(`🤩 Clicked ${title} topic which has id ${id}`);
  };

  return (
    <span className='topic-list__item' onClick={handleTopicClick}>
      <span>{title}</span>
    </span>
  );
};

export default TopicListItem;
