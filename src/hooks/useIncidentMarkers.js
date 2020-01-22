import { useRef } from 'react';

/**
 * Hook used to store Leaflet.Marker instance corresponding to different incidents, so that we
 * can subsequently grab them to open the respective popups (mostly so we can open them from the
 * incident feed clicks)
 */
export default function useIncidentMarkers() {
    const markers = useRef({}),
        /**
         * Stores a mapping from incident to marker
         *
         * @param [Incident] incident
         * @param [Leaflet.Marker] marker
         */
        addMarker = ({ incident, marker }) => {
            markers.current[incident._clientSideId] = marker;
        },
        /**
         * Returns the marker corresponding to the provided incident
         *
         * @param [Incident] incident
         * @returns {Leaflet.Marker}
         */
        getMarker = incident => {
            return markers.current[incident._clientSideId];
        };

    return [getMarker, addMarker];
}
