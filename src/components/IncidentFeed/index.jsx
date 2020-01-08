import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import './styles.scss';
import IncidentCard from '../IncidentCard';

/**
 * Amount of incidents to display in feed for each increment/page as user scrolls down
 *
 * @type {number}
 */
const INCREMENT = 30;

/**
 *
 * @param incidents {Incident[]}
 */
export default function IncidentFeed({ incidents, onIncidentClick }) {
    const [feedIncidents, setFeedIncidents] = useState([]),
        [index, setIndex] = useState(INCREMENT);

    useEffect(() => {
        setFeedIncidents(incidents.slice(0, index));
    }, [incidents, index]);

    if (!incidents || incidents.length === 0) {
        return null;
    }

    const incidentComponents = feedIncidents.map(incident => {
        return (
            <IncidentCard
                key={`incident-card-${incident._clientSideId}`}
                incident={incident}
                onIncidentClick={onIncidentClick}
            />
        );
    });

    return (
        <div className={'incident-feed'}>
            <h2 className={'incident-feed-title'}>Most Recent Incidents</h2>
            <div className={'incident-feed-content'}>
                <InfiniteScroll
                    pageStart={1}
                    loadMore={page => {
                        setIndex(page * INCREMENT);
                    }}
                    hasMore={index <= incidents.length}
                    loader={
                        <div className={'incident-feed-loading'} key={`loading-${index}`}>
                            Loading more...
                        </div>
                    }
                    useWindow={false}
                >
                    {incidentComponents}
                </InfiniteScroll>
            </div>
        </div>
    );
}
