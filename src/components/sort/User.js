import React from 'react';
import { connect } from "react-redux";
import './User.css';
import axios from 'axios';
import Star from '../Star';
import Link from '../../lib/Link';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            reviews: []
        }
    }
    componentDidMount() {
        if (this.props.location.state === undefined) {
            this.props.history.push("/");
        }
        this.getReviews();
    }
    getReviews = async () => {
        var user = this.props.location.state.user;
        await axios.post(`/review/${user}`, { user : user })
            .then(data => {
                this.setState({ reviews: data.data[0].reviews, isLoading: false });
            })
            .catch(err=>console.log(err))
    }
    getContentName = (content_id) => {
        let contents = this.props.state.contents;
        let result = contents.filter(content => {
            return content._id === content_id;
        })
        console.log(result[0].title);
        return result[0].title;
    }
    getDate(date){
        var temp = new Date(date);
        var result = temp.toLocaleDateString() + "" + temp.toLocaleTimeString();
        return result;
    }

    render() {
        const { reviews } = this.state;
        return (
            <div className="User">
                {this.state.isLoading ? (
                        <div className="Loading">
                            <span>Loading...</span>
                        </div>
                    ) : (
                        <div className="list">
                            {reviews.map(review => (
                                <div className="eachReview">
                                    <div className="title">{Link.makeTitleLink(review.content_id, this.getContentName(review.content_id))}</div>
                                    <Star rating={review.rating} />
                                    <div className="rating">{review.rating}</div>
                                    <div className="email">{this.props.location.state.user}</div>
                                    <br />
                                    <div className="text">{review.text}</div>
                                    <div className="date">{this.getDate(review.Date)}</div>
                                    <div className="clear"></div>
                                </div>
                                ))}
                            </div>
                        )
                    }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state };
}

export default connect(mapStateToProps, null)(User);