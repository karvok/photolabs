import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

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

// Note: Rendering a single component to build components in isolation
const App = () => {

  // Create array of the same data 3 times
  const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className='App'>

      {/* Use map() to render each PhotoListItem */}
      {photos.map((photo, index) => (

        // Provide unique key for each photo by combining the photo's id and its index in the array
        <PhotoListItem key={photo.id + index} {...photo} />
      ))}
    </div>
  );
};

export default App;
