import React from 'react'
import NavbarItem from '../navbarItem/NavbarItem'
import "./Navbar.css"

const Navbar = ({ settings, support, components }) => {
    if (settings) {
        return (
            <div className='Navbar'>
                <NavbarItem dashboard/>
                <NavbarItem sidebarType/>
                <NavbarItem pageLayout/>
            </div>
        )
    }
    else if(support){
        return (
            <div className='Navbar'>
                <NavbarItem inbox/>
                <NavbarItem ticket/>
                <NavbarItem extra/>
            </div>
        )
    }else if(components){
        return (
            <div className='Navbar'>
                <NavbarItem uiElements/>
                <NavbarItem cards/>
                <NavbarItem components/>
                <NavbarItem widgets/>
            </div>
        )
    }
}

export default Navbar;
