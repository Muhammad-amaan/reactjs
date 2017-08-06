import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Network from './network';

const Header = () => (
    <div className="admin-header">
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
                <Link  to="/">Dashboard</Link>
            </li>
            <li>
                <Link  to="/about">About</Link>
            </li>
            <li>
                <Link  to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
)

const Home = () => (
    <div className="">
        <div>
            <h1>Home</h1>
            <div id="home-data">
                <Network/>
            </div>
        </div>
    </div>
)

const About = () => (
    <div>
        <h1>About</h1>
    </div>
)

const Contact = () => (
    <div>
        <h1>Contact</h1>
    </div>
)




const Layout = () => (
    <Router>
        <div>
            <Header/>
            <Sidebar />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
)


export default Layout;