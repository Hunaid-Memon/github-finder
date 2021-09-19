import React from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => console.log(res.data))
  }

  render() {   
    return (
      <div className='App'>
          <Navbar />
          <div className='container'>
            <Users />
          </div>
      </div>
    )
  }
}


export default App;
