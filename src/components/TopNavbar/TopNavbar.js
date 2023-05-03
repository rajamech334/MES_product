import React from 'react';
import './TopNavbar.css';
import logo from '../Logo/Wipro-Pari-2021.png'

const TopNavbar =() =>{
    return (
        <div className = 'TopNavbar'>
            <img src={logo} alt='Logo' />
            <div className='sections'>
                <a className="Dashboard" href="#home">Dashboard</a>
                <a href="#Planning">Planning</a>
                <a href="#maintenance">Activities</a>
                <a href="#Qaulity">Analyse</a>
            </div>
        </div>
    )
}

export default TopNavbar;