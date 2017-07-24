import React from 'react';
import ReactDOM from 'react-dom';
//import { Login } from 'component/login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




// class LoginComponent extends React.Component{
//     render(){
//         return (
//
//         )
//     }
// }

const Login = () => (
    <div className="login-outer">
        <div className="login-inner">
            <form method="post" action="" className="login-form">
                <div className="form-header">
                    <label>Login</label>
                </div>
                <div className="form-body">
                    <div className="form-group">
                        <label>Username or Email</label>
                        <input type="text" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-md btn-primary btn-block" to="/"> Login </button>
                        <button type="submit" className="btn btn-md btn-primary btn-block"> Register </button>
                        <Link className="" to='/register'>Register</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
);

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


ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={Login}/>
            <Route path="/register" component={SignUp}/>
        </div>
    </Router>
), document.getElementById('login-screen'));