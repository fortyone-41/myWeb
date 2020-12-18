import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../media/img/logo2 (3).png'
import { Button } from 'antd'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <NavLink to="/"><img src={logo} /></NavLink>
            </div>
            <div className="navbar__link">

            </div>
        </nav>
    )
}

export default Navbar