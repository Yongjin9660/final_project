import {createStore} from 'redux';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const Login = (email, name, isLogin, isAdmin) => {
    return{
        type: LOGIN,
        email,
        name,
        isLogin,
        isAdmin
    }
}

const Logout = (email, name, isLogin, isAdmin) => {
    return{
        type: LOGOUT,
        email,
        name,
        isLogin,
        isAdmin
    }
}


const initialState = {
    email : "",
    name : "",
    isLogin : false,
    isAdmin : false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {...state, email : action.email, name : action.name, isLogin : action.isLogin, isAdmin : action.isAdmin}
        case LOGOUT:
            return {...state, email : action.email, name : action.name, isLogin : action.isLogin, isAdmin : action.isAdmin}
        default: 
            return state;
    }
}

export const actionCreators = {
    Login,
    Logout
};

const store = createStore(reducer);

export default store;