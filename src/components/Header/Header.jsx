import React from "react";
import Logo from "../../img/my-logo.png";

import "./header.css";

function Header(){

    return(
        <>
            <div className="col-12 col-md-12 col-sm-12 col-xs-12 header">
                <img alt="logo" src={Logo} className="header-logo" />
            </div>
            <div className="test"></div>
        </>
        )
}

export default Header