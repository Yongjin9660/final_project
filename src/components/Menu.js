import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import Logout from './Logout';
import '../style/Menu.css';

function Menu({ state, dispatchLogin }) {
    return (
        <div className="Menu">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            {
                state.isAdmin ?
                    <Link to="/admin">작품 추가</Link> : <></>
            }
            {
                state.isLogin ? 
                    <Logout />
                    :
                    <>
                    <Link to="/login">로그인</Link>
                    <Link to="/signup">회원가입</Link>
                    </>
            }
        </div>
    );
}

function mapStateToProps(state) {
    return { state : state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatchLogin : (email, name, isLogin, isAdmin) => dispatch(actionCreators.Login(email, name, isLogin, isAdmin))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
