import React from "react";
import '../style/Star.css';

function Star(props) {
    if(props.rating <= 0.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 1.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 2.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 3.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 4.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 5.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 6.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 7.5){
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star2" ></button>
                <button type="button" className="star1" ></button>
                <button type="button" className="star2" ></button>
            </div>
        );
    }else if(props.rating <= 8.5){
        return(
            <div className="Star_Rating">
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star1" ></button>
            <button type="button" className="star2" ></button>
        </div>
        );
    }else if(props.rating <= 9.5){
        return(
            <div className="Star_Rating">
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star4" ></button>
            <button type="button" className="star3" ></button>
            <button type="button" className="star2" ></button>
        </div>
        );
    }else{
        return(
            <div className="Star_Rating">
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
                <button type="button" className="star3" ></button>
                <button type="button" className="star4" ></button>
            </div>
        );
    }


}

export default Star;