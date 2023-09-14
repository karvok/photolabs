import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  return (
    <div className='top-nav-bar__topic-list'>
      {topics.map((topic, index) => (
        <span key={topic.id + index}>
          <TopicListItem title={topic.title} />
        </span>
      ))}
    </div>
  );
};

export default TopicList;
