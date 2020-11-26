import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isUser: false,
			_id : '',
			_pwd: ''
		}
		this.getId = this.getId.bind(this);
		this.getPwd = this.getPwd.bind(this);
	  }
	login = () => {
		// var data = document.getElementsByClassName('loginData');
		console.log(this.state.id);
		console.log(this.state.pwd);

		axios.post('/login', { email: this.state._id, pwd: this.state._pwd })
			.then(function (response) {
				console.log('Here!');
				console.log(response.data);
				console.log('End');
				console.log(response.data.length);

				if (response.data.length !== 0) {
					alert('로그인 성공!');
					this.setState({ isUser: true });
					console.log('Thnak')
				}else{
					alert('로그인 실패!');
				}

			}.bind(this))
			.catch(error => { console.log('error : ', error.response) });
	};
	logout = () => {
		this.setState({ isUser: false });
	};
	getId(event){
		this.setState({_id : event.target.value});
	};
	getPwd(event){
		this.setState({_pwd : event.target.value});
	}
	render() {
		return (
			<section className="container">
				{ this.state.isUser ? (
					<div className="AfterLogin">
						<h1>Login Success</h1>
						<p><input type="button" onClick={this.logout} value="logout" /></p>
					</div>
				) : (
						<div className="BeforeLogin">
							<h1>Login</h1>
							<p><input type="text" name="id" placeholder="email" value={this.state.id} onChange={this.getId} required /></p>
							<p><input type="password" name="pwd" placeholder="password" value={this.state.pwd} onChange={this.getPwd} required /></p>
							<p><input type="button" onClick={this.login} value="login" /></p>
							<a href="/signup">SignUp</a>
						</div>
					)}
			</section>
		);
	}
}

export default Login;