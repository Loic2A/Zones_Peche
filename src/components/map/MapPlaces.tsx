import React from 'react'
import { getParsedCommandLineOfConfigFile } from 'typescript';
// import GoogleMapreact from 'google-map-react'

export default function MapPlaces(){

    
    function InitializeMap(): void{
        //Coordonnées d'Ajaccio
        const AjaccioLocation = { lat: 41.937, long: 8.684 };
        
        //Mise en place de la vue par defaut
        const DefaultMapView = new google.maps.Map(document.getElementsByClassName(".map-places-module"),{
            zoom: 4,
            center: AjaccioLocation,
        });
    }



    return (
        <div className="map-places-module">

            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBg8QtFCQe7WwhRt5J2XApG_w0MGvl5X78&callback=initMap&libraries=&v=weekly"
                async
            ></script>
        </div>
    )
}