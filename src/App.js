import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';

import Map from './components/Map';
import Menu from './components/Menu';
import './styles/global.scss';
import { SEVEN_DAYS } from './constants/timeframes';
import { getTimeframeDates } from './utils/timeframes';
import { getIncidents } from './utils/client';
import useIncidentsReducer, { getVisibleIncidents, loadIncidents } from './state/incidents';
import { loadIncidentsAndResetFilters } from './state/incidents/actions';
import IncidentFeed from './components/IncidentFeed';
import { getVisibleIncidentsSortedByDate } from './state/incidents/selectors';
import useIncidentMarkers from './hooks/useIncidentMarkers';

const END_DATE = moment();

export default function App() {
    const [loading, setLoading] = useState(true),
        [timeframe, setTimeframe] = useState(SEVEN_DAYS),
        [dates, setDates] = useState(
            getTimeframeDates({
                timeframe,
                endDate: END_DATE
            })
        ),
        [incidentsState, dispatchIncidentsAction] = useIncidentsReducer(),
        [getMarker, addMarker] = useIncidentMarkers();

    useEffect(() => {
        const { startDate, endDate } = getTimeframeDates({ timeframe, endDate: END_DATE });

        // Update dates in state:
        setDates({ startDate, endDate });

        // Refresh incidents in map:
        getIncidents({ startDate, endDate }).then(incidents => {
            dispatchIncidentsAction(loadIncidentsAndResetFilters(incidents));
            setLoading(false);
        });

        // Reset incidents periodically so new ones show up:
        const intervalId = setInterval(() => {
            getIncidents({ startDate, endDate }).then(incidents => {
                dispatchIncidentsAction(loadIncidents(incidents));
                setLoading(false);
            });
        }, 5 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, [timeframe, dispatchIncidentsAction]);

    return (
        <div id='app-root'>
            <Menu
                timeframe={timeframe}
                dates={dates}
                onTimeframeChange={t => {
                    setLoading(true);
                    setTimeframe(t);
                }}
                isLoadingIncidents={loading}
                incidentsState={incidentsState}
                dispatchIncidentsAction={dispatchIncidentsAction}
            />
            <Map incidents={getVisibleIncidents(incidentsState)} onMarkerAdded={addMarker} />
            <IncidentFeed
                incidents={getVisibleIncidentsSortedByDate(incidentsState)}
                onIncidentClick={incident => {
                    const marker = getMarker(incident);
                    marker && marker.openPopup();
                }}
            />
        </div>
    );
}
