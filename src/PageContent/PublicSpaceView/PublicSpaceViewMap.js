import React from 'react';
import GoogleMapReact from 'google-map-react';

const mock = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
}

const MapElement = ({ lat, lng, text }) => {
  return (
    <div>
      <h3>
        {text}
      </h3>
      <p>
        Latitude: {lat}
        Longitude: {lng}
      </p>
    </div>
  )
}

const PublicSpaceMapCall = ({ lat, lon, zoom }) => {
  const lati = lat || mock.center.lat;
  const lng = lon || mock.center.lng;
  const zm = zoom || mock.zoom;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.KEY }}
        defaultCenter={{ lat: lati, lng: lng }}
        defaultZoom={zm}
      >
        <MapElement
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
};

export default PublicSpaceMapCall;