import React from "react";
import {Link} from "react-router-dom";

import "../Styles/Footer.css";

import CTRILogo from "../Images/CTRI_Logo.png";
import Facebook from "../Images/Icons/FacebookIcon.svg";
import Instagram from "../Images/Icons/InstagramIcon.svg";
import LinkedIn from "../Images/Icons/LinkedInIcon.svg";
import Twitter from "../Images/Icons/TwitterIcon.svg";
import Youtube from "../Images/Icons/YoutubeIcon.svg";

function Footer() {
    return (
    <section className="FooterSection">
        <section className="LayerOne">
            <div className="FooterOne">
                <Link to="/">
                <img src={CTRILogo} alt="Community Translational Research Institute's main logo" width="300px" height="100px" />
                </Link>
                <p className="FooterLink"> © 2014 - 2023 CTRI. All rights reserved.</p>
            </div>
            <div>
                    <Link to="/PrivacyPolicyTermsofUse">
                    <p className="FooterLink"> Privacy Policy & Terms of Use.</p>
                    </Link>
                <div className="SocialMediaContainer">
                    <Link to="">
                    <img src={Twitter} alt="Twitter icon that will let you visit our twitter page." width="50px" height="70px" />
                    </Link>
                    <Link to="">
                    <img src={Instagram} alt="Instagram icon that will let you visit our instagram page." width="50px" height="70px" />
                    </Link>
                    <Link to="https://www.facebook.com/people/Community-Translational-Research-Institute/100071525101755/?paipv=0&eav=Afa26WPp_0sNhLPEJ8FQtLGsfMw-ykSQNz2Hr2EobGGsspaKO9_WocUIaEuXWRQ8HN0">
                    <img src={Facebook} alt="Facebook icon that will let you visit our facebook page." width="50px" height="70px" />
                    </Link>
                    <Link to="">
                    <img src={LinkedIn} alt="LinkedIn icon that will let you visit our LinkedIn page." width="50px" height="70px" />
                    </Link>
                    <Link to="">
                    <img src={Youtube} alt="Youtube icon that will let you visit our youtube page." width="50px" height="70px" />
                    </Link>
                </div>
            </div>
        </section>
        <section className="LayerTwo">
            <div className="LayerTwoContainer">
                <Link to="/" className="FooterLinkMain"> Home</Link>
                <Link to="/LogIn" className="FooterLink"> Log-in</Link>
            </div>
            <div className="LayerTwoContainer">
                <Link to="/About" className="FooterLinkMain"> About</Link>
            </div>
            <div className="LayerTwoContainer">
                <Link to="/CommunityResources" className="FooterLinkMain"> Resources</Link>
                <Link to="/CommunityScreening" className="FooterLink"> Screening</Link>
            </div>
            <div className="LayerTwoContainer">
                <Link to="/LogIn" className="FooterLinkMain"> Services</Link>
            </div>
            <div className="LayerTwoContainer">
                <Link to="/LogIn" className="FooterLinkMain"> Content</Link>
                <Link to="/LogIn" className="FooterLink"> Health Blog</Link>
                <Link to="/LogIn" className="FooterLink">Podcast</Link>
            </div>
            <div className="LayerTwoContainer">
                <Link to="/Internships" className="FooterLinkMain"> Internships</Link>
                <Link to="/Internships" className="FooterLink"> Graduates</Link>
                <Link to="/Internships" className="FooterLink"> Undergraduates</Link>
            </div>
        </section>
    </section>
    )
};

export default Footer;