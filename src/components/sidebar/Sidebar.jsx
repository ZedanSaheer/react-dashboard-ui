import React from 'react'
import Navbar from '../navbar/Navbar'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            
           <Navbar settings/>
           <Navbar support/>
           <Navbar components/>
        </div>
    )
}

export default Sidebar
