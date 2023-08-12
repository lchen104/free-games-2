import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
        <Link to='/favorites'>
            <div>Favorites</div>
        </Link>
        <Link to='/games'>
            <div>Games</div>
        </Link>
        <Link to='/contact'>
            <div>Contact</div>
        </Link>
    </div>
  )
}

export default Nav