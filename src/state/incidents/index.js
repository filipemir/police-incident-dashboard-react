import useIncidentsReducer from './reducer';
import {
    loadIncidents,
    hideAllIncidentGroups,
    showAllIncidentGroups,
    toggleIncidentGroup,
    toggleDistrict
} from './actions';
import {
    getVisibleIncidents,
    getVisibleIncidentGroups,
    getVisibleDistricts,
    getTotalIncidentCount,
    getVisibleIncidentCount,
    getIncidentCountInDistrict,
    getIncidentCountInGroup,
    getSortedDistricts,
    getSortedIncidentGroups
} from './selectors';

/**
 * @typedef Incident
 * @type {object}
 * @property {string} _clientSideId - client side unique generated id, e.g. "_i7645"
 * @property {string} INCIDENT_NUMBER - Unique server-side id, e.g "I192075552"
 * @property {string} STREET - e.g "DUDLEY ST"
 * @property {string} OFFENSE_DESCRIPTION - e.g "WARRANT ARREST"
 * @property {string} SHOOTING
 * @property {string} DISTRICT - e.g "B2"
 * @property {string} OFFENSE_CODE - e.g "03125"
 * @property {string} REPORTING_AREA
 * @property {string} OCCURRED_ON_DATE - e.g "2019-09-19 19:08:00"
 * @property {string} DAY_OF_WEEK - e.g "Thursday"
 * @property {string} MONTH - e.g "9"
 * @property {string} HOUR - e.g "19"
 * @property {string} YEAR - e.g "2019"
 * @property {string} Long - e.g "42.38572465"
 * @property {string} Lat - e.g "-71.00661702"
 * @property {string} OFFENSE_CODE_GROUP - e.g "Warrant Arrests"
 * @property {string} UCR_PART - e.g "Part Three"
 * @property {string} Location - Lat/long e.g "(42.38572465, -71.00661702)"
 */

/**
 * @typedef IncidentsAction
 * @type {object}
 * @property {string} type
 * @property {object<*>} [payload]
 */

/**
 * @typedef IncidentsFilters
 * @type {object}
 * @property {Set<string>} visibleGroups - Set of incident group names currently visible
 * @property {Set<string>} visibleDistricts - Set of districts currently visible
 */

/**
 * @typedef IncidentsState
 * @type {object}
 * @property {object} incidents
 *  @property {{ [string]: Incident }} map - Map of unique ids to incidents
 *  @property {Set<string>} visibleIds - Ids of incidents to display, i.e those not currently filtered out
 *  @property {Set<string>} hiddenIds - Ids of incidents to hide, i.e those currently filtered out
 * @property {object} counts
 *  @property {number} total
 *  @property {number} totalVisible
 *  @property {{ [string]: number }} perGroup - Map of all incident group names to incident counts
 *  @property {{ [string]: number }} perDistrict - Map of all districts to incident counts
 * @property {IncidentsFilters} filters
 */

// Actions creators:
export { loadIncidents, hideAllIncidentGroups, showAllIncidentGroups, toggleIncidentGroup, toggleDistrict };

// Selectors:
export {
    getVisibleIncidents,
    getVisibleIncidentGroups,
    getVisibleDistricts,
    getTotalIncidentCount,
    getVisibleIncidentCount,
    getIncidentCountInDistrict,
    getIncidentCountInGroup,
    getSortedIncidentGroups,
    getSortedDistricts
};

// Reducer:
export default useIncidentsReducer;
