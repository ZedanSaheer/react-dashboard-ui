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
            <NavLink to="/" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><MdDashboard /><span>Dashboard</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (sidebarType) {
        return (
            <NavLink to="/sidebar" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
               
                <p><GoSettings /><span>Sidebar Type</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (pageLayout) {
        return (
            <NavLink to="/pageLayout" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><MdContentCopy /><span>Page Layout</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (inbox) {
        return (
            <NavLink to="/inbox" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>  
                <p><HiInboxIn /><span>Inbox</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (ticket) {
        return (
            <NavLink to="/tickets" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><RiTicket2Line /><span>Ticket</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (extra) {
        return (
            <NavLink to="/extra" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><MdMicrowave /><span>Extra</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (uiElements) {
        return (
            <NavLink to="/uielements" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><MdWidgets /><span>UI Elements</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (cards) {
        return (
            <NavLink to="/cards" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><FiCreditCard /><span>Cards</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (components) {
        return (
            <NavLink to="/components" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
                <p><FiCreditCard /><span>Components</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
    if (widgets) {
        return (
            <NavLink to="/widgets" className={({isActive})=>(isActive ? "NavbarItem active" : "NavbarItem")}>
             
                <p><MdMicrowave /><span>Widgets</span></p>
                <MdArrowForwardIos />
            </NavLink>
        )
    }
}

export default NavbarItem;
