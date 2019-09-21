import React, { useEffect } from 'react';
import geojson from "geojson";
import './App.css';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicG9saWNlLWluY2lkZW50LWRhc2hib2FyZCIsImEiOiJjazB0cjJ5cmowZzZ1M2dsdzhwbW9weGxjIn0.r-K-WO4VmbcVU1bi_TH57w';

const path = `https://cors-anywhere.herokuapp.com/https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT * from "12cb3883-56f5-47de-afa5-3b1cf61b257b" WHERE "DISTRICT" LIKE 'B3' limit 100`;

const geojsonPromise = fetch(path)
    .then(res => res.json())
    .then(json => geojson.parse(json.result.records, {Point: ['Lat', 'Long']}));

function App() {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/police-incident-dashboard/ck0tsqcjx6g9r1dtb8e7qsyoo',
      zoom: 14,
      center: [-71.0589, 42.3],
    });

    map.on('load', function () {
      geojsonPromise.then(data => {
        console.log(data);
        map.addSource('crime', { type: 'geojson', data });
        map.addLayer({
          "id": "crime",
          "source": "crime",
          "type": "circle",
          'paint': { 'circle-radius': 10, 'circle-color': '#e55e5e' }
        });
    });
    });

  });

  return (
    <div id="map" style={{width: "100vw", height: "100vh" }}/>
  );
}

export default App;
