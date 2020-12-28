import React, { useState } from 'react'
import {  Modal, Carousel } from 'antd';



const ModalWindow = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div style={{ height: '100%'}}>
                    <section >
                        <Carousel effect="fade" autoplay>
                            {props.galery.map((photo) => {
                                return (<div>
                                    <img width='100%' alt={props.title} onClick={() => setVisible(true)} style={{  borderRadius: '5px' }} src={photo} />
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
                        width='1000px'
                    >
                        <section className="carous">
                            <Carousel effect="fade" autoplay>
                                {props.galery.map((photo) => {
                                    return (<div>
                                        <img width='100%' alt={props.title} style={{  borderRadius: '5px' }} src={photo} />
                                    </div>)
                                })}
                            </Carousel>
                            </section>
                    </Modal>
            </div>
        </div>
    )
}

export default ModalWindow