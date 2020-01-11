import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Modal, Button } from "react-bootstrap/";

import { Creators as UserCreators } from "../../../store/ducks/user";

function Create(props) {
  const { isVisible } = props.redux;

  const { hideModalNewUser } = props;

  console.log(isVisible);

  return (
    <Modal show={isVisible} onHide={hideModalNewUser}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = state => ({
  redux: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);
