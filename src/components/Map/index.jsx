import React from 'react';
import geojson from 'geojson';
import * as leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import './styles.scss';
import moment from 'moment';
import { codeGroupScale, getIncidentGroupName } from '../../utils/codeGroups';
import { getDistrictName } from '../../utils/districts';

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
    const props = feature.properties;
    layer.bindPopup(
        `<table class="map-popup"><tbody>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Description:</th>
            <td class="map-popup__field-val">${props.OFFENSE_DESCRIPTION || 'N/A'}</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Shooting:</th>
            <td class="map-popup__field-val">${props.SHOOTING === '1' ? 'Yes' : 'No'}</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Date:</th>
            <td class="map-popup__field-val">${
                props.OCCURRED_ON_DATE ? moment(props.OCCURRED_ON_DATE).format('ll') : 'N/A'
            }</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Time:</th>
            <td class="map-popup__field-val">${
                props.OCCURRED_ON_DATE ? moment(props.OCCURRED_ON_DATE).format('hh:mma') : 'N/A'
            }</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Street:</th>
            <td class="map-popup__field-val">${props.STREET || 'N/A'}</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">District:</th>
            <td class="map-popup__field-val">${
                props.DISTRICT ? getDistrictName({ districtCode: props.DISTRICT }) + ' (' + props.DISTRICT + ')' : 'N/A'
            }</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Reporting Area:</th>
            <td class="map-popup__field-val">${props.REPORTING_AREA || 'N/A'}</td>
        </tr>
        <tr class="map-popup__field">
            <th class="map-popup__field-name">Incident Number:</th>
            <td class="map-popup__field-val">${props.INCIDENT_NUMBER || 'N/A'}</td>
        </tr>
    </tbody></table>`,
        { autoPan: true, autoPanPadding: new leaflet.Point(100, 100) }
    );
}

/**
 * @returns React component
 * @constructor
 */
export default function IncidentMap({ incidents, onMarkerAdded }) {
    const geojsonData = geojson.parse(incidents, { Point: ['Lat', 'Long'] });

    return (
        <div className='map-root'>
            <Map center={BOS_LAT_LONG} bounds={BOS_LIMITS}>
                <TileLayer url={TILE_LAYER_URL} attribution={TILE_LAYER_ATTRIBUTION} />
                <GeoJSON
                    key={Math.random()}
                    data={geojsonData}
                    pointToLayer={(incident, latLng) => {
                        const marker = getIncidentMarker(incident, latLng);
                        onMarkerAdded({ incident: incident.properties, marker });
                        return marker;
                    }}
                    onEachFeature={bindIncidentPopup}
                />
            </Map>
        </div>
    );
}
