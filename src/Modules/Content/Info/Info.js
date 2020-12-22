import React from 'react'
import { Tabs, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './Info.scss'

const Info = () => {
    const { TabPane } = Tabs;
    return (
        <div className="info">

            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="Биография" key="1">
                        <h1>Биография</h1>
                        <h2>
                            <p>ФИО: Лутцев Владимир Андреевич</p>
                            <p>Дата рождения: 28.11.1995</p>
                            <p>Образование: Высшее(Информационные системы и технологии)</p> 
                            <p>"ФГБВОУ ВО Норильский Государственный Индустриальный Институт" г.Норильск</p>
                        </h2>
                    </TabPane>
                    <TabPane tab="Опыт работы" key="2">
                        <Timeline mode="alternate">
                            <Timeline.Item>После окончания учебы, с 07.2017 работал фрилансером</Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="green">05.05.2018 Устроился на работу в "ЗФ" НН-ОЦО</Timeline.Item>
                            <Timeline.Item >
                                Занимался обслуживанием АРМ, установка/настройка ПО, администрирование корпоративной сети передачи данных.
                                
                        </Timeline.Item>
                            <Timeline.Item>В процессе разработал проект бесшовной Wi-Fi сети, с использованием Radius-сервера.</Timeline.Item>
                            <Timeline.Item>Прошел обучающий курс по использованию сетевого оборудования CISCO</Timeline.Item>
                            <Timeline.Item color="red">Уволился 16.09.2019</Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}  color="green">
                                17.09.2019 Устроился на работу в ООО "Норильскникельремонт" МПО "Норильскавтоматика"
                        </Timeline.Item>
                        <Timeline.Item>Занимался администрированием SCADA-системы.</Timeline.Item>
                        <Timeline.Item>Разработал Web-систему приема заявок о неисправностях SCADA-системы.</Timeline.Item>
                        <Timeline.Item>Разработал Web-систему планирования отпуска со сквозной доменной авторизацией. Планирование происходит на основе графика отпусков, и свободных путевок в БД. </Timeline.Item>
                        <Timeline.Item  color="red">Трудоустроен по сегодняшний день.</Timeline.Item>               
                        </Timeline>
                    </TabPane>
                </Tabs>
            </div>

        </div>
    )
}

export default Info