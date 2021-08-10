import React, { useState } from 'react'
import { getParsedCommandLineOfConfigFile } from 'typescript';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

type Location = {
    name: string,
    position: Coordinates
}

type Coordinates = {
    lat: number,
    lng: number,
}

export default function MapPlaces(){
    
    const [ selected, setSelected ] = useState<Location | null>(null)

        function onSelect(item:Location) {
            setSelected(item);
        }

    const locations:Location[] = [
        {
            name: "Jetée du port - Ajaccio",
            position: {
                lat: 41.91937130379195, 
                lng: 8.743821509017758,
            }
        }
    ]

    const mapStyle = {
        height: '70vh',
        width: '70%',
    };
    const AjaccioLocation = { lat: 41.937, lng: 8.684 };  



    return (
        <div className="map-places-module">
            <LoadScript
                googleMapsApiKey='AIzaSyCq_q5-QkTJDzTt9Y-LA5bZ-J5mov-zl2s'>
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    zoom={13}
                    center={AjaccioLocation}>
                    {
                        locations.map(item => {
                            return (
                                <Marker 
                                    key={item.name} 
                                    position={item.position}
                                    onClick={ () => onSelect(item) }    
                                />
                            )
                        })   
                    }
                    {
                        selected != null && selected.position && (
                            <InfoWindow
                                position={selected.position}
                                // clickable={true}
                                onCloseClick={() => setSelected(null)}
                            >
                                <p>{selected.name}</p>
                            </InfoWindow>
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}