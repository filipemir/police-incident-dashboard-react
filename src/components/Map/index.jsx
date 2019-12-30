import React from 'react';
import geojson from 'geojson';
import * as leaflet from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
// import 'react-leaflet-markercluster/dist/styles.min.css';

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
    const createClusterCustomIcon = cluster => {
        const count = cluster.getChildCount();
        let size = 'LargeXL';

        if (count < 10) {
            size = 'Small';
        } else if (count >= 10 && count < 100) {
            size = 'Medium';
        } else if (count >= 100 && count < 500) {
            size = 'Large';
        }
        const options = {
            cluster: `markerCluster${size}`
        };

        return leaflet.divIcon({
            html: `<div>
        <span class="markerClusterLabel">${count}</span>
      </div>`,
            className: `${options.cluster}`
        });
    };

    // Commenting out the incident list for now list for performance reasons:
    return (
        <div className='map-root'>
            {/*<IncidentList incidents={incidents} />*/}
            <Map center={BOS_LAT_LONG} bounds={BOS_LIMITS} maxZoom={16}>
                <TileLayer url={TILE_LAYER_URL} attribution={TILE_LAYER_ATTRIBUTION} />
                <MarkerClusterGroup maxClusterRadius={35}>
                    <GeoJSON
                        key={Math.random()}
                        data={geojsonData}
                        pointToLayer={getIncidentMarker}
                        onEachFeature={bindIncidentPopup}
                    />
                </MarkerClusterGroup>
            </Map>
        </div>
    );
}
