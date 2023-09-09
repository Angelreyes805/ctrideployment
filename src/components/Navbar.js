import React from "react";
import {Link} from "react-router-dom";
import "../Styles/Navbar.css";
import CTRILogo from "../Images/CTRI_Logo.png";
import UserIcon from "../Images/User-Account-Icon.png";

function NavBar() {
    return (
    <div className="NavigationBar">
        <div className="logo">
            <Link to="/">
            <img src={CTRILogo} alt="Community Translational Research Institute's main logo" width="300px" height="100px" />
            </Link>
        </div>
        <div className="links">
            <Link to="/"> Home</Link>
            <Link to="/About"> About</Link>
            <Link to="/CommunityResources"> Community Resources</Link>
            <Link to="/LogIn">
            <img src={UserIcon} alt="Access your user account by clicking here."/>
            </Link>
        </div>
    </div>
    )
};

export default NavBar;