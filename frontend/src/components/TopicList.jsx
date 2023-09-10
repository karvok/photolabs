import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const sampleDataForTopicList = [
  {
    id: '1',
    slug: 'topic-1',
    title: 'Nature',
  },
  {
    id: '2',
    slug: 'topic-2',
    title: 'Travel',
  },
  {
    id: '3',
    slug: 'topic-3',
    title: 'People',
  },
];

const TopicList = () => {
  return (
    <div className='top-nav-bar__topic-list'>

      {/* Use map() to render each PhotoListItem */}
      {sampleDataForTopicList.map((topic, index) => (

        // Provide unique key for each topic by combining the topic's id and its index in the array
        <span key={topic.id + index}>
          
          <TopicListItem id={topic.id} title={topic.title} />
        </span>
      ))}
    </div>
  );
};

export default TopicList;
