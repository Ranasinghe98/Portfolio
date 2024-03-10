import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import gsap from "gsap"

const Navbar = () => {

  useEffect(() => {
  gsap.from(".navigation", {
    x: -300,
    duration: 1,
    ease: "bounce",
    opacity: 0
  })
  }, [])

  function addStyle(){
    const navDiv = document.querySelector('.navigation');
    navDiv.classList.add('span-nav');
  }

  function removeStyle(){
    const navDiv = document.querySelector('.navigation');
    navDiv.classList.remove('span-nav');
  }

  return(<>
      <div className="navigation" id="naviSpan" onMouseOver={addStyle} onMouseOut={removeStyle}>
        <div className="inner-navigation">
          <ul className="links">
            <li className="link">
              <NavLink exact to="/dev.roshitha" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}>
                <i class="fa-solid fa-house"></i>
                <span className="spanList">Home</span>
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/about" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}>
                <i class="fa-solid fa-circle-info"></i>
                <span className="spanList">About</span>
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/education" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}>
                <i class="fa-solid fa-graduation-cap"></i>
                <span className="spanList">Education</span>
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/projects" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}>
                <i class="fa-solid fa-file-code"></i>
                <span className="spanList">Projects</span>
              </NavLink>
            </li>
          </ul>
          {/* <NavLink to="/contact" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-address-book"></i><span className="spanList">Contact</span></NavLink> */}
        </div>

        <div className="side-footer" id="footerSpan">
          <div className="social-icons">
            <h3>Social Icons</h3>
            <li><a href="https://www.linkedin.com/in/roshitha-ranasinghe/" rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/dev.roshitha/" rel="noreferrer" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/RoshithaRana" rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://wa.me/+94703639744" rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/dev-roshitha" rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="mailto:sajithoshitha98@gmail.com" rel="noreferrer" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
          </div>
            <div className="call-box">
              <a href="tel:+94703639744"><i class="fa-solid fa-phone"></i> +94 70 36 39 744</a>
            </div>
            <p className="footer-text">Copyrights 2022 | Dev Roshitha</p>
        </div>
      </div>
  </>)
}

export default Navbar