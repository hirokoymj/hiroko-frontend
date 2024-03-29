import React from "react";
import GoogleMapReact from "google-map-react";

import { config } from "Config/config";

export const GoogleMap = ({ center, zoom, geo_lat, geo_lon, children }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyAPKgh62z98ndo0oHyZF6SqNb-2EsxwmHI",
      }}
      defaultCenter={center}
      defaultZoom={zoom}
      center={{ lat: geo_lat, lng: geo_lon }}
      zoom={zoom}>
      {children}
    </GoogleMapReact>
  );
};
GoogleMap.defaultProps = {
  center: {
    lat: config.TOKYO_LOCATION.lat,
    lng: config.TOKYO_LOCATION.lon,
  },
  zoom: 10,
};
