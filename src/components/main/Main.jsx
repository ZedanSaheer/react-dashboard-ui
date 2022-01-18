import React from 'react'
import './Main.css'
import {Routes, Route} from "react-router-dom"
import HomePage from '../homePage/HomePage'
import DummyPage from '../dummyPage/DummyPage'

const Main = () => {
    return (
        <div className='Main'>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/sidebar" element={<DummyPage title="Sidebar Type"/>}></Route>
                <Route path="/pageLayout" element={<DummyPage title="Page Layout"/>}></Route>
                <Route path="/inbox" element={<DummyPage title="Inbox"/>}></Route>
                <Route path="/tickets" element={<DummyPage title="Tickets"/>}></Route>
                <Route path="/extra" element={<DummyPage title="Extra"/>}></Route>
                <Route path="/uielements" element={<DummyPage title="UI elements"/>}></Route>
                <Route path="/cards" element={<DummyPage title="cards"/>}></Route>
                <Route path="/components" element={<DummyPage title="components"/>}></Route>
                <Route path="/widgets" element={<DummyPage title="widgets"/>}></Route>
            </Routes>
        </div>
    )
}

export default Main
