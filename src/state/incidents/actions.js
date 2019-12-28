/**
 *
 * @type {string}
 */
export const LOAD_INCIDENTS = 'load-incidents';
export const TOGGLE_INCIDENT_GROUP = 'toggle-group';
export const TOGGLE_DISTRICT = 'toggle-district';
export const HIDE_ALL_GROUPS = 'hide-all-groups';
export const HIDE_ALL_DISTRICTS = 'hide-all-districts';
export const SHOW_ALL_GROUPS = 'show-all-groups';
export const SHOW_ALL_DISTRICTS = 'show-all-districts';

/**
 * @param {Incident[]} incidents
 * @returns {IncidentsAction<{ incidents: Incident[] }>}
 */
export function loadIncidents(incidents) {
    return { type: LOAD_INCIDENTS, payload: { incidents } };
}

/**
 * @param {string} group
 * @returns {IncidentsAction<{ group: string }>}
 */
export function toggleIncidentGroup(group) {
    return { type: TOGGLE_INCIDENT_GROUP, payload: { group } };
}

/**
 * @param {string} district
 * @returns {IncidentsAction<{ district: string }>}
 */
export function toggleDistrict(district) {
    return { type: TOGGLE_DISTRICT, payload: { district } };
}

/**
 * @returns {IncidentsAction<>}
 */
export function showAllIncidentGroups() {
    return { type: SHOW_ALL_GROUPS };
}

/**
 * @returns {IncidentsAction<>}
 */
export function showAllDistricts() {
    return { type: SHOW_ALL_DISTRICTS };
}

/**
 * @returns {IncidentsAction<>}
 */
export function hideAllIncidentGroups() {
    return { type: HIDE_ALL_GROUPS };
}

/**
 * @returns {IncidentsAction<>}
 */
export function hideAllDistricts() {
    return { type: HIDE_ALL_DISTRICTS };
}
