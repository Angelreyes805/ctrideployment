import React,{ useState } from "react";
import "../Styles/Home.css";

import HeroImage from "../Images/Comprehensive-Services-Icon.png";
import ProblemImage from "../Images/Medical-Billing-Example.png";
import AndyJohnson from "../Images/CTRI CEO Image.jpeg";
import CTRILogo from "../Images/CTRI_Logo.png";

import EnrollmentForm from"../Forms/enrollmentForm";


function Home () {
    const [showForm, setShowForm] = useState(false);
    const handleCTAClick = () => {
        setShowForm(true);
    }
    return (
        <section>
            <section className="MobileLogo">
            <div>
            <img src={CTRILogo} alt="Community Translational Research Institute's main logo" width="300px" height="100px" />
        </div>
            </section>
            <section className="HeroSection">
                <div>
                    <h1> We Place Holistic Care<br /> Into SoCal Communities</h1>
                    <h2> Our Services Empower You To Live your Best Life.</h2>
                    <p className="CTANudge"> Need a nudge?</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Click For Good Health.
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
                <div>
                    <img src={HeroImage} alt="We help provide mental health, health insurance, education, medical screening, work, and health education services to you and your community." width="430px" height="470px"/>
                </div>
            </section>
            <section className="ProblemSection">
                <div className="ProblemContainer">
                    <h2 className="h2Label"> Expensive Medical Bills <br /> Ruin Your Family's Life </h2>
                    <p className="pLabel"> Costly Hospital Expenses Destroy Family Wealth. Often Leaving Loved Ones To Start Over On Their Financial Journey.</p>
                    {!showForm && (
                        <p className="GhostCTA" onClick={handleCTAClick}>
                            Protect Your Health
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
                <div className="ProblemImage">
                <img src={ProblemImage} alt="The Community Translational Research Institute helps you protect your family's wealth by protecting your health both physical and mental." width="240px" height="500px"/>
                </div>
            </section>
            <section className="FunFact">
                <div>
                    <p className="CTANudge"> Fun Fact: CTRI has been helping communities avoid medical bill debt since 2014.</p>
                </div>
            </section>
            <section className="SolutionSection">
                <div>
                    <h2 className="h2Label">Your Path To Health In 4 Steps</h2>
                    <p className="pLabel"> Step 1: Create Your Account</p>
                    <p className="pLabel"> Step 2: Wait To Be Contacted</p>
                    <p className="pLabel"> Step 3: Accept Our Help</p>
                    <p className="pLabel"> Step 4: Enjoy Your Health</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Start Your Journey, Today
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
            </section>
            <section className="FunFact">
                <p className="CTANudge"> Quick Fact: CTRI Works With Universities To Reduce Costs Associated With Holistic Care. </p>
                <h2 className="h2Label"> What Is The Community Translational Research Institute?</h2>
            </section>
            <section className="ShowFaceSection">
                <div className="ShowFaceContainer">
                    <p className="pLabel"> "The Community Translational Research Institute is a network of researchers
                        and organizations dedicated too uplifting communities in need. We acknowledge
                        that healthcare is difficult and confusing, but our mission is to make it simple
                        and accessible for you and your family."
                    </p>
                    <p className="CTANudge"> Still on the fence?</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Learn Our Story.
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
                <div>
                    <div className="FaceWrap">
                    <img src={AndyJohnson} alt="Doctor Andy Johnson is a tenured health scientist and currently holds the position as CTRI's Chief Executive Officer."/>
                    </div>
                    <div className="ShowFaceContainer2">
                    <p><b> Dr. Johnson, Andy </b></p>
                    <p className="CTANudge"> CEO of CTRI</p>
                    </div>
                </div>
            </section>
            <section className="FunFact">
                <p className="CTANudge"> Did You Know? CTRI Is Operated By Public Health Professionals.</p>
            </section>
            <section className="QuoteSection">
                <div>
                <h2 className="h2Quote"> "Health Is Not Created Alone. Health Is Created <br></br>
                Together With People Who Support You."</h2>
                <p><b> - Dr. Johnson, Andy </b></p>
                <p className="CTANudge"> CEO of CTRI</p>
                </div>
            </section>
            <section className="FinalCTASection">
                <div className="CTABox">
                <h2 className="h2LabelCTA"> Develop A Culture of Health And Enjoy Life?</h2>
                    <p className="plabel">Do Not Let Your Health Stop You From Enjoying Life.</p>
                    <p className="CTANudge">Want Support?</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Join Our community, Today
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
                <div className="CTABox1">
                <h2 className="h2LabelCTA"> Are You Looking For An Internship?</h2>
                    <p className="plabel">We Provide You A Tailored Experience To Meet Your Requirements..</p>
                    <p className="CTANudge">Want More?</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Click To Learn More
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
                <div className="CTABox1">
                    <h2 className="h2LabelCTA"> Want To Join Our Network?</h2>
                    <p className="plabel">We Help facilitate Your Organization Through Subsidized Services.</p>
                    <p className="CTANudge">Skeptical?</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Become A Believer
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
            </section>
        </section>
    )
};

export default Home;