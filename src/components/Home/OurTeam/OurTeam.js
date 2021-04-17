import React from "react";
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpg";
import team3 from "../../../images/team3.jpg";

const teamMembers = [
    {
        name: "James Bond",
        role: "Hardware Engineer",
        image: team1,
    },
    {
        name: "Angelina Jolie",
        role: "Software Engineer",
        image: team2,
    },
    {
        name: "Ema Watson",
        role: "Marketing Exexutive",
        image: team3,
    },
];

const OurTeam = () => {
    return (
        <div id="team" style={{ backgroundColor: "#9aca40" }}>
            <div className="container pb-5">
                <div className="text-center">
                    <h1 className="text-white p-5">Meet Our Great Team Members</h1>
                </div>
                <div className="row">
                    {teamMembers.map((member) => (
                        <div className="col-md-4">
                            <div className="card" style={{ width: "22rem" }}>
                                <img class="card-img-top rounded" src={member.image} alt="..." />
                                <div class="card-body bg-dark text-center text-white">
                                    <h5 class="card-title">{member.name.toUpperCase()}</h5>
                                    <p class="card-text">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
