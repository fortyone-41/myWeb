import React, { useState } from 'react'
import { Radio } from 'antd'
import { NavLink } from 'react-router-dom';
import Message from '../../../Components/Message/Message'
import Block from '../../../Components/Block/Block'
import './Dialog.scss';
import { useHistory } from "react-router-dom";
import {Input} from 'reactstrap'

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
        addMessage(link);
        switch(link) {
            case "Биографию": {
                return setTimeout(() => { history.push("/info") }, 1000)
            }
            case "Биография": {
                return setTimeout(() => { history.push("/info") }, 1000)
            }
            case "Проекты": {
                return setTimeout(() => { history.push("/projects") }, 1000)
            }
            case "Навыки": {
                return setTimeout(() => { history.push("/skills") }, 1000)
            }
            case "Контакты": {
                return setTimeout(() => { history.push("/contacts") }, 1000)
            }
        }
        
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
            <div className="radiogr" >

                
                <button className="btn-styled" onClick={() => { page("Биографию"); setTimeout(() => { history.push("/info") }, 1000) }}>Биографию</button>
                <button className="btn-styled" onClick={() => { page("Проекты"); setTimeout(() => { history.push("/projects") }, 1000) }}>Проекты</button>
                <button className="btn-styled" onClick={() => { page("Навыки"); setTimeout(() => { history.push("/skills") }, 1000) }}>Навыки</button>
                <button className="btn-styled" onClick={() => { page("Контакты"); setTimeout(() => { history.push("/contacts") }, 1000) }}>Контакты</button>
                <h1 style={{ marginBottom: "10px" }}>Показать:  </h1>
            </div>
           
            <div className="select-group" style={{width: "90%"}}>
            
            <Input type="select" onChange={(e) => { page(e.target.value) }} name="select" id="exampleSelect">
                    <option selected="true" disabled="disabled">Что вас интересует?</option>
                    <option>Биография</option>
                    <option>Проекты</option>
                    <option>Навыки</option>
                    <option>Контакты</option>
                </Input>
            </div>
        </Block>
    )
}

export default Dialog