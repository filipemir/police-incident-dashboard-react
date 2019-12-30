import React from 'react';
import geojson from 'geojson';
import * as leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import './styles.scss';
import { codeGroupScale, getIncidentGroupName } from '../../utils/codeGroups';

const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    TILE_LAYER_ATTRIBUTION =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    BOS_LAT_LONG = [42.32390487760298, -71.07416152954103],
    BOS_LIMITS = [
        [42.393518, -71.00516847],
        [42.24042076, -71.16843346]
    ];

function getIncidentMarker(incident, latLng) {
    const cg = getIncidentGroupName(incident.properties);
    return leaflet.circleMarker(latLng, {
        radius: 4,
        color: codeGroupScale(cg),
        weight: 1,
        opacity: 0.5,
        fillOpacity: 0.25
    });
}

function bindIncidentPopup(feature, layer) {
    const properties = Object.keys(feature.properties).filter(p => !p.startsWith('_'));
    const list = properties.map(p => `<tr><th>${p.replace(/_/g, ' ')}</th><td>${feature.properties[p]}<td></tr>`);
    layer.bindPopup(`<table><tbody>${list}</tbody></table>`);
}

/**
 * @returns React component
 * @constructor
 */
export default function IncidentMap({ incidents }) {
    const geojsonData = geojson.parse(incidents, { Point: ['Lat', 'Long'] });

    return (
        <div className='map-root'>
            <Map center={BOS_LAT_LONG} bounds={BOS_LIMITS}>
                <TileLayer url={TILE_LAYER_URL} attribution={TILE_LAYER_ATTRIBUTION} />
                <GeoJSON
                    key={Math.random()}
                    data={geojsonData}
                    pointToLayer={getIncidentMarker}
                    onEachFeature={bindIncidentPopup}
                />
            </Map>
        </div>
    );
}
