import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import listIcon from "../listIcon";

function Weather() {
    const { info } = useGlobalContext();

    const weather = listIcon.find(icon => icon.type === info.type);

    return (
        <div className="weather-container">
            <h4 className="weather-name">{info.name}</h4>
            <img className="weather-img" src={weather ? weather.img : ""} alt="type" />
            <p className="weather-type">{info.type}</p>
            <p className="weather-temp">{info.temp}</p>
        </div>
    );
}

export default Weather;