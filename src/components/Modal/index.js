import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class CustomModal extends Component {
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
          <form action="submit">
            <input placeholder="Github username" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
