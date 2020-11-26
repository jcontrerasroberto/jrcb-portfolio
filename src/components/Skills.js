import React from 'react'
import './Skills.css'
import Tech from './Tech'
import { TechItems } from './TechItems'

function Skills(){
    return(
        <div className="skills">
            <div className="Title">
                <h2>Skills</h2>
            </div>
            <div className="Area">
                <div className="area-title">
                    <p>Web development</p>
                </div>
                <div className="card-container">
                    {TechItems.map((item, index) => {
                        if (item.category==='web'){
                            return (
                                <Tech key={index} src={item.src} name={item.name} experience={item.experience} />
                            )
                        }
                    })}
                </div>
            </div>
            <div className="Area">
                <div className="area-title">
                    <p>Software development</p>
                </div>
                <div className="card-container">
                    {TechItems.map((item, index) => {
                        if (item.category==='software'){
                            return (
                                <Tech key={index} src={item.src} name={item.name} experience={item.experience} />
                            )
                        }
                    })}
                </div>
            </div>
            <div className="Area">
                <div className="area-title">
                    <p>App development</p>
                </div>
                <div className="card-container">
                    {TechItems.map((item, index) => {
                        if (item.category==='app'){
                            return (
                                <Tech key={index} src={item.src} name={item.name} experience={item.experience} />
                            )
                        }
                    })}
                </div>
            </div>
            <div className="Area">
                <div className="area-title">
                    <p>Other skills</p>
                </div>
                <div className="card-container">
                    {TechItems.map((item, index) => {
                        if (item.category==='other'){
                            return (
                                <Tech key={index} src={item.src} name={item.name} experience={item.experience} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills