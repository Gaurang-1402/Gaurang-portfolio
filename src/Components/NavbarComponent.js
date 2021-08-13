import React from "react"
import profilePhoto from "../img/profile.jpg"
import { NavLink } from "react-router-dom"

function NavbarComponent() {
  return (
    <div className='navbar-container'>
      <nav className='navbar-content'>
        <div className='navbar-profile'>
          <img alt='Gaurang Ruparelia' src={profilePhoto}></img>
        </div>

        <ul className='navbar-items'>
          <li className='navbar-item'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/about' exact activeClassName='active'>
              About me
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/research' exact activeClassName='active'>
              Research
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/resume' exact activeClassName='active'>
              Resume
            </NavLink>
          </li>

          <li className='navbar-item'>
            <NavLink to='/projects' exact activeClassName='active'>
              Projects
            </NavLink>
          </li>
          <li className='navbar-item'>
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

export default NavbarComponent
