import React from "react";
import "../Styles/LogIn.css";

function LogIn () {
    return (
        <section className="LogInScreen">
            <div className="LogInBox">
                <h1 className="LogInH1"> Log in here to access exclusive features.</h1>
                <h2 className="InfoH2"> At this moment, you must have been given access by your CTRI healthcare provider.</h2>
                <p className="FutureP"> CTRI is currently working to open access to the public, so we appreciate your patient and continued support. </p>
                <p className="FutureP"> Please click back to return to the website.</p>
            </div>
        </section>
    )
};

export default LogIn;