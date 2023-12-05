import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Loader from "../loader/Loader";

const Map = ({ lat, lng, zoom, className }) => {
  const { isLoaded } = useLoadScript(
    { googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY });

  const coordinates = useMemo(() => ({ lat, lng }), []);

  return (
    isLoaded ?
      <GoogleMap
        zoom={zoom}
        center={coordinates}
        mapContainerClassName={className}
        options={{ mapTypeControl: false, panControl: false, fullscreenControl: false, zoomControl: false }}>
        <MarkerF position={coordinates} />
      </GoogleMap>
      :
      <div className={className}>
        <Loader />
      </div>
  );
};

export default Map;
