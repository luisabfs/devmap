import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";

import CustomModal from "../Modal";

import "mapbox-gl/dist/mapbox-gl.css";

export default class App extends Component {
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
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            />
          </Marker>
        </MapGL>
      </Fragment>
    );
  }
}
