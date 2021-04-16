import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurSkills from "../OurSkills/OurSkills";
import OurTeam from "../OurTeam/OurTeam";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Header />
            <OurSkills />
            <Services />
            <OurTeam />
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;
