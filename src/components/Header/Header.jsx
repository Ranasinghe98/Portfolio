import React from "react";
import Logo from "../../img/my-logo.png";

import "./header.css";

function Header(){

    return(
        <>
            <div className=" header">
                <img alt="logo" src={Logo} className="header-logo" />
            </div>
        </>
        )
}

export default Header