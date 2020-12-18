import React from 'react'
import { Route } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Info from './Info/Info'
import Projects from './Projects/Projects'
import { Empty } from 'antd'
import Contacts from './Contacts/Contacts'


const Content = () => {
    return (
        <div className='content'>
            {/* <Route exact path='/Dialog' component={Dialog} />
            <Route exact path='/Skills' component={Skills} />
            <Route exact path='/Contacts' component={Contacts} /> */}
            <Dialog />
            <div className="divider">
            </div>
            <div className="view">
                <Route exact path='/' render={(props) => <Empty style={{ alignItems: "center", height: '100%', display: 'flex', border: '1px solid #ececec', justifyContent: 'center', textAlign: 'center' }} description={"Информация отсутствует"} />} />
                <Route exact path='/info' component={Info} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contacts' component={Contacts} />
            </div>
        </div>
    )
}

export default Content