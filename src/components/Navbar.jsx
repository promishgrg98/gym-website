import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/gym-logo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='container nav_container'>
        <Link to={'/'} className='logo'>
            <img src={Logo} alt="Logo" />
        </Link>
        <ul className="nav_links">
            {
                links.map(({name, path}, index) => {
                    return (
                        <li>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        <button className="nav_toggle-btn">
            <FaBars />
        </button>
    </nav>
  )
}

export default Navbar