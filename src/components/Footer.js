import React from 'react'
import './Footer.css'

function Footer(){
    return(
        <footer>
            <div className="copyright">
                <p>&copy; 2013 - Organisation</p>
            </div>
            <div className="social">
                <a href="/" className="support">Contact Us</a>
                <a href="/" className="face">f</a>
                <a href="/" className="tweet">t</a>
                <a href="/" className="linked">in</a>
            </div>
        </footer>
    )
}

export default Footer