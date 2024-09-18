import React, { useEffect, useState } from "react"
//import { NavLink } from "react-router-dom"
import gsap from "gsap"

const Navbar = () => {

  const [className, setClassName] = useState("")

  useEffect(() => {
  gsap.from(".navigation", {
    x: -300,
    duration: 1,
    ease: "bounce",
    opacity: 0
  })
  }, [])

  useEffect(() => {
    const handleMouseOver = () => {
      setClassName('span-nav')
    }
    const handleMouseOut = () => {
      setClassName('')
    }
    document.querySelector('.navigation').addEventListener("mouseover", handleMouseOver);
    document.querySelector('.navigation').addEventListener("mouseout", handleMouseOut);

    }, [])

  return(<>
      <div className={`navigation ${className}`} id="naviSpan">
        <div className="inner-navigation">
          <ul className="links">
            <li className="link">
              <a href="#home" className="listItems">
                <i className="fa-solid fa-house"></i>
                <span className="spanList">Home</span>
              </a>
            </li>
            <li className="link">
              <a href="#about" className="listItems">
                <i className="fa-solid fa-circle-info"></i>
                <span className="spanList">About</span>
              </a>
            </li>
            <li className="link">
              <a href="#education" className="listItems">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className="spanList">Education</span>
              </a>
            </li>
            <li className="link">
              <a href="#projects" className="listItems">
                <i className="fa-solid fa-file-code"></i>
                <span className="spanList">Projects</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="side-footer" id="footerSpan">
          <div className="social-icons">
            <h3>Social Icons</h3>
            <li><a href="https://www.linkedin.com/in/roshitha-ranasinghe/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/dev.roshitha/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/RoshithaRana" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://wa.me/+94703639744" rel="noreferrer" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/dev-roshitha" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="mailto:sajithoshitha98@gmail.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
          </div>
            <div className="call-box">
              <a href="tel:+94703639744"><i className="fa-solid fa-phone"></i> +94 70 36 39 744</a>
            </div>
            <p className="footer-text">Copyrights 2022 | Dev Roshitha</p>
        </div>
      </div>
  </>)
}

export default Navbar