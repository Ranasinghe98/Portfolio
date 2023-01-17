import React, { useEffect } from "react";
import Logo from "../../img/my-logo.png";
import gsap from "gsap"

import "./header.css";

function Header(){

    useEffect(() => {

        gsap.from('.header', {
            duration: 1.5,
            y: "-100",
            ease: "bounce"
        })

    }, [])

    return(
        <>
            <div className="col-12 col-md-12 col-sm-12 col-xs-12 header">
                <img alt="logo" src={Logo} className="header-logo" />
            </div>
        </>
        )
}

export default Header