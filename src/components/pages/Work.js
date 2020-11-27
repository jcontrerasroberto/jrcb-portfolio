import React from 'react'
import Project from '../Project'
import {ProjectItems} from '../ProjectItems'
import './Work.css'

function Work(){
    return(
        <div className="my-work">
            <div className="title">
                <h2>My projects</h2>
            </div>
            <div className="projects">
                {
                    ProjectItems.map((item, index) => {
                        return (
                            <Project
                                key={index} 
                                title={item.title}
                                preview={item.preview}
                                description={item.description}
                                techs= {item.techs}
                                repo={item.repo}
                                demo={item.demo}
                            />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Work