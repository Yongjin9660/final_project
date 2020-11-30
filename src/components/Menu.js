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
            <Link to="/admin">Admin</Link>
            <Link to="/profile">Profile</Link>
            {
                state.isLogin ? 
                    <Logout />
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
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
