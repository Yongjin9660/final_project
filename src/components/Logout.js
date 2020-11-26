import React from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <button onClick={function () {
                this.props.logout();
                alert('로그아웃!');
                this.props.history.push('/');
            }.bind(this)}>Logout</button>
        );
    }
}

export default withRouter(Logout);