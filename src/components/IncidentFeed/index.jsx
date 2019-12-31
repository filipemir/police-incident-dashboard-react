import React from 'react';

import './styles.scss';
import IncidentCard from '../IncidentCard';

/**
 *
 * @param incidents {Incident[]}
 */
export default function IncidentFeed({ incidents }) {
    return (
        <div className={'incident-feed'}>
            <h2 className={'incident-feed-title'}>Most Recent Incidents</h2>
            {incidents.slice(0, 10).map(incident => {
                return <IncidentCard key={`incident-card-${incident._clientSideId}`} incident={incident} />;
            })}
        </div>
    );
}
