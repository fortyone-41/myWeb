import React from 'react'
import { Route } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Info from './Info/Info'
import Projects from './Projects/Projects'
import { Empty } from 'antd'
import Contacts from './Contacts/Contacts'
import './Content.scss'

const Content = () => {
    const FOCUS_BLOCK = React.useRef()
    const focus = () => {
        FOCUS_BLOCK.current.focus();
    }
    return (
        <div className='content'>
            {/* <Route exact path='/Dialog' component={Dialog} />
            <Route exact path='/Skills' component={Skills} />
            <Route exact path='/Contacts' component={Contacts} /> */}
            <Dialog ref={FOCUS_BLOCK.current} />
            
            <div focus={focus} className="view">
                <Route exact path='/' render={(props) => <Empty className="empty" description={"Информация отсутствует"} />} />
                <Route exact path='/info' render={(props) => <Info title="Биографию" />} />
                <Route exact path='/projects' render={(props) => <Projects title="Проекты" />} />
                <Route exact path='/contacts' render={(props) => <Contacts title="Контакты" />} />
            </div>
        </div> 
    )
}

export default Content