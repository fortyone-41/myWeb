import Navbar from '../../Modules/Navbar/Navbar'
import Content from '../../Modules/Content/Content'


import React from 'react';
import './Window.scss'


const Window = () => {
      return (
            <section className="window">
                  <meta name="viewport" content="width=1200, initial-scale=1" />
                  <Navbar />

                  <Content />
            </section>
      )
}

export default Window;