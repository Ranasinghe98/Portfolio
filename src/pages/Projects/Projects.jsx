import React from "react";
import "./projects.css";
import projectsInfo from "./projectsInfo.js";


const Projects = () => {

    return(
        <>
        
            <div className="row">
                <div className="col-12 projectTitle">
                    <hr/>
                    <h2>Recent <span className="style-word">Projects</span></h2>
                </div>
            </div>
            


            <div className="row projects-box-wrapper">
                {projectsInfo.map((values)=>{
                    return(
                        <div className="col-sm-12 col-md-4 col-lg-4 project-box">
                            <img src={values.imgSrc} alt={values.altText}/>
                            <h3>{values.title}</h3>
                            <p>{values.content}</p>
                            <a href={values.link} target="_blank" rel="noopener">Open Project</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects