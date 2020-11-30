import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from "../store";
import '../style/Logout.css'

function Logout({ dispatchLogout }) {

    function tempLogout(){
        alert('로그아웃!');
        dispatchLogout();
        sessionStorage.clear();
    }
    
    return(
        <div className="Logout">
            <button onClick={tempLogout}>Logout</button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchLogout: () => dispatch(actionCreators.Logout("", "", false, false))
    };
}

export default connect(null, mapDispatchToProps)(Logout);
