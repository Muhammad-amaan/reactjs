import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from './component/layout';
// import Login from './component/login';
// import Admin from './component/admin';



// class LoginComponent extends React.Component{
//     render(){
//         return (
//
//         )
//     }
// }


const SignUp = () => (
    <div className="login-outer">
        <div className="login-inner">
            <form method="post" action="" className="login-form">
                <div className="form-header">
                    <label>Login</label>
                </div>
                <div className="form-body">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-md btn-primary btn-block" to="/"> Login </button>
                        <button type="button" className="btn btn-md btn-primary btn-block"> Register </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);

// class RouterComponent extends React.Component{
//     render(){
//         return (
//
//         )
//     }
// }

// const App = () => (
//
// );


ReactDOM.render(<Layout/>, document.getElementById('wrapper'));