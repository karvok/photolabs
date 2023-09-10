import React from 'react';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // Create array of the same data 3 times
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className='App'>
      
      {/* Use map() to render each PhotoListItem */}
      {/* {photos.map((photo, index) => ( */}

      {/* // Provide unique key for each photo by combining the photo's id and its index in the array */}
      {/* <PhotoListItem key={photo.id + index} {...photo} /> */}
      {/* ))} */}

      <TopicListItem />
      <PhotoList />
    </div>
  );
};

export default App;
