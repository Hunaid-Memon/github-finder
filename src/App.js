import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/Users/Users";
import "./App.css";
import Search from "./components/Users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import User from "./components/Users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/Alert/AlertState";

const App = () => {
  
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
                <Switch>
                  <Route exact path='/' render={ props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User}/>
                </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
