import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/company">Compnay</Link>
        <Link to="/reviews">Reviews</Link>
    </div>
  )
}
