import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import TrapList from "./trapList";
import Login from "./login";
import ManageUsers from "./manageusers";
import Profile from "./profile";
import TrapDetail from "./trapdetail";
import Avatars from "./avatars";

import "./styles.css";

const initialState = {
    profile: {
        isLoggedIn: false,
        login: "",
        password: "",
        isAdmin: false
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'login': {
            return {...state, profile: {isLoggedIn: true, login: action.data.login, password: action.data.password, isAdmin: action.data.isAdmin}};
        }
        case 'logout': {
            return {...state, profile: {isLoggedIn: false, login: "", password: "", isAdmin: false}};
        }
        default: {
            return state;
        }
    }
}

function App() {

    const [{profile}, dispatch] = useReducer(reducer, initialState);

    return (
        <Router className="App">
            <div>
                <Header dispatch={dispatch} profile={profile}/>
                <Route path="/" exact component={TrapList} />
                <Route path="/login/" render={(props) => <Login {...props} dispatch={dispatch} />} />
                <Route path="/manageusers/" exact component={ManageUsers} />
                <Route path="/profile/" exact component={Profile} />
                <Route path="/detail/" exact component={TrapDetail} />            
                <Route path="/avatars/" exact component={Avatars} />
            </div>
        </Router>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
