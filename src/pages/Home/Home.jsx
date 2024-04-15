import React, { useState, useEffect } from "react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import IMG01 from '../../img/img-01.webp'
import IMG02 from '../../img/img-02.webp'
import { useTypewriter, Cursor } from "react-simple-typewriter"
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    document.title = "Portfolio | Dev Roshitha"
  }, [])

  const [typingText] = useTypewriter({
    words: ["Frontend Developer", "Who Hunger In Javascript", "And Loves Coffe ❤️️☕️"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 20
  })

  useEffect(() => {
    gsap.from(".first-img", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "bounce"
    })

    gsap.from(".second-img", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "bounce"
  })

  gsap.to(".first", {
    x: 50,
    duration: 8,
    scrollTrigger: {
      trigger: '.first',
      start: 'top 30%',
      end: 'top 30%',
      scrub: true,
    }
  });

  gsap.to(".second", {
    x: -50,
    duration: 8,
    scrollTrigger: {
      trigger: '.second',
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    }
  });

  gsap.to(".first-img", {
    x: -50,
    duration: 8,
    scrollTrigger: {
      trigger: '.first-img',
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    }
  });

  }, [])

    return (
      <div className="main-wrapper">
        <div className="image-text-container">
          <div className="image-wrapper">
            <div className="image-inner-wrp">
              <img className="first-img" src={IMG01} alt="Roshitha Ranasinghe" fetchpriority="high"/>
              <img className="second-img" src={IMG02} alt="Roshitha Ranasinghe" fetchpriority="high"/>
              <span className="title first">roshitha</span><br/>
              <span className="title second">ranasinghe</span>
            </div>
          </div>
          <div className="text-wrapper">
            <span>{typingText}</span>
            <Cursor cursorColor='#00ffff'/>
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