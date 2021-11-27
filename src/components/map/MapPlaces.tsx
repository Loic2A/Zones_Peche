import React, { useState } from 'react'
// import { getParsedCommandLineOfConfigFile } from 'typescript';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './MapPlaces.scss';

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
    const [ centerZoom, setCenterZoom ] = useState<Coordinates>({ lat: 41.937, lng: 8.684 });
    const [ centerView, setCenterView ] = useState<number>(12)

    function onSelectPoint(item:Location | null, open:boolean){

        if(selected !== null){
            setSelected(null);
        }
        if(open === true && item !== null){
            const positionPoint:Coordinates = {
                lat: item.position.lat,
                lng: item.position.lng,
            }
            setCenterZoom(positionPoint)            
            setCenterView(15);
            setSelected(item);
        }
        else{
            setSelected(null);
        }

    }

    const locations:Location[] = [
        {
            name: "Jetée du port - Ajaccio",
            position: {
                lat: 41.91937130379195, 
                lng: 8.743821509017758,
            }
        },
        {
            name: "Coin a serran - Capo di Feno",
            position: {
                lat: 41.94026367110567,
                lng: 8.612498912737045,
            }
        },
        {
            name: "Falaise - Capo di Feno",
            position: {
                lat: 41.94104316107546, 
                lng: 8.609428370779769,
            }
        },
    ]

    const mapStyle = {
        height: '100%',
        width: '100%',
    };




    return (
        <div className="map-places-module">
            <LoadScript
                googleMapsApiKey='AIzaSyCq_q5-QkTJDzTt9Y-LA5bZ-J5mov-zl2s'>
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    zoom={centerView}
                    center={centerZoom}>
                    {
                        locations.map(item => {
                            console.log(item)
                            return (
                                <Marker 
                                    key={item.name} 
                                    position={item.position}
                                    onClick={ () => onSelectPoint(item, true) }    
                                />
                            )
                        })   
                    }
                    {
                        selected != null && selected.position && (
                            <InfoWindow
                                position={selected.position}
                                onCloseClick={() => onSelectPoint(null, false)}
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