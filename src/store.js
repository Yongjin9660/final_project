import {createStore} from 'redux';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SORT = "SORT";

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

const Sort = (criteria) => {
    return {
        type: SORT,
        criteria
    }
}

const initialState = {
    email : "",
    name : "",
    isLogin : false,
    isAdmin : false,
    criteria : "",
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {...state, email : action.email, name : action.name, isLogin : action.isLogin, isAdmin : action.isAdmin};
        case LOGOUT:
            return {...state, email : action.email, name : action.name, isLogin : action.isLogin, isAdmin : action.isAdmin};   
        case SORT:
            return {...state, criteria : action.criteria};
        default:
            return state;
    }
}

export const actionCreators = {
    Login,
    Logout,
    Sort,
};

const store = createStore(reducer);

export default store;