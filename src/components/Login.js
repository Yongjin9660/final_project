import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import { Link, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Auth from './Auth';
import axios from 'axios';
import { session } from "passport";
const crypto = require("crypto");


function Login({ state, dispatchLogin }) {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    console.log(state);

    function Auth() {
        console.log(text);
        console.log(password);
        axios.post('/login', {})
            .then(response => {
                var users = response.data;
                var isLogin = false;
                var isAdmin = false;

                for (var i = 0; i < users.length; i++) {
                    if (users[i].email === text && users[i].password === crypto.createHash('sha512').update(password).digest('base64')) {
                        console.log(users[i]);
                        isLogin = true;
                        isAdmin = users[i].isAdmin;
                        break;
                    }
                }

                if (isLogin) {
                    alert('로그인 성공!');
                    dispatchLogin(isLogin, isAdmin);
                    sessionStorage.setItem("Hello", "world");
                } else {
                    alert('로그인 실패!');
                }
            })
            .catch(err => { console.log(err)});
    }
    if(state.isLogin){
        return <Redirect to={{pathname: "/"}} />;
    }
    else{
        return (
            <div className="Login">
                <h1>Login</h1>
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={Auth}>Login</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state : state };
  }

function mapDispatchToProps(dispatch, ownProps) {
    console.log('ownProps');
    console.log(ownProps);
    return {
        dispatchLogin : (isLogin, isAdmin) => dispatch(actionCreators.Login(isLogin, isAdmin))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email : "",
//             password : ""
//         }
//     }
//     getEmail = (event) => {this.setState({email : event.target.value})};
//     getPwd = (event) => {this.setState({password : event.target.value})};

//     render() {
//         const user = this.props.user;
//         if(!user){
//             console.log('Here render : ');
//             console.log(user);
//             console.log('end');
//             return <Redirect to={{pathname: "/"}} />;
//         }else{
//             console.log('in Else');
//             console.log(user);
//             console.log('end');
//         }


//         return (
//             <div className="Login">
//                 <h1>Login</h1>
//                 <input type="text" value={this.state.email} onChange={this.getEmail} placeholder="email" />
//                 <input type="password" value={this.state.password} onChange={this.getPwd} placeholder="password" />
//                 <button onClick={function(){
//                     this.props.login(this.state.email, this.state.password) 
//                 }.bind(this)}>Login</button>
//             </div>
//         );
//     }
// }