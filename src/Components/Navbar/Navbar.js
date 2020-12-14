import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../../media/img/logo2 (3).png'

const Navbar = () => {
    return (
        <nav class="sidebar-navigation">
            <img src={logo} style={{width:'64px', height:'64px'}}/>
            <ul>
                
                <li class="active">
                    <span class="tooltip"><NavLink to='./Biography'> Биография</NavLink></span>
                </li>
                <li>
                    <span class="tooltip"><NavLink to='./Skills'>Навыки</NavLink></span> 
                </li>
                <li>
                    <span class="tooltip"><NavLink to='./Contacts'>Контакты</NavLink></span>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar