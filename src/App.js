import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className='body'>
      <BrowserRouter>
      <Header />
      <Navbar />
      <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
