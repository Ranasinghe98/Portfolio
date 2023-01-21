import React, { useEffect } from "react";
import "./projects.css";
import projectsInfo from "./projectsInfo.js";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


const Projects = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.from(".pro-box", {
            scrollTrigger: {
                trigger: ".pro-box",
                start: "top center",
                toggleActions: "restart pause restart none",
            },
            y: 100,
            duration: 1
        })

    }, [])

    return(
        <>
        
            <div className="row">
                <div className="col-12 projectTitle pro-box">
                    <hr/>
                    <h2>Recent <span className="style-word">Projects</span></h2>
                </div>
            </div>
            


            <div className="row projects-box-wrapper pro-box">
                {projectsInfo.map((values)=>{
                    return(
                        <div className="col-sm-12 col-md-4 col-lg-4 project-box">
                            <img src={values.imgSrc} alt={values.altText}/>
                            <h3>{values.title}</h3>
                            <p>{values.content}</p>
                            <a href={values.link} target="_blank" rel="noopener noreferrer">Open Project</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects