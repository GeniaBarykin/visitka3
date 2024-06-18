import React from 'react'
import './Navbar.css';
import { navLinks } from '../../constants'

const Navbar = () => {
  return (
    <>
    <nav className='nav-wrapper'>
        <div className='nav-content'>
        <div className='nav-name'>Барыкин Евгений</div>
        <ul>
            {navLinks.map((link, key) => {
                return <li key={key}>
                    <a className='menu-item' href={`#${link.id}`}>{link.title}</a>
                </li>
            })}
        </ul>
        
        </div>
    </nav>
    </>
  )
}

export default Navbar
