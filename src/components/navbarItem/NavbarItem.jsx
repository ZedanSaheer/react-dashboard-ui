import React from 'react'
import "./NavbarItem.css"
import { MdDashboard, MdContentCopy, MdWidgets, MdMicrowave, MdArrowForwardIos } from "react-icons/md"
import { HiInboxIn } from "react-icons/hi"
import { GoSettings } from "react-icons/go"
import { RiTicket2Line } from "react-icons/ri"
import { FiCreditCard } from "react-icons/fi"
import { NavLink } from "react-router-dom"


const NavbarItem = ({ dashboard, sidebarType, pageLayout, inbox, ticket, extra, uiElements, cards, components, widgets }) => {

    const activeItem = (e) => {
        e.target.classList.toggle("active");
    }

    if (dashboard) {
        return (
            <NavLink className='NavbarItem' to="/" className={isActive=>'NavbarItem active' + (!isActive && "NavbarItem")}>
                <p><MdDashboard /><span>Dashboard</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (sidebarType) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
               
                <p><GoSettings /><span>Sidebar Type</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (pageLayout) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
                <p><MdContentCopy /><span>Page Layout</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (inbox) {
        return (
            <div className='NavbarItem' onClick={activeItem}>  
                <p><HiInboxIn /><span>Inbox</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (ticket) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
                <p><RiTicket2Line /><span>Ticket</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (extra) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
                <p><MdMicrowave /><span>Extra</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (uiElements) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
                <p><MdWidgets /><span>UI Elements</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (cards) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
                <p><FiCreditCard /><span>Cards</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (components) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
                <p><FiCreditCard /><span>Components</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
    if (widgets) {
        return (
            <div className='NavbarItem' onClick={activeItem}>
             
                <p><MdMicrowave /><span>Widgets</span></p>
                <MdArrowForwardIos />
            </div>
        )
    }
}

export default NavbarItem;
