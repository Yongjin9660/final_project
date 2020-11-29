import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import Logout from './Logout';

function Menu({ state, dispatchLogin }) {
    return (
        <div className="Menu">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/profile">
                <button>Profile</button>
            </Link>
            {
                state.isLogin ? 
                    <Logout />
                    :
                    <>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/signup">
                        <button>SignUp</button>
                    </Link>
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
