import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
	}

<<<<<<< HEAD
	render() {
		//Create account href is used for testing, to be deleted
		return (
			<div className="header">
				<div className="header-title">Help Me!</div>
				<div className="header-nav">
					<Link to="/"> Home </Link> /
					<Link to="/user/login"> Login </Link> /
					<Link to="/create/account"> Create Account </Link> /
					<Link to="/create/account/address"> Logout</Link>
				</div>
			</div>
		);
	}
=======
  render() {
    //Create account href is used for testing, to be deleted
    return (
     <nav className=" navbar navbar-light">
     <ul className="nav navbar-nav">
     <li className="nav-item">
     Sign In
     </li>
     </ul>
     </nav>
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <Link to="/"> Home </Link> /
          <Link to="/user/login"> Login </Link> /
          <Link to="/create/account"> Create Account </Link> /
          <Link to="/create/account/address"> Logout</Link>
        </div>
      </div>
    );
  }
>>>>>>> 4ad9fd8988ee512aec801e1454bf078e0a18fce5
}

export default Header;
