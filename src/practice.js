



// import { useMemo } from "react";
// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import LocationMarker from './LocationMarker';
// import LocationInfo from './LocationInfo';
// import GoogleMapReact from 'google-map-react';
// import { useState } from 'react';
   
// export default function Map(eventData) {
//   const center = useMemo(() => ({ lat: 38.915910, lng: -77.014130 }), []);
//   const[LocInfo , setLocInfo] = useState(null);
//   const markers = eventData.map(ev => {
//       if(ev.categories[0].id === 8){
//           return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
//               onClick={() => setLocInfo({ id: ev.id , title: ev.title})}
//           />
//       }
//       return null
//   })
//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: "AIzaSyAsPvckCF5fdTaZxeRRUf50VfUe7zi_5Z8"
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <div className="map">
//     <GoogleMap zoom={15} center={center} className="map">
//      {markers}
//      <Marker position={center} />
//     </GoogleMap>
//     </div>
//   );
// }


// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} ClassName="map">
//       <Marker position={center} />
//     </GoogleMap>
//   );