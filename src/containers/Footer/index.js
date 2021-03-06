import React, { Component } from "react";
import "./Footer.css";

import Modal from "../Modal";
import UserProfile from "../UserProfile";
import HelpMe from "../HelpMe";

class Footer extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      activeModal: null
      // click: false
    };

    // functions
    this.setActiveModal = this.setActiveModal.bind(this);
  }

  setActiveModal(e) {
    this.setState({
      activeModal: e.target.value
    });
  }

  render() {
    return (
      <div>
      <div className="darker-red" />
      <div className="dark-red" />
      <footer className="footer-align">
        <button className="footer-btn" value={2} onClick={this.setActiveModal}>Help Me!</button>
        <button className="footer-btn" value={3} onClick={this.setActiveModal}>Your Profile</button>

        <Modal id={2} activeModal={this.state.activeModal}>
          <button
            className="close-btn"
            value={null}
            onClick={this.setActiveModal}>
            <i class="fa fa-times fa-lg" aria-hidden="true"></i>
          </button>
          <HelpMe />
        </Modal>
        <Modal id={3} activeModal={this.state.activeModal}>
          <button
            className="close-btn"
            value={null}
            onClick={this.setActiveModal}>
            <i class="fa fa-times fa-lg" aria-hidden="true"></i>
          </button>
          <UserProfile />
        </Modal>
      </footer>
      </div>
    );
  }
}

export default Footer;
