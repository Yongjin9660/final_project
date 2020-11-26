import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import Menu from "./components/Menu";
import Login from "./components/Login";
import Home from "./components/Home";
import Auth from "./components/Auth";
import SignUp from "./components/SignUp";

// function App() {
//   return (
//   <BrowserRouter>
//     <Route path="/" exact={true} component={Login} />
//     <Route path="/home" exact={true} component={Home} />
//     <Route path="/signup" exact={true} component={SignUp} />
//   </BrowserRouter>
//   );
// }
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user : {}
    }
    this.setUser = this.setUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  setUser(user){
    this.setState({
      user : user
    });
  }

  login( email, password ){
    this.setUser(Auth( email, password ));
  }
  logout(){
    this.setUser( {} );
  }
  moveHome(){
    window.location.href = '/';
  }

  render() {
    return (
      <BrowserRouter>
        <Menu user={this.state.user} logout={this.logout} />

        <div className="Body">
          <Route path="/" exact={true} component={Home} />
          {}
          <Route path="/login" exact={true} render={props => <Login login={this.login} user={this.state.user} />} />
        </div>
      </BrowserRouter>
      // <div className="App">
      //   <div>
      //     {this.state.movies.length !== 0? <h1>{this.state.movies.map(movie =>
      //       <div key={movie._id}>{movie.title}</div>
      //        )}</h1>:<h1>loading...</h1>}
      //   </div>
      // </div>
    );
  }
}



export default App;