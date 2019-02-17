import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoiYXN5bWVzMSIsImEiOiJjanM5YXIyengwbzU3M3pta3NkZzl4bjB4In0.FbEMo7fIArx_TRgnrDs-pw"
    });
    return (
      <div>
        <Map className="map"
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "40vh",
            width: "60vw"
        }}>
          <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer>
        </Map>
      </div>
    );
  }
}

export default App;
