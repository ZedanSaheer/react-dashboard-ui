import React from 'react'
import BarChart from '../charts/BarChart'
import PieChart from '../charts/PieChart'
import "./HomePage.css"
import vector from "../../media/vector.svg"


const HomePage = () => {
    return (
        <div className='Home'>
        <div className="Banner">
            <div className='text'>
                <h3>Welcome</h3>
                <h1>Pablo Nicolus</h1>
                <div className='location'>NY , USA</div>
            </div>
            <img src={vector} alt="vector" className='vector' />
        </div>
            <div className="Charts">
                <BarChart />
                <PieChart />
            </div>
        </div>
    )
}

export default HomePage
