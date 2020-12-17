import Navbar from '../../Modules/Navbar/Navbar'
import Content from '../../Modules/Content/Content'


import React from 'react';
import './Window.scss'


const Window = () => {
      return (
            <section className="window">
                  <Navbar />
                  
                  <Content />
            </section>
      )
}

export default Window;