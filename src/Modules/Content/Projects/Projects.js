import React from 'react'
import { Tabs, Radio } from 'antd';
import {ChromeOutlined } from '@ant-design/icons';
import Block from '../../../Components/Block/Block';


const Projects = () => {
    const { TabPane } = Tabs;
    return (
        <div className="projects">
            <Tabs style={{height:'100%'}} tabPosition="left" defaultActiveKey="1">
                <TabPane  style={{height:'100%'}}
                    tab={
                        <span>
                            <ChromeOutlined />
          Регистрация заявок
        </span>
                    }
                    key="1"
                > <div style={{height:'100%'}}>
                <Block>
                        Tab 1
                    </Block>
                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <ChromeOutlined />
          Планировщик отпуска
        </span>
                    }
                    key="2"
                ><div>
                    <Block>
                        Tab 2
                    </Block>
                    </div>
    </TabPane>
                <TabPane
                    tab={
                        <span>
                            <ChromeOutlined />    Этот сайт :) :
                        </span>
                    }
                    key="3"
                ><div>
                    <Block>
                        Tab 3
                    </Block>
                    </div>
    </TabPane>
            </Tabs>
        </div>
    )
}

export default Projects