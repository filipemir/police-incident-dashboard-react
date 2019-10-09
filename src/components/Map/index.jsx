import React, { useState, useEffect } from 'react';
import leaflet from "leaflet";
import hash from 'object-hash';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

import './styles.scss';
import {getIncidents, codeGroupScale} from "../../client";

const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function getIncidentMarker(incident, latLng) {
    const cg = incident.properties['OFFENSE_CODE_GROUP'];
    if (incident.properties['SHOOTING'] == 'Y') {
        return leaflet.marker(latLng, {icon: leaflet.divIcon({className: 'incident-marker'})});
    } else {
        return leaflet.circleMarker(latLng, {
            radius: 4,
            color: codeGroupScale(cg),
            weight: 1,
            opacity: 0.5,
            fillOpacity: 0.25
        });
    }
}

function bindIncidentPopup(feature, layer) {
    const properties = Object.keys(feature.properties).filter(p => !p.startsWith('_'));
    const list = properties.map(p => `<tr><th>${p.replace(/_/g,' ')}</th><td>${feature.properties[p]}<td></tr>`)
    layer.bindPopup(`<table><tbody>${list}</tbody></table>`);
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
    const [incidents, setIncidents] = useState([]),
        refreshIncidents = () => {
            getIncidents({ startDate, endDate }).then(incidents => { setIncidents(incidents) });
        };

    useEffect(() => {
        refreshIncidents();
        const intervalId = setInterval(refreshIncidents, updateInterval);
        return () => clearInterval(intervalId);
    }, [incidents]);

    return <div className="map-root">
        <Map center={latLong} zoom={13}>
            <TileLayer url={TILE_LAYER_URL} attribution={TILE_LAYER_ATTRIBUTION} />
            <GeoJSON key={hash(incidents)} data={incidents} pointToLayer={getIncidentMarker} onEachFeature={bindIncidentPopup}/>
        </Map>
    </div>;
}

