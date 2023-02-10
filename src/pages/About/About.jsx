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

    useEffect(() => {

        document.title = "About | Dev Roshitha"

    }, [])

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.from(".about-left", {
            scrollTrigger: {
                trigger: ".about-left",
                start: "top center",
                toggleActions: "restart pause restart none"
            },
            x: -300,
            opacity: 0,
            duration: 1,
            ease: "bounce"
        })

        gsap.from(".about-right", {
            scrollTrigger: {
                trigger: ".about-right",
                start: "top center",
                toggleActions: "restart pause restart none"
            },
            x: 300,
            opacity: 0,
            duration: 1,
            ease: "bounce"
        })

        gsap.from(".about-left-box", {
            scrollTrigger: {
                trigger: ".about-left-box",
                start: "top center",
                toggleActions: "restart pause restart none"
            },
            x: -700,
            duration: 1,
            ease: "bounce",
            transition: 0.5,
        })

        gsap.from(".about-right-box", {
            scrollTrigger: {
                trigger: ".about-right-box",
                start: "top center",
                toggleActions: "restart pause restart none"
            },
            x: 700,
            duration: 1,
            ease: "bounce",
        })

        gsap.from(".abtSlider", {
            scrollTrigger: {
            trigger: ".abtSlider",
            start: "top center",
            toggleActions: "restart pause restart none"
            },
            opacity: 0,
            duration: 3
        })

        gsap.from(".left-box",{
            scrollTrigger: {
                trigger: ".left-box",
                start: "top center",
                toggleActions: "restart pause restart none"
            },
            opacity: 0,
            duration: 1.5,
            x: -300,
            ease: "bounce"
        })

        gsap.from(".right-box",{
            scrollTrigger: {
                trigger: ".right-box",
                start: "top center",
                toggleActions: "restart pause restart none"
            },
            opacity: 0,
            duration: 1.5,
            x: 300,
            ease: "bounce"
        })

    }, [])

    return(<>
        <div className="row">
            <div class="col-md-6 col-lg-6 col-sm-12 abtContent about-left">
                <hr />
                <h2>About <span className="style-word">Me</span></h2>
                <p>Hello im Roshitha Ranasinghe and i am a frontend web developer and wordpress web web developer at Brandocean (pvt)ltd. And also im degree holder in bachelor of information technology(BIT) Hons at Lincoln university and HDCS(Higher Diploma in Computer Science) holder at Infortec International Asia Campus(IIAC) and . Interested in web application development  using latest web technologies and frameworks (ReactJS, NodeJS, Mongodb, Bootstrap) I hope  to be a mobile application developer using react native framework in my future. Im also passionate about learn new things quickly. build new products by applying software engineering concepts and hunger to work with cutting-edge technologies.</p>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12 abtImage about-right">
                <img src={aboutImg} alt="about" />
            </div>
        </div>




        <div className="row">
            <div className="col-12 contentTitle titleHead about-wrapper">
                <hr/>
                <h2>I'm <span className="style-word">flexible</span> with these</h2>
            </div>
        </div>

        <div className="row aboutBoxWrapper about-wrapper">
            <div className="about-box col-sm-12 col-md-6 col-lg-6 about-left-box">
                <img src={webDesign} alt="about-description" />
                <h3>web design & development</h3>
                <p>Design very unique and striking latest UX/UI technologies. And i can create amazing website for your business with having beautiful user friendly interfaces.</p>
            </div>
            <div className="about-box col-sm-12 col-md-6 col-lg-6 about-right-box">
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


        <div className=" row about-slider-wrapper abtSlider">
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
            <div className="col-sm-12 col-md-12 col-lg-12 timeline">
                <div className="container left-container">
                    <div className="text-box left-box">
                        <h3>BrandOcean(Pvt)Ltd</h3>
                        <small>2021 - 2022</small>
                        <p>(01 year 06 month) – Have strong experience in WordPress web
                            design and development (including one e-commerce website
                            with Elementor page builder) Designed and developed
                            responsive websites using WordPress and Elementor page
                            builder.
                        </p>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="text-box right-box">
                        <h3>Circlebook(Pvt)Ltd</h3>
                        <small>2022</small>
                        <p>(06-Month) – Successfully completed internship program at
                            circlebook(Pvt)Ltd as a WordPress web developer and react-native frontend developer. During internship I’ve created WordPress websites using elementor and DIVI page builders. And also I’ve created
                            invoice generator mobile app UI using react-native.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default About