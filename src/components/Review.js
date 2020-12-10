import { text } from "body-parser";
import React from "react";
import { connect } from 'react-redux';
import '../style/Review.css'
import Star from './Star';
import axios from 'axios';

class Review extends React.Component{

    getDate(id){
        var date = new Date(id);
        var result = date.toLocaleDateString() + "" + date.toLocaleTimeString();
        return result;
    }

    render(){
        const { text, rating, email, id } = this.props.review;
        console.log(this.props.state.email);
        return(
            <li key={id}>
                <div className="_review">
                    <Star rating={rating} />
                    <div className="_review_detail">
                        <p className="_review_text">
                            {text}
                        </p>
                        <div className="_review_additinal">
                            <div className="_review_email">{email}</div>
                            <div className="_review_id">{this.getDate(id)}</div>
                        </div>
                    </div>
                    {this.props.state.email === email ? (
                        <button onClick = {() => {
                            axios.post('/content/deleteReview', {_id: this.props._id ,date : id})
                            .then(function (res) {
                                alert("리뷰를 삭제하였습니다.");
                                window.location.reload(true);
                            })
                            .catch(err => { console.log(err) });
                        }}>삭제</button>
                    ) : (
                        <></>
                    )}
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, null)(Review);