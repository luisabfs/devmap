import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DevActions } from "../../store/ducks/devs";

import { Container, Wrapper, Avatar, UsernameWrapper } from "./styles";

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <h1>Devs</h1>

          <ul>
            {this.props.devs.data.map(dev => (
              <li key={dev.id}>
                <Avatar src={dev.avatar} />
                <UsernameWrapper>
                  <strong>{dev.name}</strong>
                  <span>{dev.username}</span>
                </UsernameWrapper>
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
