import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  const { username, imageSource, location, profile } = sampleDataForPhotoListItem
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
