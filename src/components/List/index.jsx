import React from 'react';
import moment from 'moment';
import { codeGroupScale } from "../../utils/codeGroups";
import './styles.scss';

export default function IncidentList({ incidents }) {
    const list = incidents.features ? incidents.features
        .sort((a, b) => moment(b.properties['OCCURRED_ON_DATE']).diff(moment(a.properties['OCCURRED_ON_DATE'])))
        .map(inc => {
            return (
                <details>
                    <summary>
                        <div className="incident-dot" style={{'backgroundColor': codeGroupScale(inc.properties['OFFENSE_CODE_GROUP'])}} />
                        {inc.properties['INCIDENT_NUMBER']}
                        ({inc.properties['OCCURRED_ON_DATE']})
                    </summary>
                    {JSON.stringify(inc.properties)}
                </details>);
        }) : 'No results.';
    return (
        <div className="incident-feed">
            {incidents.features ? `${incidents.features.length} results` : null}
            {list}
        </div>
    )
}