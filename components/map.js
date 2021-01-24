import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40.8054,
      long: -74.0241
    };
  }
  render() {
    return (
      <MapContainer
        center={[40.8054, -74.0241]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFpa3VydXNhbWEiLCJhIjoiY2trYW15NGw4MGVzMzJxb2JkZHJna2g0dSJ9.sPjpsTtZ9TVMV3YDDWnjIg`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker
          position={[this.state.lat, this.state.long]}
          draggable={true}
          animate={true}
        >
          <Popup>Location goes here</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
