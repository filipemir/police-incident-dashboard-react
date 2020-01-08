import { scaleOrdinal } from 'd3-scale';
import { schemeSet3 } from 'd3-scale-chromatic';
import isEmpty from 'lodash/isEmpty';
import INCIDENT_GROUPS from '../constants/incident-groups';

const incidentGroupNames = new Set();

Object.values(INCIDENT_GROUPS).forEach(({ GROUP }) => {
    incidentGroupNames.add(GROUP);
});

/**
 * Returns a scale to color the offense code groups
 */
export const codeGroupScale = scaleOrdinal(schemeSet3).domain(incidentGroupNames);

/**
 * Gets the incident group name matching the provided incident's offense code
 * @param incident [Incident]
 * @returns {string} - Group name
 */
export function getIncidentGroupName(incident) {
    const code = parseInt(incident.OFFENSE_CODE, 10),
        group = INCIDENT_GROUPS[code];

    return group ? group.GROUP : 'Other';
}

export function reportUnknownCodeGroups(incidents) {
    const result = {};

    incidents.forEach(incident => {
        const code = parseInt(incident.OFFENSE_CODE, 10),
            group = INCIDENT_GROUPS[code];

        if (!group) {
            !result[incident.OFFENSE_CODE] && (result[incident.OFFENSE_CODE] = new Set());
            result[incident.OFFENSE_CODE].add(incident.OFFENSE_DESCRIPTION);
        }
    });

    if (!isEmpty(result)) {
        console.log('Unknown code groups found:');
        console.log(result);
    }
}
