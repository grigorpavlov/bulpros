import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';

import UsersList from "./components/users-list.component";
import ModifyUser from "./components/modify-user.component";
import CreateUser from "./components/create-user.component";
import DeleteUser from "./components/delete-user.component";

class App extends Component {
    render() {
        return (
            <Router>
                <nav className="container navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Users List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={UsersList} />
                <Route path="/modify/:id" component={ModifyUser} />
                <Route path="/create" component={CreateUser} />
                <Route path="/delete/:id" component={DeleteUser} />

                <div className="App-footer">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>


            </Router>
        );
    }
}

export default App;