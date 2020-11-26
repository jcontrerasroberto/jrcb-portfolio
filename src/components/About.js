import React from 'react'
import './About.css'

function About(){
    return(
        <div className="AboutGlobal" id="prueba">
            <div className="AboutTitle">
                <h2>About Me</h2>
            </div>
            <div className="description">
                <p>Welcome to my portfolio!</p>
                <p>
                    My name is Roberto and I'm 20 years old.
                    <br />
                    I love everything about technologies and learning something new every day.
                    I enjoy listening to music while developing and I've been programmer for more than 6 years, even before the university.
                    <br />
                    I study at ESCOM - IPN, one of the&nbsp;
                    <a href="https://empleosti.com.mx/blog/las-mejores-universidades-para-estudiar-sistemas-computacionales/">
                    most important schools in Mexico
                    </a> to study Computer Science Engineer.
                    <br />
                    Most of the time I'm a self-taught programmer learning with courses and practice. I develop in different areas like desktop software, mobile apps or website development (frontend and backend) and I can tell you that I'm good at what I do.
                    Currently I'm practicing cyber security and competitive programming.
                    <br /> With nothing more to say I hope you enjoy my website!
                </p>
            </div>
        </div>
    )
}

export default About