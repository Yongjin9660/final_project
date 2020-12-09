import { text } from "body-parser";
import React from "react";
import '../style/Review.css'
import Star from './Star';
import axios from 'axios';

function Review(props) {

    const { text, rating, email, id } = props.review;

    const getDate = (id) => {
        var date = new Date(id);
        var result = date.toLocaleDateString() + "" + date.toLocaleTimeString().slice(2,);
        return result;
    }
    return (
        <li key={id}>
            <div className="_review">
                <Star rating={rating} />
                <div className="_review_detail">
                    <p className="_review_text">
                        {text}
                    </p>
                    <div className="_review_additinal">
                        <div className="_review_email">{email}</div>
                        <div className="_review_id">{getDate(id)}</div>
                    </div>
                </div>
            </div>
        </li>
    );

}



export default Review