import React,{ useState } from "react";
import "../Styles/About.css";

import EnrollmentForm from"../Forms/enrollmentForm";

function About () {
    const [showForm, setShowForm] = useState(false);
    const handleCTAClick = () => {
        setShowForm(true);
    }
    return (
        <section>
            <section className="AboutHero">
                <div className="AHeroContainer1">
                <h1 className="h1HERO"> The Community Translational Research Institute. </h1>
                <h2 className="h2HERO"> We Provide Comprehensive Medical Services To Empower You Into A Culture of Health.</h2>
                </div>
                <div className="AHeroContainer2">
                <p className="CTANudge"> Are You A Community Partner?</p>
                    {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Join Our Network
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                </div>
            </section>
            <section className="AboutMVP">
                <div className="MVPContainer">
                <h2 className="h2Label"> Why Should You Let Us Help You? </h2>
                <p className="pMVP"> Our mission to deliver high-quality healthcare at an affordable price is the reason we exist. After analyzing years of medical data, we decided to use our training, experience, and education to improve the world.</p>
                </div>
                <div className="MVPContainer">
                <h2 className="h2Label"> Envision A Brighter Future</h2>
                <p className="pMVP">We see a healthier future as a reality by bringing people together to solve complex issues. By accepting our help, you become an advocate for a healthier future. </p>
                </div>
                <div className="MVPContainer">
                <h2 className="h2Label"> Become A Health Advocate</h2>
                <p className="pMVP"> Health advocates are people that see those around them as their family. A community of families should be supportive in their physical and mental health journeys.</p>
                </div>
            </section>
            <section className="AboutCTA">
                <div className="CTABox">
                    <h2 className="CTABoxh2"> Gain Healthcare Experience</h2>
                    <p className="CTADescriptor"> Intern for Academic Credit or Professional Experience.</p>
                    <div className="CTABoxCTA">
                        <p className="CTANudge"> Click to Start</p>
                        {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Internship Application
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                    </div>
                </div>
                <div className="CTABox1">
                    <h2 className="CTABoxh2"> Expand Your Organization's Reach</h2>
                    <p className="CTADescriptor"> Partner With Us To Build A Stronger Healthier Community.</p>
                    <div className="CTABoxCTA">
                        <p className="CTANudge"> Click To Join</p>
                        {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Work With Us
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                    </div>
                </div>
                <div className="CTABox1">
                    <h2 className="CTABoxh2"> Donate to A Worthy Cause</h2>
                    <p className="CTADescriptor"> Support Our Mission To Build A Healthier Southern California.</p>
                    <div className="CTABoxCTA">
                        <p className="CTANudge"> See Our Impact</p>
                        {!showForm && (
                        <p className="MainCTA" onClick={handleCTAClick}>
                            Visit Our Donation Page
                        </p>
                        )}
                        {showForm && <EnrollmentForm />}
                    </div>
                </div>
            </section>
            <section className="AboutInternshipFAQs">
                <div className="MVPContainer">
                    <h2 className="h2toh1"> Internship Frequently Asked Questions </h2>
                    <p className="h2Descriptor"> We Support People In Their Goals For Entering The Field of Healthcare.</p>
                    <p className="h2Descriptor"> We Believe Organizations Should Create Opportunities for People To Emerge as Leaders.</p>
                </div>
                <div className="MVPContainer">
                    <h3 className="h3Descriptor"> Do I Obtain Clinical Experience?</h3>
                    <p className="h2Descriptor"> Clinical Experience Depends On Availability As We Partner With Health Systems and Universities To Deliver Care.</p>
                </div>
                <div className="MVPContainer">
                    <h3 className="h3Descriptor"> Is The Experience Tailored To Me?</h3>
                    <p className="h2Descriptor"> Our Internship Experiences Focus On Professional Development, so It Aligns With Your Future Career Endeavors.</p>
                </div>
                <div className="MVPContainer">
                    <h3 className="h3Descriptor"> Will You Work With My University?</h3>
                    <p className="h2Descriptor"> Yes, Our Goal Is To Support Your Professional and Academic Development.</p>
                </div>
            </section>
        </section>
    )
};

export default About;