import React from 'react';
import moment from 'moment';

import './styles.scss';
import { getDistrictName } from '../../utils/districts';
import { codeGroupScale, getIncidentGroupName } from '../../utils/codeGroups';

/**
 *
 * @param incident {Incident}
 */
export default function IncidentCard({ incident, onIncidentClick }) {
    const incidentGroupName = getIncidentGroupName(incident),
        groupColor = codeGroupScale(incidentGroupName);

    return (
        <div className={'incident-card'} style={{ borderColor: groupColor }} onClick={() => onIncidentClick(incident)}>
            <div className={'incident-time'}>{moment(incident.OCCURRED_ON_DATE).format('llll')}</div>
            <div className='incident-description'>
                <span className={'incident-group-name'}>{incidentGroupName}</span>
                <span className={'incident-description-full'}>{incident.OFFENSE_DESCRIPTION}</span>
            </div>
            <div className={'incident-location'}>
                <span className={'incident-district'}>{getDistrictName({ districtCode: incident.DISTRICT })}</span>
                {incident.STREET && (
                    <>
                        <span>, </span>
                        <span className={'incident-street'}>{incident.STREET}</span>
                    </>
                )}
            </div>
        </div>
    );
}
