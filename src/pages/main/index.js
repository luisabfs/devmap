import React, { Component } from "react";
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
    location: {
      lat: 0,
      lng: 0
    },
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
    const [longitude, latitude] = e.lngLat;

    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    this.setState({
      modalShow: true,
      location: { lat: latitude, lng: longitude }
    });
  };

  notifySuccess = () => {
    toast.success("Success adding user! :)");
  };

  notifyError = () => {
    toast.error(this.props.devs.error);
  };

  render() {
    return (
      <>
        <CustomModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          location={this.state.location}
        />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Sidebar />
          {this.props.devs.data.map(dev => (
            <Marker
              key={dev.id}
              latitude={dev.lat}
              longitude={dev.lng}
              onClick={this.handleMapClick}
              captureClick={true}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src={dev.avatar}
                alt="User avatar"
              />
            </Marker>
          ))}
        </MapGL>
        {this.props.devs.error && this.notifyError()}
        <ToastContainer key={3} />
      </>
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
