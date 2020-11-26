import React from 'react';
import { Link, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Auth from './Auth';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }
    getEmail = (event) => {this.setState({email : event.target.value})};
    getPwd = (event) => {this.setState({password : event.target.value})};

    // if(this.props.user){
    //     console.log('Here is user in if');
    // }else{
    //     console.log('Here is user in else');
    // }

    render() {
        const user = this.props.user;
        if(!user){
            console.log('Here render : ');
            console.log(user);
            console.log('end');
            return <Redirect to={{pathname: "/"}} />;
        }else{
            console.log('in Else');
            console.log(user);
            console.log('end');
        }
        

        return (
            <div className="Login">
                <h1>Login</h1>
                <input type="text" value={this.state.email} onChange={this.getEmail} placeholder="email" />
                <input type="password" value={this.state.password} onChange={this.getPwd} placeholder="password" />
                <button onClick={function(){
                    this.props.login(this.state.email, this.state.password) 
                }.bind(this)}>Login</button>
            </div>
        );
    }
}

export default Login;