import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from "geolib";

function MapComponent({ searchResults }) {
  // Transform the searchResults into {longitude:,latitude:} object
  const coordinates = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat
  }));

  // The longitude and latitude of the center of the coordinates
  const center = getCenter(coordinates);

  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  // const handleMarkerClick = (result) => {
  //   setSelectedLocation(result);
  // };

  // const handlePopupClose = () => {
  //   setSelectedLocation(null);
  // };


  return (
    <Map
      mapStyle='mapbox://styles/amoghptl/cm70dwxb900pv01sa8gl3aoue'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
        <Marker 
          longitude={result.long} 
          latitude={result.lat} 
          anchor='top'
          offset={[0,-20]}
        >
          <p 
            className="cursor-pointer text-white text-2xl animate-bounce" 
            onClick={() => setSelectedLocation(result)}
            aria-label="Map marker"
          >
            📍
          </p>
        
        </Marker>
        </div>
      ))}
    </Map>
  );
}

export default MapComponent;