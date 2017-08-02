import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Header = () => (
    <div className="container-fluid">

        <div className="pull-left">
            <a href="#menu-toggle" className="" id="menu-toggle">
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
            </a>
        </div>

        <div className="pull-right">
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Admin</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Setting</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
)

const Sidebar = () => (
    <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a href="#">
                    Start Bootstrap
                </a>
            </li>
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <a href="#">Shortcuts</a>
            </li>
            <li>
                <a href="#">Overview</a>
            </li>
            <li>
                <a href="#">Events</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
)

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)

const About = () => (
    <div>
        <h1>About</h1>
    </div>
)

const Layout = () => (
    <Router>
        <div>
            <Sidebar />
            <Route exact path="/" component={Header}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Layout;