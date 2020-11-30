import React from 'react';
import { Link } from "react-router-dom";

function Content({ id, content }) {
    return (
        <div className="Content">
            <Link to={{
                pathname: `/review/${id}`,
                state: {
                    content:content
                }
            }}>
                <img src={content.url} title={content.title} alt={content.title}/>
                <div className="content_data">
                    <h3 className="content_title">{content.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Content;