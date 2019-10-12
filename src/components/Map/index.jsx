import React, { useState, useEffect } from 'react';
import leaflet from "leaflet";
import hash from 'object-hash';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

import './styles.scss';
import {getIncidents} from "../../client";

const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function getIncidentMarker(incident, latLng) {
    return leaflet.marker(latLng, {icon: leaflet.divIcon({className: 'incident-marker'}) });
}

function bindIncidentPopup(feature, layer) {
    layer.bindPopup(JSON.stringify(feature.properties));
}

/**
 * @param {[number, number]} latLong - Lat/Long for where the map should be centered when loaded
 * @param {moment} startDate - The start date/time for incidents to be mapped
 * @param {moment} endDate - The end date/time for the incidents to be mapped
 * @param {number} [updateInterval=60000] Number of milliseconds between data refreshes
 * @returns React component
 * @constructor
 */
export default function IncidentMap({ latLong, startDate, endDate, updateInterval = 60000 }) {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const refreshIncidents = () => {
              getIncidents({ startDate, endDate }).then(i => { setIncidents(i) });
          };

        refreshIncidents();
        const intervalId = setInterval(refreshIncidents, updateInterval);
        return () => clearInterval(intervalId);
    }, [startDate, endDate, updateInterval]);

    return <div className="map-root">
        <Map center={latLong} zoom={13}>
            <TileLayer url={TILE_LAYER_URL} attribution={TILE_LAYER_ATTRIBUTION} />
            <GeoJSON key={hash(incidents)} data={incidents} pointToLayer={getIncidentMarker} onEachFeature={bindIncidentPopup}/>
        </Map>
    </div>;
}

