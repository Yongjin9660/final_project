import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component{
    signup = () => {
        var data = document.getElementsByClassName('signUpData');
        console.log(data[0].value);
        console.log(data[1].value);
        console.log(data[2].value);
        console.log(data[3].value);

        axios.post('login/SignUp', {name : data[0].value, email : data[1].value, pwd : data[2].value, admin : data[3].value})
        .then(function(response){
            console.log(response);
        })
        .catch(error=>{console.log('error : ', error.response)});
    }
    render(){
        return(
        <div className="SignUp">
            <h1>SignUp</h1>
                <h3>NAME</h3>
                <p><input type="text" name="name" className="signUpData" required /></p>
                <h3>E-MAIL</h3>
                <p><input type="text" name="email" className="signUpData" required /></p>
                <h3>PASSWORD</h3>
                <p><input type="text" name="password" className="signUpData" required /></p>
                <h3>ADMIN CODE</h3>
                <p><input type="text" name="admin" className="signUpData" /></p>
                <p><input type="button" onClick={this.signup} value="SignUp" /></p>
        </div>
        );
    }
}

export default SignUp;