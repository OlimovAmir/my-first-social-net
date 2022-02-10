import React from 'react';
import './App.css';
import Header from './component/Header';
import Nav from './component/Navbar';
import Profile from './component/Profile';

const App=()=> {
  return (
    <div className='App-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
      
    </div>
  );
}

export default App;
