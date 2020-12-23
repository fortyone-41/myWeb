import React, { useState } from 'react'
import { scrollTo as scroll } from "react-scroll"
import { Carousel, Anchor } from 'antd'

import Message from '../../../Components/Message/Message'
import Block from '../../../Components/Block/Block'
import './Dialog.scss';
import { Route } from 'react-router-dom';
const AVATAR = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";


const Dialog = () => {
    const messagesRef = React.useRef(null);

    const [message, setMessage] = useState([
        { 'id': 1, avatar: AVATAR, text: "Привет, что интересно узнать обо мне?", date: Date() },
        { 'id': 2, text: "Привет, хочу посмотреть:", isMe: true }
    ]);
    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [message]);
    function getPage(text) {
        return text;
    }
    function addMessage(text) {
        if(message.length>=12){
            setMessage(message.shift())
        }
        setMessage(message.concat(
            {
                id: message.length + 1,
                avatar: AVATAR,
                text: "Вы выбрали " + text + ", показываю...",
                date: Date()
            },
            {
                id: message.length + 2,
                text: "Показать:",
                date: Date(),
                isMe: true
            }
        ))
    }
    function removeMessage() {
        message.splice(message.length - 1, 1);
    }

    return (
        <Block >
            <div className="dialog" ref={messagesRef}>

                {message.map((mes) => {
                    return <Message addMessage={addMessage} getPage={getPage} removeMessage={removeMessage} avatar={mes.avatar} text={mes.text} isMe={mes.isMe} date={mes.date} />
                })
                }
            </div>
        </Block>
    )
}

export default Dialog