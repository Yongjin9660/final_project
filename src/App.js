import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import Menu from "./components/Menu";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";


function App({ state, dispatchLogin }){

  if(sessionStorage.getItem("LOGIN") === "OK" && !state.isLogin){
    var email = sessionStorage.getItem("EMAIL");
    var name = sessionStorage.getItem("NAME");
    var isAdmin = sessionStorage.getItem("ADMIN");
    dispatchLogin(email, name, true, isAdmin);
  }

  return(
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="Body">
          <Route path="/" exact={true} component={Home} />
          <Route path="/profile" exact={true} component={Profile} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/signup" exact={true} component={SignUp} />
        </div>
      </BrowserRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);