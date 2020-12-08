import React from "react";
import { connect } from 'react-redux';
import '../style/Detail.css';
import axios from 'axios';
import Review from './Review';
import Star from './Star';
import review from '../lib/Review';


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            rating: 0,
            reviewText: "",
            reviews: []
        }
    }
    textChange = (e) => {
        this.setState({ reviewText: e.target.value })
    }
    getReviews = async () => {
        var id = this.props.location.state.content._id;
        await axios.get(`http://localhost:4000/content/review/${id}`, { id: id })
            .then(review => {
                console.log(review.data);
                this.setState({ reviews: review.data, isLoading: false });
            })
    }

    componentDidMount() {
        if (this.props.location.state === undefined) {
            this.props.history.push("/");
        }
        this.getReviews();
    }
    clickStar = (e) => {
        var rating = parseInt(e.target.title);
        this.setState({ rating: rating });
        var temp, i;
        for (i = 1; i <= rating; i++) {
            temp = document.getElementById(i);
            if (i % 2 !== 0) {
                temp.style.backgroundPosition = "0px -1031.5px";
            } else {
                temp.style.backgroundPosition = "-13px -1031.5px";
            }
        }
        for (i = rating + 1; i <= 10; i++) {
            temp = document.getElementById(i);
            if (i % 2 !== 0) {
                temp.style.backgroundPosition = "0px -1060px";
            } else {
                temp.style.backgroundPosition = "-13px -1060px";
            }
        }
    }
    makeReview = () => {
        if (this.props.state.isLogin === false) {
            alert("로그인 후 이용해주세요!");
            return;
        }
        if (this.state.reviewText === "" || this.state.rating === 0) {
            alert("리뷰를 작성해주세요!");
            return;
        }
        axios.post('/content/createReview', {
            content_id: this.props.location.state.content._id,
            id: Date.now(),
            email: this.props.state.email,
            rating: this.state.rating,
            reviewText: this.state.reviewText
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(err => console.log('error : ', err));
    }


    render() {
        const { content } = this.props.location.state;

        console.log(content);

        if (this.props.location.state) {
            return (
                <div className="Review">
                    <div className="content_info_area">
                        <div className="poster">
                            <img src={content.url} title={content.title} alt={content.title} />
                        </div>
                        <div className="content_info">
                            <div>{content.title}</div>
                            <div>{content.year}</div>
                            <Star rating={content.rating} />
                            <div>(평점 : {content.rating}, {content.ratingNumber}명 참여)</div>
                            <div className="div_inline">감독</div>
                            <div className="tag_inline">{content.director.map(direc => (
                                review.makeDirecLink(direc)
                            ))}</div>
                            <br />
                            <div className="div_inline">배우</div>
                            <div className="tag_inline">{content.actors.map(actor => (
                                review.makeActorLink(actor)
                            ))}</div>
                            <br />
                            <div className="div_inline">장르</div>
                            <div className="tag_inline">{content.genre.map(genre => (
                                review.makeGenreLink(genre)
                            ))}</div>
                            <div>관람등급 : {content.movieRating}</div>
                            <div>{content.desc}</div>
                        </div>

                    </div>

                    <div className="review">
                        <div className="btn_star">
                            <button type="button" className="star1" id="1" title="1" onClick={this.clickStar}></button>
                            <button type="button" className="star2" id="2" title="2" onClick={this.clickStar}></button>
                            <button type="button" className="star1" id="3" title="3" onClick={this.clickStar}></button>
                            <button type="button" className="star2" id="4" title="4" onClick={this.clickStar}></button>
                            <button type="button" className="star1" id="5" title="5" onClick={this.clickStar}></button>
                            <button type="button" className="star2" id="6" title="6" onClick={this.clickStar}></button>
                            <button type="button" className="star1" id="7" title="7" onClick={this.clickStar}></button>
                            <button type="button" className="star2" id="8" title="8" onClick={this.clickStar}></button>
                            <button type="button" className="star1" id="9" title="9" onClick={this.clickStar}></button>
                            <button type="button" className="star2" id="10" title="10" onClick={this.clickStar}></button>
                        </div>
                        <textarea value={this.state.reviewText} onChange={this.textChange}></textarea>
                        <button onClick={this.makeReview}>리뷰 등록</button>
                        <br />
                        {this.state.isLoading ? (
                            <div className="Loading">
                                <span>Loading...</span>
                            </div>
                        ) : (
                                <div className="reveiw_list">
                                    <ul>
                                        {this.state.reviews.map(review => (
                                            <li>
                                                <Review
                                                    key={review.id}
                                                    review={review}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    state: state
});


export default connect(mapStateToProps, null)(Detail);