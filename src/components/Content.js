import React from 'react';
import { Link } from "react-router-dom";
import '../style/Content.css';

function Content({ id, content }) {
    function genre() {
        var genre = content.genre;
        var length = genre[0].length;
        var result = '장르 : ' + genre[0];

        for (var i = 1; i < genre.length; i++) {
            if (length > 15) {
                result += ' . . .';
                break;
            } else {
                length += genre[i].length;
                result += ', ' + genre[i];
            }
        }
        return result;
    }
    function direc() {
        var director = content.director;
        var length = director[0].length;
        var result = '감독 : ' + director[0];

        for (var i = 1; i < director.length; i++) {
            if (length > 15) {
                result += ' . . .';
                break;
            } else {
                length += director[i].length;
                result += ', ' + director[i];
            }
        }
        return result;
    }
    function actor() {
        var actors = content.actors;
        var length = actors[0].length;
        var result = '배우 : ' + actors[0];

        for (var i = 1; i < actors.length; i++) {
            if (length > 10) {
                result += ' . . .';
                break;
            } else {
                length += actors[i].length;
                result += ', ' + actors[i];
            }
        }
        return result;
    }

    return (
        <div className="content">
            <Link to={{
                pathname: `/review/${id}`,
                state: {
                    content: content
                }
            }}>
                <img src={content.url} title={content.title} alt={content.title} />
                <div className="content_movierating">{content.movieRating}</div>
                <div className="content_data">
                    <h2>{content.title} ({content.year})</h2>
                    <div className="rating">평점 {content.rating}
                        <span> {content.ratingNumber} 명 참여</span>
                    </div>
                    <div className="content_genre">
                        {genre()}
                    </div>
                    <div className="content_director">
                        {direc()}
                    </div>
                    <div className="content_actors">
                        {actor()}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Content;