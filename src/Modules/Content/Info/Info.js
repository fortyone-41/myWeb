import React from 'react'
import { Tabs, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './Info.scss'

const Info = () => {
    const { TabPane } = Tabs;
    return (
        <div className="info">

            <div className="card-container" >
                <Tabs type="card" >
                    <TabPane tab="Биография"  key="1">
                        <div>
                        <h1>Биография</h1>
                        <h2>
                            <p>ФИО: Лутцев Владимир Андреевич</p>
                            <p>Дата рождения: 28.11.1995</p>
                            <p>Образование: Высшее(Информационные системы и технологии)</p> 
                            <p>"ФГБВОУ ВО Норильский Государственный Индустриальный Институт" г.Норильск</p>
                            <p></p>
                            <p></p>
                            <p style={{fontSize: "22px", font: "bold"}}>Детство:</p>
                            <p>В программирование затянуло еще с раннего детства.  </p>
                            <p>Примерно в 14 лет администрировал игровой сервер, и появилась нужда в информацинном сайте, приобщенному к серверу.</p>
                            <p>Изучил структуру HTML, и основы CSS</p>
                            <p></p>
                            <p></p>
                            <p style={{fontSize: "22px", font: "bold"}}>Школа:</p>
                            <p>Уже в школе начался Pascal, который затянул меня окончательно, и годовая программа уложилась в 3 недели.</p>
                        </h2>
                        </div>
                    </TabPane>
                    <TabPane tab="Опыт работы"  key="2">
                        <Timeline mode="alternate" >
                            <Timeline.Item >После окончания учебы, работал на фриланс основе, оказывая услуги Web-программирования</Timeline.Item>
                            <Timeline.Item color="yellow">Начал трудовую деятельность в "ЗФ" НН-ОЦО</Timeline.Item>
                            <Timeline.Item >
                                Занимался обслуживанием АРМ, установка/настройка ПО, администрирование корпоративной сети передачи данных.
                                
                        </Timeline.Item>
                            <Timeline.Item>В процессе разработал проект бесшовной Wi-Fi сети, с использованием Radius-сервера.</Timeline.Item>
                            <Timeline.Item>Прошел обучающий курс по использованию сетевого оборудования CISCO</Timeline.Item>
                            <Timeline.Item color="red">Прекратил трудовую деятельность в данной компании</Timeline.Item>
                            <Timeline.Item color="yellow">
                                Начал трудовую деятельность в ООО "Норильскникельремонт" МПО "Норильскавтоматика"
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