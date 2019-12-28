import { scaleOrdinal } from 'd3-scale';
import { schemeSet3 } from 'd3-scale-chromatic';
import { CODE_GROUPS } from '../constants/codeGroups';
import incidentGroups from '../static/incident-groups';

/**
 * Returns a scale to color the offense code groups
 */
export const codeGroupScale = scaleOrdinal(schemeSet3).domain(CODE_GROUPS);

/**
 * Gets the incident group name matching the provided incident's offense code
 * @param incident [Incident]
 * @returns {string} - Group name
 */
export function getIncidentGroupName(incident) {
    const code = parseInt(incident.OFFENSE_CODE, 10),
        group = incidentGroups[code];

    if (!group) {
        // TODO: Report these somewhere, instead of just logging them
        console.log(`Incident with unknown group code found: ${group}. Assigning to "Other"`);
        console.log(group);
    }

    return group ? group.GROUP : 'Other';
}
