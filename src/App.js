import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Window from './Pages/Window/Window';

import './styles/index.scss'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Window />
      </BrowserRouter>
    </div>

  );
}

export default App;
