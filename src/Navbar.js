import React from "react"

export default function Navbar(){
    return (
        <nav>
            <img src="DMW_Logo512.png" className="navbar-logo" />
            <h1 className="navbar-title">T-Devil101's Website</h1>
            <ul className="navbar-options">
                <li><a className="navbar-options-option" href="">Home</a></li>
                <li><a className="navbar-options-option" href="">Blog</a></li>
                <li>
                    <div className="navbar-dropdown">
                        <span>Projects</span>
                        <div className="navbar-dropdown-content">
                            <ul>
                                <li><a className="navbar-options-option" href="">TCB Original</a></li>
                                <li><a className="navbar-options-option" href="">No More Space</a></li>
                                <li><a className="navbar-options-option" href="">More</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}