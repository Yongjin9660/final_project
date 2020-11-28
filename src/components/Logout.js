import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { withRouter } from 'react-router-dom';

function Logout({ dispatchLogout }) {

    function tempLogout(){
        alert('로그아웃!');
        dispatchLogout();
    }
    
    return(
        <button onClick={tempLogout}>Logout</button>
    );
}

// class Logout extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     render() {
//         return (
//             <button onClick={function () {
//                 this.props.logout();
//                 alert('로그아웃!');
//                 this.props.history.push('/');
//             }.bind(this)}>Logout</button>
//         );
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        dispatchLogout: () => dispatch(actionCreators.Logout(false, false))
    };
}

export default connect(null, mapDispatchToProps)(Logout);
