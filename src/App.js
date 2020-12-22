import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Window from './Pages/Window/Window';
import catLogo from './media/img/git.png'

import './styles/index.scss'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      
        <Window />
        <a target="_blank" href="https://github.com/fortyone-41"><img className="cat-logo" src={catLogo} /></a>
      </BrowserRouter>
    </div>

  );
}

export default App;
