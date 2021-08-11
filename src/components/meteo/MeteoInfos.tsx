import React from 'react';

import './MeteoInfos.scss';

export default function MeteoInfos() {

    fetch("https://api.meteo-concept.com/api/forecast/nextHours?token=bb4147827aac7697e80680dbf0e48be17616a8bd6d21eed01b0eed59b7436288&insee=2A004")
    .then((response) => response.json())
    .then(json => {
        const responseApi = json as any[];
        console.log("La réponse", responseApi);    
    })

    return (
        <div className="container-meteo-infos">
            <i className="wi wi-day-sunny"></i>
        </div>
    )
}