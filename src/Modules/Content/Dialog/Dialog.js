import React, { useState } from 'react'
import { Radio } from 'antd'
import { NavLink } from 'react-router-dom';
import Message from '../../../Components/Message/Message'
import Block from '../../../Components/Block/Block'
import './Dialog.scss';
import { useHistory } from "react-router-dom";

const AVATAR = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";


const Dialog = (props) => {
    const messagesRef = React.useRef(null);

    const [message, setMessage] = useState([
        { 'id': 1, avatar: AVATAR, text: "Привет, что интересно узнать обо мне?", date: Date(), service: false }
    ]);
    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [message]);
    function getPage(text) {
        return text;
    }
    function addMessage(text) {
        setTimeout(() => {
            setMessage(prev => ([
                ...prev,
                {
                    id: message.length + 1,
                    text: "Показать " + text,
                    date: Date(),
                    isMe: true,
                    service: false
                }
            ]))
        }, 0)

        setTimeout(() => {
            setMessage(prev => ([
                ...prev,
                {
                    id: message.length + 2,
                    avatar: AVATAR,
                    text: "Вы выбрали " + text + ", показываю...",
                    date: Date(),
                    isMe: false
                }

            ]))
        }, 1000)
    }
    function page(link) {
        // removeMessage();
        addMessage(link);
    }
    function removeMessage() {
        message.splice(message.length - 1, 1);
    }

    const history = useHistory();

    return (

        <Block >
            <div className="dialog" ref={messagesRef}>

                {message.map((mes) => {
                    return <Message focus={props.focus} addMessage={addMessage} getPage={getPage} removeMessage={removeMessage} avatar={mes.avatar} text={mes.text} service={mes.service} isMe={mes.isMe} date={mes.date} />
                })
                }
            </div>
            <div style={{ position: "absolute", bottom: 10, right: 20, maxHeight: "10%" }}>
                <h1 style={{ textAlign: "right", marginBottom: "10px" }}>Показать:</h1>
                <Radio.Group >
                    <p style={{ display: "inline-block" }}><Radio.Button onClick={() => { page("Биографию"); setTimeout(() => { history.push("/info") }, 1000) }}>Биографию</Radio.Button></p>
                    <p style={{ display: "inline-block" }}><Radio.Button onClick={() => { page("Проекты"); setTimeout(() => { history.push("/projects") }, 1000) }}>Проекты</Radio.Button></p>
                    <p style={{ display: "inline-block" }}><Radio.Button onClick={() => { page("Навыки"); setTimeout(() => { history.push("/skills") }, 1000) }}>Навыки</Radio.Button></p>
                    <p style={{ display: "inline-block" }}><Radio.Button onClick={() => { page("Контакты"); setTimeout(() => { history.push("/contacts") }, 1000) }}>Контакты</Radio.Button></p>
                </Radio.Group>
            </div>
        </Block>
    )
}

export default Dialog