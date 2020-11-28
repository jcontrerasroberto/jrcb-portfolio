import React from 'react'
import './Footer.css'

function Footer(){
    return(
        <footer className="Footer">
            <div className="Footer-content">
                <div className="social">
                    <div className="nets">
                        <i class="fab fa-github"></i>
                    </div>
                    <div className="email">
                        <a href="mailto:contreras.jrobert@gmail.com" className="social-link">contreras.jrobert@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer