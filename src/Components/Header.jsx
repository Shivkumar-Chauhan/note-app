import React from 'react'
import '../css/Header.css'
import { NavLink } from 'react-router-dom'
function Header(object) {
    return (
        <>
            <header>
                <h1 onClick={()=>{
                    object.changepage(0)
                }}>Note App</h1>
                <nav>
                    <div onClick={()=>{
                    object.changepage(1)
                    }}>Recents</div>
                </nav>
            </header>
        </>
    )
}

export default Header
