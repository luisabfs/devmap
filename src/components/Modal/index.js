import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DevActions } from "../../store/ducks/devs";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class CustomModal extends Component {
  state = {
    input: ""
  };

  handleAddDev = e => {
    e.preventDefault();

    this.props.addDevRequest(this.state.input);

    this.setState({ input: "" });
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add developer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleAddDev}>
            <input
              type="text"
              value={this.state.input}
              onChange={e => this.setState({ input: e.target.value })}
              placeholder="Github username"
            />
            <Button onClick={this.props.onHide} type="submit">
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  devs: state.devs
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomModal);
