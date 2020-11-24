import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    login = () => {
        var data = document.getElementsByClassName('loginData');
        console.log(data[0].value);
        console.log(data[1].value);
        axios.post('/login', {id : data[0].value, pwd : data[1].value})
        .then(function(response){console.log(response);})
        .catch(error=>{console.log('error : ', error.response)});
    }

    render(){
        return(
        <div className="Login">
            <h1>Login</h1>
            <p><input type="text" name="id" placeholder="id" className="loginData" required /></p>
            <p><input type="password" name="pwd" placeholder="password" className="loginData" required /></p>
            <p><input type="button" onClick={this.login} value="login" /></p>
            <a href="/signup">SignUp</a>
        </div>
        );
    }
}

export default Login;