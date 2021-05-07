import React, { useState } from 'react'
import { Radio } from 'antd'
import { NavLink } from 'react-router-dom';
import Message from '../../../Components/Message/Message'
import Block from '../../../Components/Block/Block'
import './Dialog.scss';
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
        if (message.length >= 12) {
            setMessage(message.shift())
        }
        setMessage(message.concat(
            {
                id: message.length + 1,
                text: "Показать " + text,
                date: Date(),
                isMe: true,
                service: false
            },
            {
                id: message.length + 2,
                avatar: AVATAR,
                text: "Вы выбрали " + text + ", показываю...",
                date: Date()
            },
           
        ))
    }
    function page(link) {
       // removeMessage();
        addMessage(link);
    }
    function removeMessage() {
        message.splice(message.length - 1, 1);
    }

    return (

        <Block >
            <div className="dialog" ref={messagesRef}>

                {message.map((mes) => {
                    return <Message focus={props.focus} addMessage={addMessage} getPage={getPage} removeMessage={removeMessage} avatar={mes.avatar} text={mes.text} service={mes.service} isMe={mes.isMe} date={mes.date} />
                })
                }
            </div>
            <div style={{ position: "absolute", bottom: 10, right: 20, width: "100%" }}>
                <h1 style={{textAlign: "right", marginBottom: "10px"}}>Показать:</h1>
                <Radio.Group >
                    <p style={{ display: "inline-block", alignItems: "right" }}><NavLink onClick={() => page("Биографию")} to="/info" ><Radio.Button>Биографию</Radio.Button></NavLink></p>
                    <p style={{ display: "inline-block" }}><NavLink onClick={() => page("Проекты")} to="/projects" ><Radio.Button>Проекты</Radio.Button></NavLink></p>
                    <p style={{ display: "inline-block" }}><NavLink onClick={() => page("Контакты")} to="/contacts" ><Radio.Button>Контакты</Radio.Button></NavLink></p>
                    <p style={{ display: "inline-block", alignItems: "right" }}><NavLink onClick={() => page("Навыки")} to="/skills" ><Radio.Button>Навыки</Radio.Button></NavLink></p>
                </Radio.Group>
            </div>
        </Block>
    )
}

export default Dialog