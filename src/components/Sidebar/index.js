import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DevActions } from "../../store/ducks/devs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Wrapper,
  Avatar,
  UsernameWrapper,
  ActionsWrapper,
  Button
} from "./styles";

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          {!this.props.devs.data.length && <p>No developer added</p>}
          <ul>
            {this.props.devs.data.map(dev => (
              <li key={dev.id}>
                <Avatar src={dev.avatar} />
                <UsernameWrapper>
                  <strong>{dev.name}</strong>
                  <span>{dev.username}</span>
                </UsernameWrapper>

                <ActionsWrapper>
                  <Button
                    type="button"
                    onClick={() => {
                      this.props.removeDev(dev);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </Button>

                  <a
                    href={`https://github.com/${dev.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </ActionsWrapper>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Container>
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
)(Sidebar);
