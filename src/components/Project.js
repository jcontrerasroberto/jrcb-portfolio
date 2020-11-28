import React from 'react'
import './Project.css'

function Project(props){
    return(
        <div className="project-card">
            <div className="preview">
                <img src={props.preview} alt=""/>
            </div>
            <div className="description-project">
                <h2 className="title-project">{props.title}</h2>
                <div className="techs">
                    {
                        props.techs.map((item, index) => {
                            return (
                                <p key={index}>{item.toUpperCase()}</p>
                            )
                        })
                    }
                </div>
                <div className="buttons">
                    <a className="git-link" href={props.repo} target="_blank" rel="noreferrer">
                        <img src="./tech-icons/github.svg" alt={props.description}></img><p>GitHub</p>
                    </a>
                    {
                        props.demo!=null && 
                            <a className="demo-link" href={props.demo} target="_blank" rel="noreferrer">
                                <p>Demo</p>
                            </a>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Project