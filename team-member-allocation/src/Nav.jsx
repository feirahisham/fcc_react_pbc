import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
        <ul className='navbar-nav me-auto mb-3 mb-lg-0'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/GroupedTeamMembers'>Teams</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav