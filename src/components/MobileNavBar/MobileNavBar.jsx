import React from "react"
import "./mobilenavbar.css"
import { NavLink } from "react-router-dom"


const MobileNavBar = () => {
    return(<>
        <div className="mobileMenuWrapper">
            <div className="mobileNav">
            <div className="menuItemWrapper">
                <NavLink exact to="/dev.roshitha" className="listItem" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-house"></i><br/><span className="spanListMobile">Home</span></NavLink>
                <NavLink to="/about" className="listItem" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-circle-info"></i><br/><span className="spanListMobile">About</span></NavLink>
                <NavLink to="/education" className="listItem" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-graduation-cap"></i><br/><span className="spanListMobile">Education</span></NavLink>
                <NavLink to="/projects" className="listItem" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-file-code"></i><br/><span className="spanListMobile">Projects</span></NavLink>
                <hr/>
            </div>
            </div>

            <div className="diver">
                <hr/>
            </div>

            <div className="menuContact">
                <div className="socialIcons">
                    <li><a href="https://www.linkedin.com/in/roshitha-ranasinghe-962482189/" rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/https.roshitha/" rel="noreferrer" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/RoshithaRana" rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://wa.me/+94703639744" rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href="https://github.com/Ranasinghe98" rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="mailto:sajithroshitha98@gmail.com" rel="noreferrer" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
                </div>

                <div className="contactSection">
                    <div className="call-box">
                        <a href="tel:+94703639744"><i class="fa-solid fa-phone"></i> +94 70 36 39 744</a>
                    </div>
                </div>
            </div>


        </div>
    </>)
}

export default MobileNavBar;