import { Outlet, NavLink } from "react-router-dom"

import CrwnLogo from '../../assets/nav-logo.svg?react'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
        <nav className="navigation">
            <NavLink to='/' className="logo-container">
                <CrwnLogo className="logo"/>
            </NavLink>
            <ul className="nav-links-container">
                <NavLink to='/shop' className="nav-link">
                    SHOP
                </NavLink> 
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Navigation
