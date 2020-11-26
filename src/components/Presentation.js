import React from 'react'
import './Presentation.css'

function Presentation(){
    return(
        <div className="presentation">
            <img src="/home-img.jpg" alt="img-home" className="hero" />
            <div className="welcome-card">
                <h2>
                    Welcome. <br /> My name is <br /><span className="name-text">Roberto Contreras</span><br />
                    <span className="carrer-name">Computer Science Student</span>
                </h2>  
            </div> 
        </div>
    )
}

export default Presentation