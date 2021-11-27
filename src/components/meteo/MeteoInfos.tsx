// import React, { useState } from 'react';

import { useEffect, useState } from 'react';
import './MeteoInfos.scss';

interface MeteoInfosProps {
    meteoInfosLite: boolean,
}

type MeteoDatas = {
    heure: string,
    weather: number,
    temp: number
}

export default function MeteoInfos( {meteoInfosLite}:MeteoInfosProps) {

    // const [ meteoDatas, setMeteoDatas] = useState();
    const [ meteoDatas, setMeteoDatas ] = useState<MeteoDatas[]>([])

    function getTime(timeStr:string){
        timeStr = timeStr.substring(timeStr.indexOf('T') + 1)
        timeStr = timeStr.substring(0, 2) 
        return timeStr;
    }

    // useEffect(() => {
    //     fetch("https://api.meteo-concept.com/api/forecast/nextHours?token=bb4147827aac7697e80680dbf0e48be17616a8bd6d21eed01b0eed59b7436288&insee=2A004")
    //     .then((response) => response.json())
    //     .then(json => {
    //         const datas: {[key: string]:any} = json as any[];  
    //         let MeteoDatas:MeteoDatas[] = [];

    //         if(datas.code !== 400){
    //             for (let i = 0; i < 1; i++) {
    //                 const Time = datas.forecast[i].datetime ;
    //                 const formatTime:string = getTime(Time);
    //                 MeteoDatas.push({
    //                     heure: formatTime,
    //                     weather : datas.forecast[i].weather,
    //                     temp: datas.forecast[i].temp2m,
    //                 })
    //             }
    //             setMeteoDatas(MeteoDatas);
    //         }
            
    //     })
    // });
    
    let MeteoDatas:MeteoDatas[] = [];
    for (let i = 0; i < 1; i++) {
        let Time = "2020-10-30T01:00:00+0100"
        const formatTime:string = getTime(Time);


        MeteoDatas.push({
            heure: formatTime,
            weather : 1,
            temp: 22,
        })
    }
        
    useEffect(() => {
        setMeteoDatas(MeteoDatas);
        return () => {                        
        }
    }, [])

    return (
        <div className="container-meteo-infos">
            {
                meteoInfosLite === true ? (
                    <div className="container-meteo-lite">
                            <div className="city-module">Ajaccio</div>
                            <div className="variable-infos">
                                {
                                    meteoDatas.length !== 0 ? (
                                        meteoDatas.map((element, index) => 
                                            <div key={index} className={'prevision-module module-'+ index}>
                                                <div className="hour-module">{element.heure} H :</div>      
                                                <i className="wi wi-cloudy"></i>  
                                                <div className="temp-module">{element.temp}°</div>    
                                            </div>
                                        )
                                    ) : (
                                        <div className="meteo-disabled">
                                            Météo indisponible
                                        </div>
                                    )
                                }
                                

                                {/* <div className="prevision-module module-1">
                                    <div className="hour-module">19h :</div>      
                                    <i className="wi wi-cloudy"></i>  
                                    <div className="temp-module">30°</div>    
                                </div>
                                <div className="prevision-module module-2">
                                    <div className="hour-module">22h :</div>      
                                    <i className="wi wi-cloudy"></i>  
                                    <div className="temp-module">27°</div>    
                                </div>
                                <div className="prevision-module module-3">
                                    <div className="hour-module">1h :</div>      
                                    <i className="wi wi-cloudy"></i>  
                                    <div className="temp-module">24°</div>    
                                </div>
                                <div className="prevision-module module-3">
                                    <div className="hour-module">4h :</div>      
                                    <i className="wi wi-cloudy"></i>  
                                    <div className="temp-module">22°</div>    
                                </div> */}
                            </div>
                    </div>
                    
                ) : (
                    <div></div>
                )
            }
            
        </div>
    )
}