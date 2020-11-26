import React from 'react'
import About from '../About'
import Skills from '../Skills'
import Presentation from '../Presentation'
import './Home.css'

function Home(){
    return(
        <>
        <Presentation />
        <Skills />
        <About /> 
        </>     
    )
}

export default Home