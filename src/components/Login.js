import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			isUser: false
		}
	}

	componentDidMount() {
		fetch('http://localhost:4000/login')
			.then(res => res.json())
			.then(user => this.setState({ user }));
	}

	login = () => {
		var data = document.getElementsByClassName('loginData');
		console.log(data[0].value);
		console.log(data[1].value);
		axios.post('/login', { email: data[0].value, pwd: data[1].value })
			.then(function (response) {
				console.log('Here!');
				console.log(response.data);
				console.log('End');
				console.log(response.data.length);
				if (response.data.length !== 0) {
					this.setState({ isUser: true });
					console.log('Thnak')
				}
			}.bind(this))
			.catch(error => { console.log('error : ', error.response) });
	};
	logout = () => {
		this.setState({isUser:false});
	};

	render() {
		return (
			<section className="container">
				{ this.state.isUser ? (
					<div className="In">
						<h1>Login Success</h1>
						<p><input type="button" onClick={this.logout} value="logout" /></p>
					</div>
				) : (
					<div className="Login">
						<h1>Login</h1>
						<p><input type="text" name="id" placeholder="id" className="loginData" required /></p>
						<p><input type="password" name="pwd" placeholder="password" className="loginData" required /></p>
						<p><input type="button" onClick={this.login} value="login" /></p>
						<a href="/signup">SignUp</a>
					</div>
				) }
			</section>
		);
	}
}

export default Login;