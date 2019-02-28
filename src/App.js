import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import './App.css';
import Cities from './cities.json'


class App extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoiYXN5bWVzMSIsImEiOiJjanM5YXIyengwbzU3M3pta3NkZzl4bjB4In0.FbEMo7fIArx_TRgnrDs-pw"
    });
    // can do if statements for what color each city should be
    //break cities up by ranks - different layers, different colors, different radius
    // if you want dots to be different it is the layers but multiple dots with that style is feature

    const layers = Cities.map(city => {
      return(
          <Feature coordinates={[city.latitude, city.longitude]}
          key={city.rank} />
      )
    })
    return (
      <div>
        <Map className="map"
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "85vh",
            width: "100vw"
          }}
          zoom= {[2.5]}>

          <Layer
            type="circle"
            id="marker"
            layout={{}}
            paint={{
              'circle-radius': 10,
              'circle-color': '#FF0000',
              'circle-opacity': 0.7
            }}
          >
            {layers}
          </Layer>
        </Map>
      </div>
    );
  }
}

export default App;
