import React from 'react'
import '../css/Header.css'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <header>
                <h1><NavLink to='/'>Note App</NavLink></h1>
                <nav>
                    <NavLink to='/recentlydone'>Recents</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header
