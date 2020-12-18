import Navbar from '../../Modules/Navbar/Navbar'
import Content from '../../Modules/Content/Content'
import Rabbit from '../../media/img/git.png'

import React from 'react';
import './Window.scss'


const Window = () => {
      return (
            <section className="window">
                  <meta name="viewport" content="width=1200, initial-scale=1" />
                  <Navbar />

                  <Content />
                  <a target="_blank" href="https://github.com/fortyone-41"><img className="rabbit" src={Rabbit} /></a>
            </section>
      )
}

export default Window;