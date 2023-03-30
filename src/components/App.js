import React, { useState } from 'react';
import CustomBar from './Bar/CustomBar.js'
import MapComponent from './Map/MapComponent.js'
import data from '../state.json';
import "../scss/App.scss"


const App = () => {
  const places = data.pickPoints;
  const [coordinate, setCoordinate] = useState();
  const [zoom, setZoom] = useState(5);

  return (
    <div className="app">
      <CustomBar setCoordinate={setCoordinate} setZoom={setZoom} places={places} />
      <MapComponent coordinate={coordinate} zoom={zoom} />
    </div>
  )
};

export default App;