import React from 'react'
import './Contacts.scss'

const Contacts = () => {
    return (
        <div className='contacts'>
                <h1>Контакты</h1>
                <ul>
                    <li>
                        <a href="mailto:vova-lutcev@yandex.ru">
                            <h2>Почтовый ящик</h2>
                            <p>vova-lutcev@yandex.ru</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h2>Телефон</h2>
                            <p>8-913-165-73-34</p>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://join.skype.com/invite/mbTX1YQuuQ5K">
                            <h2>Skype</h2>
                            <p>vova-lutcev</p>
                        </a>
                    </li>
                    
                </ul>
        </div>
    )
}

export default Contacts