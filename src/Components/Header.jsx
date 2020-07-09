import React from "react";
import logo from "../logo.png"

const Header = ({headerText}) => {
    return(
        <header>
            <div className = "container_logo" >
                <img src={logo} alt="Icon"/>
            </div>
        <h1>{headerText}</h1>
        <i className="fa fa-arrows-alt" aria-hidden="true" id="expand-icon"></i>
        </header>
    )
}

export default Header;