import React, { useState } from 'react'
import { Tabs, Radio, Modal, Button, Carousel } from 'antd';
import { ChromeOutlined } from '@ant-design/icons';
import Block from '../../../../Components/Block/Block';


const ModalWindow = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div style={{ height: '100%' }}>
                <Block>
                    <section >
                        <Carousel effect="fade" autoplay>
                            {props.galery.map((photo) => {
                                return (<div>
                                    <img onClick={() => setVisible(true)} style={{ width: '100%', borderRadius: '5px' }} src={photo} />
                                </div>)
                            })}

                        </Carousel>
                        <p style={{ textAlign: 'left', paddingLeft: '20px' }}>В разработке использовалось: </p>
                        <ul style={{ textAlign: 'left', paddingLeft: '20px' }} className="tools">
                            {props.tools.split(', ').map((tool) => {
                                return (<li>{tool}</li>)
                            })}
                        </ul>
                    </section>

                    <Modal
                        title={props.title}
                        centered
                        style={{ textAlign: 'center', }}
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        width={1000}
                    >
                        <section className="carous">
                            <Carousel effect="fade" autoplay>
                                {props.galery.map((photo) => {
                                    return (<div>
                                        <img style={{ width: '100%', borderRadius: '5px' }} src={photo} />
                                    </div>)
                                })}
                            </Carousel>
                            </section>
                    </Modal>
                    
                </Block>
            </div>
        </div>
    )
}

export default ModalWindow