import React, { useEffect } from "react";
import Logo from "../../img/my-logo.png";
import gsap from "gsap"

function Header(){

  useEffect(() => {

    gsap.from('.header', {
      duration: 1.5,
      y: "-100",
      ease: "bounce"
    })

    gsap.from('.header-logo', {
      duration: 1,
      opacity: 0,
      delay: 1
    })

  }, [])

  return(
    <header className="header">
      <img alt="logo" src={Logo} className="header-logo" fetchpriority="high"/>
    </header>
    )
}

export default Header