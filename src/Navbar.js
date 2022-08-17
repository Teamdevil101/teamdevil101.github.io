import React from "react"

export default function Navbar(){
    return (
        <nav>
            <img src="DMW_Logo512.png" className="navbar-logo" />
            <h1 className="navbar-title">T-Devil101's Website</h1>
            <ul className="navbar-options">
                <li><a className="navbar-option" href="">Home</a></li>
                <li><a className="navbar-option" href="">Blog</a></li>
                <li>
                    <div className="navbar-dropdown">
                    <a className="navbar-option" href="">Projects</a>
                        <div className="navbar-dropdown-content">
                            <ul>
                                <li><a href="https://teamdevil101.itch.io/tcb">TCB Original</a></li>
                                <li><a href="https://kassjak.itch.io/no-more-space">No More Space</a></li>
                                <li><a href="https://www.youtube.com/watch?v=et28frk-kAY">More</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="navbar-social-media"><a href=""><img src="DMW_Logo192.png"></img></a></li>
                <li className="navbar-social-media"><a href=""><img src="DMW_Logo192.png"></img></a></li>
            </ul>
        </nav>
    )
}