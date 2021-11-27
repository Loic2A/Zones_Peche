// import React from 'react';

import Navbar from './components/navbar/Navbar';
import MapPlaces from './components/map/MapPlaces';

import './index-zones-peche.scss';
import './icons-weather/css/weather-icons.css';

export default function IndexZonesPeche() {

  return (
    <div className="body">
      <div className="container-navbar">
        <Navbar />
      </div>
      <div className="container-meteo">
      
        
      </div>
      <div className="container-body">
        <div className="container-map-zones">
          <MapPlaces />
        </div>
        <div className="container-list-zones">
          <div className="list-zones">

          </div>
        </div>
      </div>
    </div>
  );
}
