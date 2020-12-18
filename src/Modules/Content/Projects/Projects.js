import React from 'react'
import { Tabs} from 'antd';
import {ChromeOutlined } from '@ant-design/icons';
import Block from '../../../Components/Block/Block';
import Query from './Imports/Query'
import Plan from './Imports/Plan'
import Visit from './Imports/Visit'
import ModalWindow from './ModalWindow/ModalWindow';


const Projects = () => {
    const { TabPane } = Tabs;
    return (
        <div className="projects">
            <Tabs style={{height:'100%'}} tabPosition="top" type="card" defaultActiveKey="1">
                <TabPane style={{height:'1000px'}} tab={
                <span>
                    <ChromeOutlined />
          Регистрация заявок
        </span>
            }
            key="1"
        >
                <ModalWindow galery={Query} title="Регистрация заявок" tools="HTML, CSS, PHP, JS, MySQL"/>
                </TabPane>
                <TabPane tab={
                <span>
                    <ChromeOutlined />
                    Планирование отпуска
        </span>
            }
            key="2"
        >
                <ModalWindow galery={Plan} title="Планирование отпуска" tools="HTML, CSS, PHP, JS, MySQL" />
                </TabPane>
                <TabPane tab={
                <span>
                    <ChromeOutlined />
                    Этот сайт
        </span>
            }
            key="3"
        >
                <ModalWindow galery={Visit} title="Этот сайт" tools="ReactJS, AntDesign, SCSS"/>
                </TabPane>
                
            </Tabs>
        </div>
    )
}

export default Projects