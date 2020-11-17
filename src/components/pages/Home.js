import React from 'react'
import About from './About'
import './Home.css'

function Home(){
    return(
        <>
        <div className="presentation">
            <img src="/img-home.jpg" alt="img-home" className="hero" />
            <div className="welcome-card">
                <h2>
                    <span className="first-message-hi">Hi!<br /><br /></span>
                    I'm <br /><span className="name-text">Roberto Contreras</span><br /> <span  className="carrer-name">Computer Science Student</span> 
                </h2>
            </div>
            <div className="intro-card">
                <h2>What I do</h2>
                <p>Software developmnet</p>
                <p>Web development</p>
                <p>App development</p>
                <a href="/work"><button className="button-work">Check out my work</button></a>
            </div> 
        </div>
        <About /> 
        </>     
    )
}

export default Home