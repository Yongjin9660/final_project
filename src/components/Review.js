import React from "react";
import '../style/Review.css';
import review from '../lib/Review';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          rating:0,
          reviews: []
        }
      }

    componentDidMount() {
        if (this.props.location.state === undefined) {
            this.props.history.push("/");
        }
    }
    clickStar = (e) => {
        var rating = parseInt(e.target.title);
        this.setState({rating : rating});
        var temp, i;
        for(i = 1; i<= rating ; i++){
            temp = document.getElementById(i);
            if(i%2 !== 0){
                temp.style.backgroundPosition = "0px -1031.5px";
            }else{
                temp.style.backgroundPosition = "-13px -1031.5px";
            }
        }
        for(i = rating + 1; i<= 10 ; i++){
            temp = document.getElementById(i);
            if(i%2 !== 0){
                temp.style.backgroundPosition = "0px -1060px";
            }else{
                temp.style.backgroundPosition = "-13px -1060px";
            }
        }

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
                            <div>평점 : {content.rating}</div>
                            <div>평점 준 사람 수 : {content.ratingNumber}</div>
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
                        <textarea></textarea>
                        <button>리뷰 등록</button>
                        <br />
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

                </div>
            );
        } else {
            return null;
        }
    }
}

export default Review;