import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = () => {
  const { label } = sampleDataForTopicListItem;

  return (
    <span className='topic-list__item'>
      <span>{label}</span>
    </span>
  );
};

export default TopicListItem;
