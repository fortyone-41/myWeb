import React from 'react'
import { Route } from 'react-router-dom'
import './Content.css'
import Biography from './Biography/Biography'
import Skills from './Skills/Skills'
import Contacts from './Contacts/Contacts'

const Content = () => {
    return (
        <div className='content'>
            <Route exact path='/Biography' component={Biography} />
            <Route exact path='/Skills' component={Skills} />
            <Route exact path='/Contacts' component={Contacts} />
        </div>
    )
}

export default Content