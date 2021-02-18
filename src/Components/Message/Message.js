import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import { Radio } from 'antd'

import './Message.scss'
import { NavLink } from 'react-router-dom';


const Message = (props) => {
    function pageInfo() {
            props.removeMessage();
            props.addMessage("Биографию");
    }
    function pageProjects() {
            props.removeMessage();
            props.addMessage("Проекты");
    }
    function pageContacts() {    
            props.removeMessage();
            props.addMessage("Контакты");
    }
    
 
    return (
        <div className={classNames(`message`, { "message--isme": props.isMe })}>

            <div className="message__content">
                <div className="message__avatar">
                    <img src={props.avatar} alt={`Avatar ${props.user.fullname}`} />
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <div className="message__text">
                            <p>{props.text}</p>
                            {props.isMe && (
                                <Radio.Group >
                                    <p><NavLink onClick={pageInfo} to="/info" ><Radio.Button>Биографию</Radio.Button></NavLink></p>
                                    <p><NavLink onClick={pageProjects} to="/projects" ><Radio.Button>Проекты</Radio.Button></NavLink></p>
                                    <p><NavLink onClick={pageContacts} to="/contacts" ><Radio.Button>Контакты</Radio.Button></NavLink></p>
                                </Radio.Group>
                            )}
                        </div>

                    </div>
                    {!props.isMe && (
                        <span className="message__date">{formatDistanceToNow(new Date(props.date), { addSuffix: true, locale: ruLocale })}</span>
                    )}
                </div>
            </div>
            {props.isMe && (
                <div id="boom"></div>
            )}
        </div>
    )
}

Message.defaultProps = {
    user: {},
    avatar: "https://lh3.googleusercontent.com/qw0Pj-42e54JJsd7C693E0d2MvjHgOw-z3zfcU46d2TtcWMg07eSLU5HE1LeuWGwGQvt",
    date: null
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
}

export default Message;
