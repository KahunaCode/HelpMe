import React, { Component } from 'react';
// import logo from './logo.svg';
import {connect} from 'react-redux';
import {signIn} from '../../actions/Users.js';

// COMPONENTS

// CONTAINERS
import Map from '../Map';
import Header from '../Header';
import SignUp from '../SignUp';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp;