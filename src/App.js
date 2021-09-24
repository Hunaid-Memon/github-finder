import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/Users/Users";
import axios from "axios";
import "./App.css";
import Search from "./components/Users/Search";
import Alert from "./components/layouts/Alert";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState( {users: [], loading: false} )

  setAlert = (msg, type) => {
    this.setState( {alert: {msg, type}} )

    setTimeout(() => this.setState({ alert: null}), 5000)
  }

  render() {
    const {users, loading} = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
              <switch>
                <Route exact path='/' render={ props => (
                  <Fragment>
                    <Search searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}/>
                    <Users loading={loading} users={users} />
                  </Fragment>
                )} />
              </switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
