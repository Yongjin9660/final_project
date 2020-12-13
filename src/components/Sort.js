import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import '../style/Sort.css';

function Sort({ dispatchCriteria, dispatchSearch }) {
    const [text, setText] = useState("");
   
    return(
        <div className="Sort">

            <div className="search">
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="제목을 입력하세요"></input>
                <button onClick={()=>{
                    setText("");
                    dispatchSearch(text);
                }  
                }>검색</button>
            </div>

            <div className="buttons">
                <button onClick={()=>{
                    dispatchCriteria("rating");
                }}>평점 순</button>
                <button onClick={()=>{
                    dispatchCriteria("ratingNumber");
                }}>평점 많은 순</button>
                <button onClick={()=>{
                    dispatchCriteria("new");
                }}>최근에 추가된</button>
            </div>
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
