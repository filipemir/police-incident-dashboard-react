import React, { useEffect } from 'react';
import './styles.scss';
import moment from "moment";
import leaflet from "leaflet";

import { getIncidents } from "../../client";

const DATE_FORMAT = 'YYYY-MM-DD hh:mm',
    TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    UPDATE_INTERVAL = 60000;

function getIncidentPopupText({ incident }) {
    return JSON.stringify(incident);
}

function getIncidentMarker(incident, latLng) {
    return leaflet.marker(latLng, {icon: leaflet.divIcon({className: 'incident-marker'}) });
}

function getLeafletMap() {
    const map = leaflet.map('map').setView([42.3, -71.0589], 13);
    leaflet.tileLayer(TILE_LAYER_URL, {TILE_LAYER_ATTRIBUTION, maxZoom: 19}).addTo(map);
    return map;
}

function getIncidentsLayer({ incidents }) {
    return leaflet.geoJSON(incidents, { pointToLayer: getIncidentMarker })
        .bindPopup((layer) => getIncidentPopupText({ incident: layer.feature.properties }));
}

export default function Index() {
    useEffect(() => {
        const map = getLeafletMap(),
            endDate = moment().format(DATE_FORMAT),
            startDate = moment().subtract(72, 'hours').format(DATE_FORMAT);
        let incidentsLayer;

        const displayIncidents = () => {
            getIncidents({ startDate, endDate }).then(incidents => {
                if (incidentsLayer) {
                    incidentsLayer.clearLayers();
                }
                incidentsLayer = getIncidentsLayer({ incidents }).addTo(map);
            });
        };

        displayIncidents();
        const intervalId = setInterval(displayIncidents, UPDATE_INTERVAL);

        return () => clearInterval(intervalId);
    });

  return <div id="map" style={{width: "100vw", height: "100vh" }} />;
}

