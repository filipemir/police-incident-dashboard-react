import React from 'react';
import moment from 'moment';

import './styles.scss';
import { getDistrictName } from '../../utils/districts';
import { codeGroupScale, getIncidentGroupName } from '../../utils/codeGroups';

/**
 *
 * @param incident {Incident}
 */
export default function IncidentCard({ incident }) {
    const incidentGroupName = getIncidentGroupName(incident),
        groupColor = codeGroupScale(incidentGroupName);

    return (
        <div className={'incident-card'} style={{ borderColor: groupColor }}>
            <div className={'incident-time'}>{moment(incident.OCCURRED_ON_DATE).format('llll')}</div>
            <div className={'incident-group'}>{incidentGroupName}</div>
            <div className={'incident-location'}>
                <span className={'incident-district'}>{getDistrictName({ districtCode: incident.DISTRICT })}</span>
                <span>, </span>
                <span className={'incident-street'}>{incident.STREET}</span>
            </div>
        </div>
    );
}
