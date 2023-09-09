import React from "react";
import "../Styles/Internships.css";

function Internships () {
    return (
        <section>
            <section className="InternshipHero">
                <div>
                <h1> Kickstart Your Healthcare Career <br></br>With A Student Internship. </h1>
                <h2> We Work With Your University To Ensure Academic Credit.</h2>
                </div>
                <div className="Buttons">
                <p className="MainCTA"> Student Application.</p>
                <p className="GhostCTA"> Non-Student Application</p>
                </div>
            </section>
            <section className="InternshipMVP">
                <div>
                <h2 className="SectionH1"> Do Not Let Paperwork Stop You. </h2>
                <p className="SectionH2"> - We Work With Your University For Academic Credit.</p>
                <p className="SectionH2"> - We Help You Develop A Project Deliverable.</p>
                <p className="SectionH2"> - We Expose You To Real-World Experience.</p>
                </div>
                <div className="Buttons">
                <p className="GhostCTA"> Apply Here, Today.</p>
                </div>
            </section>
            <section className="InternshipCTA">
                <h2 className="CTAH1"> Our Paperwork Is Made Easy For You:</h2>
                <div className="SubSection">
                    <div className="CTANumberBox">
                        <p className="CTANumber"> 1 </p>
                    </div>
                    <div className="InternshipCTABox">
                        <h3 className="CTAH2"> Apply and Interview </h3>
                        <p className="CTAH3"> - After Receiving Your Application, We <br></br> Review and Schedule A Meeting.</p>
                        <div>
                            <p className="GhostCTA"> Internship Application</p>
                        </div>
                    </div>
                </div>
                <div className="SubSection">
                    <div className="InternshipCTABox">
                        <h3 className="CTAH2"> Get Matched</h3>
                        <p className="CTAH3"> - We Do Our Best To Match You With <br></br> Professionals In Your Chosen Field.</p>
                        <div>
                        <p className="GhostCTA"> Start The Process, Today.</p>
                        </div>
                    </div>
                    <div>
                        <p className="CTANumber"> 2 </p>
                    </div>
                </div>
                <div className="SubSection">
                    <div>
                        <p className="CTANumber"> 3 </p>
                    </div>
                    <div className="InternshipCTABox">
                        <h3 className="CTAH2"> Post-Internship Success</h3>
                        <p className="CTAH3"> - Leverage Your Experiences In Graduate Applications.</p>
                        <p className="CTAH3"> - Flex Your New Resume For A Job In Healthcare.</p>
                        <div>
                            <p className="GhostCTA"> Start Interning, Now.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default Internships;