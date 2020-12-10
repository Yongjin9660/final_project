import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from '../store';
import '../style/Sort.css';

function Sort({ dispatchCriteria }) {
    
   
    // function sortBy(criteria){
    //     dispatchCriteria(criteria);
    // }
    return(
        <div className="Sort">
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

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatchCriteria: (criteria) => dispatch(actionCreators.Sort(criteria))
    };
}

export default connect(null, mapDispatchToProps)(Sort);
