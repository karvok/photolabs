import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ title }) => {
  return (
    <span className='topic-list__item'>
      <span>{title}</span>
    </span>
  );
};

export default TopicListItem;
