import React from 'react'
import { Tabs } from 'antd';
import { ChromeOutlined } from '@ant-design/icons';
import Query from './Imports/Query'
import Plan from './Imports/Plan'
import Visit from './Imports/Visit'
import ModalWindow from './ModalWindow/ModalWindow';
import './Projects.scss'


const Projects = () => {
    const { TabPane } = Tabs;
    return (
        <div className="projects">
            <Tabs tabPosition="top" type="card" defaultActiveKey="1">
                <TabPane tab={
                    <span>
                        <ChromeOutlined />
                        Регистрация заявок
                    </span>
                    }
                    key="1"
                >
                    <ModalWindow galery={Query} title="Регистрация заявок" tools="HTML, CSS, PHP, JS, MySQL" />
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
                    Сайт-визитка
                    </span>
                    }
                    key="3"
                >
                    <ModalWindow galery={Visit} title="Сайт-визитка" tools="ReactJS, AntDesign, SCSS" />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default Projects