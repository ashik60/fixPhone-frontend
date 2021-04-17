import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <section id='review' className="review">
            <div className="container pt-5 pb-5">
                <div>
                    <h1 className="text-center">
                        Clients <span style={{ color: "#7AB259" }}>Reviews</span>
                    </h1>
                </div>

                <div className="mt-5">
                    <Carousel
                        responsive={responsive}
                        transitionDuration={500}
                        autoPlaySpeed={2000}
                        infinite={true}
                        autoPlay={true}
                    >
                        {reviews.map((reviewData) => (
                            <ReviewCard reviewData={reviewData} key={reviewData._id}></ReviewCard>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
