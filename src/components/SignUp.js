import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            password : "",
            admin : "",
            succees: false
        }
    }
    getName = (event) => {this.setState({name : event.target.value})};
    getEmail = (event) => {this.setState({email : event.target.value})};
    getPwd = (event) => {this.setState({password : event.target.value})};
    getAdmin = (event) => {this.setState({admin : event.target.value})};

    btnClick = () => {
        const { name, email, password, admin } = this.state;
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(admin);
        this.setState({Success : true});

        axios.post('login/signup', {name : name, email : email, pwd : password, admin : admin})
        .then(function(response){
            console.log(response);
            //console.log(this.state.succees);
        })
        .catch(error=>{console.log('error : ', error.response)});
    }

    render(){
        if(this.state.Success === true){
            console.log(this.state.Success);
            return <Redirect to={{pathname: "/"}} />;
        }
        return(
        <div className="SignUp">
            <h1>회원가입</h1>
                <h3>NAME</h3>
                <p><input type="text" value={this.state.name} onChange={this.getName} required /></p>
                <h3>E-MAIL</h3>
                <p><input type="text" value={this.state.email} onChange={this.getEmail} required /></p>
                <h3>PASSWORD</h3>
                <p><input type="text" value={this.state.password} onChange={this.getPwd} required /></p>
                <h3>ADMIN CODE</h3>
                <p><input type="text" value={this.state.admin} onChange={this.getAdmin} /></p>
                <p><input type="button" onClick={this.btnClick.bind(this)} value="SignUp" /></p>
        </div>
        );
    }
}

export default withRouter(SignUp);