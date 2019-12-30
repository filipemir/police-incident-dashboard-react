import { scaleOrdinal } from 'd3-scale';
import { schemeSet3 } from 'd3-scale-chromatic';
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

    if (!group) {
        // TODO: Report these somewhere, instead of just logging them
        console.log(`Incident with unknown group code found: ${group}. Assigning to "Other"`);
        console.log(group);
    }

    return group ? group.GROUP : 'Other';
}
