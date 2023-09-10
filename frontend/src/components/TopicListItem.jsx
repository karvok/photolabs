import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title } = props;

  return (
    <span className='topic-list__item'>
      <span>{title}</span>
    </span>
  );
};

export default TopicListItem;
