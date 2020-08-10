import React from  'react'
import NavBar from './navBar'

export default props =>(/// menu superior azul 
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>My </b>C</span>
            <span className='logo-lg'>
                <i className='fa fa-home'></i>
                <b> My</b> Church
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <NavBar/>
        </nav>

    </header>
)