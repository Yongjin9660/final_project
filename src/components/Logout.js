import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { actionCreators } from "../store";
import '../style/Logout.css'

function Logout({ dispatchLogout }) {

    function Logout(){
        dispatchLogout();
        sessionStorage.clear();
        return <Redirect to={{ pathname: "/" }} />;
    }
    
    return(
        <div className="Logout">
            <button onClick={Logout}>로그아웃</button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchLogout: () => dispatch(actionCreators.Logout("", "", false, false))
    };
}

export default connect(null, mapDispatchToProps)(Logout);
