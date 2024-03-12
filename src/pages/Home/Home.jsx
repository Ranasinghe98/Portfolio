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
            </div>
          </div>
          <div className="text-wrapper">
            <h1>roshitha ranasinghe</h1>
            <span>frontend developer who hunger in javascript and loves coffe</span>
          </div>
        </div>
        <div className="text-container">
          <div className="details-wrapper">
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, officia vel? Eligendi nesciunt suscipit eos repellendus fuga cum explicabo, distinctio incidunt sunt cupiditate deserunt ducimus quam. Iure, adipisci cumque! Labore!</p>
          </div>
        </div>
      </div>
  );
}

export default Home;