import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://fierce-cliffs-21804.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <section className="review">
            <div className="container pt-5 pb-5">
                <div>
                    <h1 className="text-center">
                        Clients <span style={{ color: "#7AB259" }}>Reviews</span>
                    </h1>
                </div>

                <div className="card-deck mt-5">
                    {reviews.map((reviewData) => (
                        <ReviewCard reviewData={reviewData} key={reviewData._id}></ReviewCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
