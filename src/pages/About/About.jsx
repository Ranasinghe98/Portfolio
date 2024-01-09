import React, { useEffect } from "react";
//import aboutSlider from "./aboutSlides"
import "./about.css";
import aboutImg from "../../img/about-img.png"
import webDesign from "../../img/design.png"
import webDeveloping from "../../img/developing.png"
//import gsap from "gsap"
//import ScrollTrigger from "gsap/src/ScrollTrigger"

const About  = () => {

    // useEffect(() => {

    //     document.title = "About | Dev Roshitha"

    // }, [])

    // gsap.registerPlugin(ScrollTrigger)

    // useEffect(() => {

    // }, [])

    return(<>
        <div className="about-top-section">
            <div class="abtContent about-left">
                <hr className="title-line"/>
                <h2 className="light-heading">About <span className="style-word">Me</span></h2>
                <p>Hello im Roshitha Ranasinghe and i am a frontend web developer and wordpress web web developer at Brandocean (pvt)ltd. And also im degree holder in bachelor of information technology(BIT) Hons at Lincoln university and HDCS(Higher Diploma in Computer Science) holder at Infortec International Asia Campus(IIAC) and . Interested in web application development  using latest web technologies and frameworks (ReactJS, NodeJS, Mongodb, Bootstrap) I hope  to be a mobile application developer using react native framework in my future. Im also passionate about learn new things quickly. build new products by applying software engineering concepts and hunger to work with cutting-edge technologies.</p>
            </div>
            <div class="abtImage about-right">
                <img src={aboutImg} alt="about" />
            </div>
        </div>

            <div className="contentTitle titleHead about-wrapper">
                <hr className="title-line"/>
                <h2 className="light-heading">I'm <span className="style-word">flexible</span> with these</h2>
            </div>

        <div className="aboutBoxWrapper about-wrapper">
            <div className="about-box about-left-box">
                <img src={webDesign} alt="about-description" />
                <h3>web design & development</h3>
                <p>Design very unique and striking latest UX/UI technologies. And i can create amazing website for your business with having beautiful user friendly interfaces.</p>
            </div>
            <div className="about-box about-right-box">
                <img src={webDeveloping} alt="about-description" />
                <h3>web application development</h3>
                <p>Design and develop fully Integrated web based application for in your organization with using cutting-edge technologies.</p>
            </div>
        </div>

            <div className="contentTitle titleHead">
                <hr className="title-line"/>
                <h2 className="light-heading"><span className="style-word">Work</span> Experience</h2>
            </div>

        <div className="work-ex-wrapper">
            <div className="timeline">
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

                <div className="container left-container">
                    <div className="text-box left-box">
                        <h3>Ebeyonds(Pvt)Ltd</h3>
                        <small>2023 - Present</small>
                        <p> I’ve joined as associate web and
                            gained my experience in front-end development with HTML SASS
                            javascript and trained to create re-usable components on their
                            web projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default About