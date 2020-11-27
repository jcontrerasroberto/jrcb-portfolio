import React from 'react'
import './Tech.css'

function Tech(props){
    return(
        <div className="tech-card">
            <div className="tech-card-inner">
            <div className="tech-front">
                <div className="logo">
                <img 
                    src={props.src} 
                    alt="icon of tech"/>
                </div>
                <div className="tech-info">
                    <span className="tech-name">{props.name}</span> 
                </div>
            </div>
            <div className="tech-back">
                <span className="experience">+{props.experience} years of experience</span><br />
            </div> 
            </div>
        </div>
    )
}


export default Tech
