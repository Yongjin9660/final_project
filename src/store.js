import {createStore} from 'redux';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const Login = (isLogin, isAdmin) => {
    return{
        type: LOGIN,
        isLogin,
        isAdmin
    }
}

const Logout = (isLogin, isAdmin) => {
    return{
        type: LOGOUT,
        isLogin,
        isAdmin
    }
}


const initialState = {
    isLogin : false,
    isAdmin : false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {...state, isLogin : action.isLogin, isAdmin : action.isAdmin}
        case LOGOUT:
            return {...state, isLogin : action.isLogin, isAdmin : action.isAdmin}
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