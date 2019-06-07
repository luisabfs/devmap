import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";

import CustomModal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DevActions } from "../../store/ducks/devs";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "mapbox-gl/dist/mapbox-gl.css";

class Main extends Component {
  state = {
    modalShow: false,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    // const [longitude, latitude] = e.lngLat;

    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    this.setState({ modalShow: true });
  };

  notifySuccess = () => {
    toast.success("Success adding user! :)");
  };

  notifyError = () => {
    toast.error(this.props.devs.error);
  };

  render() {
    return (
      <Fragment>
        <CustomModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Sidebar />
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapClick}
            captureClick={true}
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48
              }}
              src="https://avatars0.githubusercontent.com/u/21061462?s=400&u=ace292debeb43c5a32c521ef0b0f9a094d9749e3&v=4"
            />
          </Marker>
          {this.props.devs.error && this.notifyError()}
          <ToastContainer />
        </MapGL>
      </Fragment>
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
)(Main);
