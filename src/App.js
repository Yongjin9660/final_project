import React from 'react';
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
  <BrowserRouter>
    <Route path="/" exact={true} component={Login} />
    <Route path="/home" exact={true} component={Home} />
    <Route path="/signup" exact={true} component={SignUp} />
  </BrowserRouter>
  );
}



export default App;