import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Window from './Pages/Window/Window';
import catLogo from './media/img/git.png'

import './styles/index.scss'

function App() {
  React.useEffect(() => {
    localStorage.setItem("loaded", false)
  }, [])
  return (
    <div className="wrapper">
      <BrowserRouter>
      
        <Window />
        <a target="_blank" rel="noreferrer" href="https://github.com/fortyone-41"><img className="cat-logo" alt="github link" src={catLogo} /></a>
      </BrowserRouter>
    </div>

  );
}

export default App;
