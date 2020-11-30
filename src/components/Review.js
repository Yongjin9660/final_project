import React from "react";

class Review extends React.Component {

    componentDidMount() {
        if (this.props.location.state === undefined) {
            this.props.history.push("/");
        }
    }

    render() {
        const {content} = this.props.location.state;

        console.log(content);

        if (this.props.location.state) {
            return (
                <div className="Review">
                    <img src={content.url} title={content.title} alt={content.title}/>
                    <h1>{content.title}</h1>
                    {content.director.map(direc => (
                        <h2>{direc}</h2>
                    ))}
                    {content.actors.map(actor => (
                        <h3>{actor}</h3>
                    ))}
                    {content.genre.map(gen => (
                        <h4>{gen}</h4>
                    ))}
                    <div className="movieRating">{content.movieRating}</div>
                    <div className="desc">{content.desc}</div>
                    <div className="year">{content.year}</div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Review;