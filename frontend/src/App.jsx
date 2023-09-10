import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
