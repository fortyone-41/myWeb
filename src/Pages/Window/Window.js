import Navbar from '../../Modules/Navbar/Navbar'
import Content from '../../Modules/Content/Content'
import Rabbit from '../../media/img/git.png'

import React, {useState} from 'react';
import './Window.scss'
import Loader from '../../Modules/Content/Loader/Loader';


const Window = () => {
      const [loading, setLoading] = React.useState(true)
      setTimeout(() => { 
            setLoading(false)
      }, 2000);
      return (
            <section className="window">
                  <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1.0, maximum-scale=1.0"/>
                  <Navbar />
            

                  {loading ? <Loader /> : <Content />}

                  <a target="_blank" href="https://github.com/fortyone-41"><img className="rabbit" src={Rabbit} /></a>
            </section>
      )
}

export default Window;