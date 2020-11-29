import React from 'react';
import { Link } from "react-router-dom";

function Content({ id, title, url }) {
    return (
        <div className="content">
            <Link to={{
                pathname: `/review/${id}`,
                state: {
                    title,
                    url
                }
            }}>
                <img src={url} title={title} alt={title}/>
                <div className="content_data">
                    <h3 className="content_title">{title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Content;