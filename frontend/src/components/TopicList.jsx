import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

/**
 * Component for a list of photo topics (categories).
 *
 * @param {Array} topics - The list of photo topics (categories) to display.
 * @param {function} onLoadTopic - Function triggered when a topic is selected.
 *
 * @returns {JSX.Element} - JSX element representing the list of topics.
 */
const TopicList = ({ topics, onLoadTopic }) => {
  return (
    <div className='top-nav-bar__topic-list'>
      {topics.map((topic, index) => (
        <span key={topic.id + index}>
          <TopicListItem
            id={topic.id}
            title={topic.title}
            onLoadTopic={onLoadTopic}
          />
        </span>
      ))}
    </div>
  );
};

export default TopicList;
