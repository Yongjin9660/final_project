import React from "react";

function Review(props) {
    return (
        <div className="Review">
            <h1>{props.review.text}</h1>
            <h2>{props.review.rating}</h2>
            <h3>{props.review.email}</h3>
        </div>
    );

}



export default Review