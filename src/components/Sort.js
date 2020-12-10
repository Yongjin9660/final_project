import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import '../style/Sort.css';

function Sort({ dispatchCriteria, dispatchSearch }) {
    const [text, setText] = useState("");
   
    return(
        <div className="Sort">

            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={()=>{
                setText("");
                dispatchSearch(text);
            }  
            }>검색</button>

            <button onClick={()=>{
                dispatchCriteria("rating");
            }}>평점 순</button>
            <button onClick={()=>{
                dispatchCriteria("ratingNumber");
            }}>평점 많은 순</button>
            <button onClick={()=>{
                dispatchCriteria("new");
            }}>최근에 추가된</button>
            <button onClick={()=>{
                dispatchCriteria("old");
            }}>오래 전에 추가된</button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchCriteria: (criteria) => dispatch(actionCreators.Sort(criteria)),
        dispatchSearch: (searchTitle) => dispatch(actionCreators.Search(searchTitle))
    };
}

export default connect(null, mapDispatchToProps)(Sort);
