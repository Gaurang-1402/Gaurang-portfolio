import React from "react"
import profilePhoto from "../img/profile.jpg"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img alt='Gaurang Ruparelia' src={profilePhoto}></img>
        </div>

        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>
              About me
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/portfolios' exact activeClassName='active'>
              Portfolios
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/resume' exact activeClassName='active'>
              Resume
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/blogs' exact activeClassName='active'>
              Blogs
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className='footer'>
          <p>@2021 Lorem Ipsum</p>
        </footer>
      </nav>
    </div>
  )
}

export default Navbar
