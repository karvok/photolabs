import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics } = props;

  return (
    <div className='top-nav-bar__topic-list'>
      {topics.map((topic, index) => (
        <span key={topic.id + index}>
          <TopicListItem id={topic.id} title={topic.title} />
        </span>
      ))}
    </div>
  );
};

export default TopicList;
