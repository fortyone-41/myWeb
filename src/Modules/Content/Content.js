import React from 'react'
import { Route } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Info from './Info/Info'
import Projects from './Projects/Projects'


const Content = () => {
    return (
        <div className='content'>
            {/* <Route exact path='/Dialog' component={Dialog} />
            <Route exact path='/Skills' component={Skills} />
            <Route exact path='/Contacts' component={Contacts} /> */}
            <Dialog />
            <div className="divider">
                  </div>
            <Route exact path='/Info' component={Info} />
            <Route exact path='/Projects' component={Projects} />
        </div>
    )
}

export default Content