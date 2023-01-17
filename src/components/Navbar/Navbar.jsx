import React from "react"
import "./navbar.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {

    function addStyle(){
        
        const footerDiv = document.querySelector('.side-footer');
        footerDiv.style.visibility = "visible";


        const spanMenu = document.querySelectorAll('.spanList');
        for(const list of spanMenu){
            list.classList.add('styled');
        }
        
        const navDiv = document.querySelector('.navigation');
        navDiv.classList.add('spanNav');
    }

    function removeStyle(){
        const footerDiv = document.querySelector('.side-footer');
        footerDiv.style.visibility = "hidden";

        const spanMenu = document.querySelectorAll('.spanList');
        for(const list of spanMenu){
            list.classList.remove('styled');
        }

        const navDiv = document.querySelector('.navigation');
        navDiv.classList.remove('spanNav');
    }



    return(<>

        {/* <div className="row"> */}
            <div className="col-3 navigation" id="naviSpan" onMouseOver={addStyle} onMouseOut={removeStyle}>
                <div className="inner-navigation">
                    <NavLink exact to="/dev.roshitha" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-house"></i><span className="spanList">Home</span></NavLink>
                    <NavLink to="/about" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-circle-info"></i><span className="spanList">About</span></NavLink>
                    <NavLink to="/education" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-graduation-cap"></i><span className="spanList">Education</span></NavLink>
                    <NavLink to="/projects" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-file-code"></i><span className="spanList">Projects</span></NavLink>
                    {/* <NavLink to="/contact" className="listItems" style={({ isActive }) => ({color: isActive ? '#00ffff87' : '#faebd7'})}><i class="fa-solid fa-address-book"></i><span className="spanList">Contact</span></NavLink> */}
                </div>

                <div className="side-footer" id="footerSpan">
                    <div className="social-icons">
                        <h3>Social Icons</h3>
                            <li><a href="https://www.linkedin.com/in/roshitha-ranasinghe-962482189/" rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/https.roshitha/" rel="noreferrer" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/RoshithaRana" rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="https://wa.me/+94703639744" rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="https://github.com/Ranasinghe98" rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li><a href="mailto:sajithroshitha98@gmail.com" rel="noreferrer" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
                            
                    </div>
                    <div className="call-box">
                        <a href="tel:+94703639744"><i class="fa-solid fa-phone"></i> +94 70 36 39 744</a>
                    </div>
                    <p className="footer-text">Copyrights 2022 | Dev Roshitha</p>
                </div>
            </div>
        {/* </div> */}
    </>)
}

export default Navbar