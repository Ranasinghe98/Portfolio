import React, { useState, useEffect } from "react";
//import gsap from "gsap"
import IMG01 from '../../img/img-01.png'
import IMG02 from '../../img/img-02.png'

const Home = () => {

  useEffect(() => {
    document.title = "Portfolio | Dev Roshitha"
  }, [])

  // useEffect(() => {
  //   gsap.from(".sliderWrapper", {
  //       y: 200,
  //       opacity: 1,
  //       duration: 2,
  //       ease: "bounce"
  //   })
  // }, [])

    return (
      <div className="main-wrapper">
        <div className="image-text-container">
          <div className="image-wrapper">
            <div className="image-inner-wrp">
              <img className="first-img" src={IMG01} alt="Roshitha Ranasinghe" />
              <img className="second-img" src={IMG02} alt="Roshitha Ranasinghe" />
              <span className="title first">roshitha</span><br/>
              <span className="title second">ranasinghe</span>
            </div>
          </div>
          <div className="text-wrapper">
            <span>frontend developer who hunger in javascript and loves coffe</span>
          </div>
        </div>
        <div className="text-container">
          <div className="details-wrapper">
          <hr className="title-line"/>
                <h2 className="light-heading">About <span className="style-word">Me</span></h2>
                <p>Hello im Roshitha Ranasinghe and i am a frontend web developer and wordpress web web developer at Brandocean (pvt)ltd. And also im degree holder in bachelor of information technology(BIT) Hons at Lincoln university and HDCS(Higher Diploma in Computer Science) holder at Infortec International Asia Campus(IIAC) and . Interested in web application development  using latest web technologies and frameworks (ReactJS, NodeJS, Mongodb, Bootstrap) I hope  to be a mobile application developer using react native framework in my future. Im also passionate about learn new things quickly. build new products by applying software engineering concepts and hunger to work with cutting-edge technologies.</p>
          </div>
        </div>
      </div>
  );
}

export default Home;