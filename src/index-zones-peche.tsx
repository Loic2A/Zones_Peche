import React from 'react';
import logo from './logo.svg';
import './index-zones-peche.scss';
import Navbar from './components/navbar/Navbar';
import MapPlaces from './components/map/MapPlaces';

export default function IndexZonesPeche() {

  return (
    <div className="body">
      <div className="container-navbar">
        <Navbar />
      </div>
      <div className="container-body">
        <MapPlaces />
      </div>
    </div>
  );
}
