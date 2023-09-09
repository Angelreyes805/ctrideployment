import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import CommunityResources from "./components/Communityresources.js";
import Footer from "./components/Footer.js";
import LogIn from "./components/Log-in.js";
import CommunityScreening from "./components/CommunityScreening.js";
import HealthBlog from "./components/HealthBlog.js";
import Podcast from "./components/Podcast.js";
import Internships from "./components/Internships.js";
import PrivacyPolicyTermsofUse from "./components/PrivacyPolicyTermsofUse.js"

function App () {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  return (
    <section>
      <div>
        <Router>
          <NavBar className="NavBar"/>
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/CommunityResources" element={<LogIn />} />
            <Route path="/LogIn" element={<LogIn />}/>
            <Route path="/CommunityScreening" element={<LogIn />}/>
            <Route path="/HealthBlog" element={<LogIn />}/>
            <Route path="/Podcast" element={<LogIn />}/>
            <Route path="/Internships" element={<Internships/>}/>
            <Route path="/PrivacyPolicyTermsofUse" element={<PrivacyPolicyTermsofUse/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </section>
  );
};

export default App;
