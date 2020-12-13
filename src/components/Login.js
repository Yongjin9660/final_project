import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../style/Login.css'

const crypto = require("crypto");

function Login({ state, dispatchLogin }) {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    function Auth() {
        axios.post('/login', {})
            .then(response => {
                var users = response.data;
                var email, name;
                var isLogin = false;
                var isAdmin = false;

                for (var i = 0; i < users.length; i++) {
                    if (users[i].email === text && users[i].password === crypto.createHash('sha512').update(password).digest('base64')) {
                        console.log(users[i]);
                        email = users[i].email;
                        name = users[i].name;
                        isLogin = true;
                        isAdmin = users[i].isAdmin;
                        break;
                    }
                }
                if (isLogin) {
                    alert('로그인 성공!');
                    dispatchLogin(email, name, isLogin, isAdmin);
                    sessionStorage.setItem("LOGIN", "OK");
                    sessionStorage.setItem("EMAIL", email);
                    sessionStorage.setItem("NAME", name);
                    sessionStorage.setItem("ADMIN", isAdmin);
                } else {
                    alert('로그인 실패!');
                }
            })
            .catch(err => { console.log(err) });
    }

    if (state.isLogin) {
        return <Redirect to={{ pathname: "/" }} />;
    }
    else {
        return (
            <div className="Login">
                <div className="login_form">
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="ID를 입력해주세요." />
                    <button onClick={Auth}>로그인</button>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요." />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatchLogin: (email, name, isLogin, isAdmin) => dispatch(actionCreators.Login(email, name, isLogin, isAdmin))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);