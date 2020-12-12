import React from "react";
import { connect } from 'react-redux';
import '../style/Review.css'
import Star from './Star';
import axios from 'axios';
import Link from '../lib/Link';

class Review extends React.Component {

    getDate(id) {
        var date = new Date(id);
        var result = date.toLocaleDateString() + "" + date.toLocaleTimeString();
        return result;
    }

    render() {
        const { text, rating, email, id } = this.props.review;
        return (
            <div className="_review">
                <Star rating={rating} className="Star_Rating" />
                <div className="_review_detail">
                    <p className="_review_text">
                        {text}
                    </p>
                    <div className="_review_additinal">
                        <div className="_review_email">{Link.makeUserLink(email)}</div>
                        {this.props.state.email === email || sessionStorage.getItem("ADMIN") === "true" ? (
                            <button onClick={() => {
                                axios.post('/content/deleteReview', { _id: this.props._id, date: id, email: email, rating: rating })
                                    .then(function (res) {
                                        alert("리뷰를 삭제하였습니다.");
                                        window.location.reload(true);
                                    })
                                    .catch(err => { console.log(err) });
                            }}>삭제</button>
                        ) : (
                                <></>
                            )}
                        <div className="_review_id">{this.getDate(id)}</div>
                    </div>
                </div>

                <br></br>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, null)(Review);