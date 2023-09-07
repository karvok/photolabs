import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, location, profile } = props
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo of ${location.city}, ${location.country}`} />
      <div className="user-profile-photo"></div>
      <img src={profile} alt={`Profile photo of ${username}`} />
      <div className="username">{username}</div>
      <div className="location">{location.city}, {location.country}</div>
    </div>
  );
};

export default PhotoListItem;
