import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Logout from './Logout';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //   </Link>
    //   {authenticated ? (
    //   <LogoutButton logout={logout} />
    //   ) : (
    //   <Link to="/login">
    //       <button>Login</button>
    //   </Link> 

    render() {
        return (
            <div className="Menu">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/profile">
                    <button>Profile</button>
                </Link>
                {this.props.user ? 
                    (
                    <div className="LoginForm">
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to="/signup">
                            <button>SignUp</button>
                        </Link>
                    </div>
                    ) : 
                    (<Logout logout={this.props.logout}/>)}
            </div>
        );
    }
}

export default Menu;