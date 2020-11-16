import React, {useState} from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'

function Navbar(){

    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);

    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><a href="/" className="navbar-logo">RobertCont</a></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            <ul className={clicked? 'nav-menu active': 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}             
            </ul>
        </nav>
    )
}

export default Navbar