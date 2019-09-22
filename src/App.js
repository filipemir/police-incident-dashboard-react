import React, { useEffect } from 'react';
import geojson from "geojson";
import './App.css';
import moment from "moment";

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicG9saWNlLWluY2lkZW50LWRhc2hib2FyZCIsImEiOiJjazB0cjJ5cmowZzZ1M2dsdzhwbW9weGxjIn0.r-K-WO4VmbcVU1bi_TH57w';

const dateFormat = 'YYYY-MM-DD hh:mm',
    baseSqlQueryPath = `https://cors-anywhere.herokuapp.com/https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;

function App() {

  useEffect(() => {
    const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/police-incident-dashboard/ck0tsqcjx6g9r1dtb8e7qsyoo',
          zoom: 13,
          center: [-71.0589, 42.3],
        }),
        end = moment().format(dateFormat),
        start = moment().subtract(24, 'hours').format(dateFormat),
        sqlQuery = `SELECT * from "12cb3883-56f5-47de-afa5-3b1cf61b257b" WHERE "OCCURRED_ON_DATE" BETWEEN '${start}' and '${end}'`,
        geojsonPromise = fetch(baseSqlQueryPath + sqlQuery)
          .then(res => res.json())
          .then(json => geojson.parse(json.result.records, {Point: ['Lat', 'Long']}));

    map.on('load', function () {
      geojsonPromise.then(data => {
        console.log(data);
        map.addSource('crime', { type: 'geojson', data });
        map.addLayer({
          "id": "crime",
          "source": "crime",
          "type": "circle",
          'paint': { 'circle-radius': 17, 'circle-color': '#e55e5e' }
        });
    });
    });

  });

  return (
    <div id="map" style={{width: "100vw", height: "100vh" }}/>
  );
}

export default App;
