import React from "react";
import Header from "../Header/Header";
import OurSkills from "../OurSkills/OurSkills";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Header />
            <OurSkills />
            <Services />
            <OurTeam />
        </div>
    );
};

export default Home;
