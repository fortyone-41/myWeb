import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../media/img/logo.gif'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            </div>
        </nav>
    )
}

export default Navbar