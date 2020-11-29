import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

function Profile({ state }) {
    if (state.isLogin) {
        return (
            <div className="Profile">
                <h1>{state.email}</h1>
                <h1>{state.name}</h1>
                {state.isAdmin ?
                    <h1>관리자 계정입니다</h1> :
                    <h1>사용자계정입니다</h1>
                }
            </div>
        );
    } else {
        return <Redirect to={{ pathname: "/login" }} />;
    }

}

function mapStateToProps(state) {
    return { state: state };
}

export default connect(mapStateToProps, null)(Profile);

