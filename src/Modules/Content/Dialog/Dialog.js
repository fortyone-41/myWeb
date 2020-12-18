import React, { useState } from 'react'
import { scrollTo as scroll } from "react-scroll"
import { Carousel, Anchor } from 'antd'

import Message from '../../../Components/Message/Message'
import Block from '../../../Components/Block/Block'
import { Route } from 'react-router-dom';
const AVATAR = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";


const Dialog = () => {
    const [message, setMessage] = useState([
        { 'id': 1, avatar: AVATAR, text: "Привет, что интересно узнать обо мне?", date: Date() },
        { 'id': 2, text: "Привет, хочу посмотреть:", isMe: true }
    ])
    function getPage(text){
        return text;
    }
    function addMessage(text) {
            if(message.length>=5) {
                setMessage(message.shift());
            }
        setMessage(message.concat(
            {
                id: message.length + 1,
                avatar: AVATAR,
                text: "Отличный выбор, показываю "+ text +"...Но если интересно другое, выбирай.",
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
        <div className="dialog" >

                <Block>
                    {message.map((mes) => {
                        return <Message addMessage={addMessage} getPage={getPage} removeMessage={removeMessage} avatar={mes.avatar} text={mes.text} isMe={mes.isMe} date={mes.date} />
                    })
                    }
                </Block>
        </div>
    )
}

export default Dialog