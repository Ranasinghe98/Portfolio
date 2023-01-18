import React, { useEffect } from "react";
import aboutSlider from "./aboutSlides"
import "./about.css";
import aboutImg from "../../img/about-img.png"
import webDesign from "../../img/design.png"
import webDeveloping from "../../img/developing.png"
import workImg from "../../img/work-ex.png"
import gsap from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger"

const About  = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.to(".about-left", {
            scrollTrigger: {
                trigger: ".about-left",
                start: "top center",
                toggleActions: "restart pause reverse none"
            },
            x: 100,
            
            duration: 2
        })

    }, [])

    return(<>
        <div className="row">
            <div class="col-md-6 col-lg-6 col-sm-12 abtContent">
                <hr />
                <h2>About <span className="style-word">Me</span></h2>
                <p>Hello im Roshitha Ranasinghe and i am a frontend web developer and wordpress web web developer at Brandocean (pvt)ltd. And also im degree holder in bachelor of information technology(BIT) Hons at Lincoln university and HDCS(Higher Diploma in Computer Science) holder at Infortec International Asia Campus(IIAC) and . Interested in web application development  using latest web technologies and frameworks (ReactJS, NodeJS, Mongodb, Bootstrap) I hope  to be a mobile application developer using react native framework in my future. Im also passionate about learn new things quickly. build new products by applying software engineering concepts and hunger to work with cutting-edge technologies.</p>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12 abtImage">
                <img src={aboutImg} alt="about" />
            </div>
        </div>




        <div className="row">
            <div className="col-12 contentTitle titleHead">
                <hr/>
                <h2>I'm <span className="style-word">flexible</span> with these</h2>
            </div>
        </div>

        <div className="row aboutBoxWrapper">
            <div className="about-box about-left col-sm-12 col-md-6 col-lg-6">
                <img src={webDesign} alt="about-description" />
                <h3>web design & development</h3>
                <p>Design very unique and striking latest UX/UI technologies. And i can create amazing website for your business with having beautiful user friendly interfaces.</p>
            </div>
            <div className="about-box about-right col-sm-12 col-md-6 col-lg-6">
                <img src={webDeveloping} alt="about-description" />
                <h3>web application development</h3>
                <p>Design and develop fully Integrated web based application for in your organization with using cutting-edge technologies.</p>
            </div>
        </div>


        <div className="row">
            <div className="col-12 abtSlider titleHead">
                <hr/>
                <h2>My <span className="style-word">Technologies</span></h2>
            </div>
        </div>


        <div className=" row about-slider-wrapper">
            <div className="col-sm-12 col-md-6 col-lg-6 about-slider">
                    <div className="slide-track">
                        {aboutSlider.map((values)=>{
                            return(
                            <div className="slide-image">
                                <img src={values.slide} height="200" width="200" alt="" />
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>


        <div className="row">
            <div className="col-12 contentTitle titleHead">
                <hr/>
                <h2><span className="style-word">Work</span> Experience</h2>
            </div>
        </div>

        <div className="row work-ex-wrapper">
            <div className="work-img col-sm-12 col-md-6 col-lg-6">
                <img src={workImg} alt="" />
            </div>
            <div className="work-content col-sm-12 col-md-6 col-lg-6">
                <div className="workInnerContent">
                    <h2>BrandOcean(pvt)Ltd.</h2>
                    <p>My current job role is Wordpress web developer at BrandOcean(pvt)Ltd from 2021 to Present</p>
                </div>
            </div>
        </div>
    </>)
}

export default About