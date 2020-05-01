import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = (props) => {
    return (
        <a
            target="blank"
            href="https://www.google.com/maps/place/825+Rue+de+la+Reine+Blanche,+78955+Carri%C3%A8res-sous-Poissy/@48.9425957,2.0272437,17z/data=!3m1!4b1!4m5!3m4!1s0x47e689589c75a763:0x701adbdee66d585!8m2!3d48.9425922!4d2.0294324"
        >
            <div id="marker"></div>
        </a>
    )
};

const Map = (props) => {
    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: `AIzaSyAQU3x2PDxhLZEYFk4Af4HBPYDpy40aHEs`, language: "fr", region: "FR" }}
                defaultZoom={13}
                defaultCenter={{ lat: 48.942480, lng: 2.029650 }}
            >
                <Marker
                    lat={48.942480}
                    lng={2.029650}
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;