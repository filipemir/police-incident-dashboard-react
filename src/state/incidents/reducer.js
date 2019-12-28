import { useReducer } from 'react';
import {
    HIDE_ALL_DISTRICTS,
    HIDE_ALL_GROUPS,
    LOAD_INCIDENTS,
    SHOW_ALL_DISTRICTS,
    SHOW_ALL_GROUPS,
    TOGGLE_DISTRICT,
    TOGGLE_INCIDENT_GROUP
} from './actions';
import { getIncidentGroupName } from '../../utils/codeGroups';

const INITIAL_STATE = {
    incidents: {
        map: {},
        visibleIds: new Set(),
        hiddenIds: new Set()
    },
    counts: {
        total: 0,
        totalVisible: 0,
        perGroup: {},
        perDistrict: {}
    },
    filters: {
        visibleGroups: new Set(),
        visibleDistricts: new Set()
    }
};

/**
 * Determine whether the incident should be visible according to the provided filters
 *
 * @param incident {Incident}
 * @param filters {IncidentsFilters}
 * @returns {boolean}
 */
function incidentIsVisible({ incident, filters }) {
    const { visibleGroups, visibleDistricts } = filters;
    return visibleGroups.has(getIncidentGroupName(incident)) && visibleDistricts.has(incident.DISTRICT);
}

/**
 * Resets state (including filters and counts) with a new set of incidents
 *
 * @param state {IncidentsState}
 * @param payload {{ incidents: Incident[] }}
 * @returns {IncidentsState}
 */
function reduceLoadIncidents(state, { incidents }) {
    const visibleGroups = new Set(),
        visibleDistricts = new Set(),
        ids = new Set(),
        map = {},
        perGroup = {},
        perDistrict = {};
    let total = 0;

    incidents.forEach(incident => {
        map[incident._clientSideId] = incident;
        ids.add(incident._clientSideId);
        total += 1;

        const groupName = getIncidentGroupName(incident),
            district = incident.DISTRICT;

        visibleGroups.add(groupName);
        !perGroup[groupName] && (perGroup[groupName] = 0);
        perGroup[groupName] += 1;

        visibleDistricts.add(district);
        !perDistrict[district] && (perDistrict[district] = 0);
        perDistrict[district] += 1;
    });

    return {
        incidents: { map, hiddenIds: new Set(), visibleIds: ids },
        counts: { total, totalVisible: total, perGroup, perDistrict },
        filters: { visibleGroups, visibleDistricts }
    };
}

/**
 * Reduces the provided state in accordance with the provided filters
 *
 * @param state {IncidentsState}
 * @param newFilters {IncidentsFilters}
 */
function reduceNewFilters(state, newFilters) {
    const { incidents, counts } = state,
        newVisibleIds = new Set(),
        newHiddenIds = new Set();
    let newVisibleTotal = 0;

    Object.values(incidents.map).forEach(incident => {
        const isVisible = incidentIsVisible({ incident, filters: newFilters });

        if (isVisible) {
            newVisibleIds.add(incident._clientSideId);
            newVisibleTotal += 1;
        } else {
            newHiddenIds.add(incident._clientSideId);
        }
    });

    return {
        ...state,
        incidents: { ...incidents, visibleIds: newVisibleIds, hiddenIds: newHiddenIds },
        counts: { ...counts, totalVisible: newVisibleTotal },
        filters: newFilters
    };
}

/**
 * Toggle a specific filter item
 *
 * @param state {IncidentsState}
 * @param payload {{ [group]: string, [filter]: string }}
 * @returns {IncidentsState}
 */
function reduceToggleFilter(state, { group, district }) {
    const newFilters = { ...state.filters };

    if (group) {
        if (newFilters.visibleGroups.has(group)) {
            newFilters.visibleGroups.delete(group);
        } else {
            newFilters.visibleGroups.add(group);
        }
    }

    if (district) {
        if (newFilters.visibleDistricts.has(district)) {
            newFilters.visibleDistricts.delete(district);
        } else {
            newFilters.visibleDistricts.add(district);
        }
    }

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceShowAllIncidentGroups(state) {
    const { filters, counts } = state,
        newFilters = { ...filters, visibleGroups: new Set(Object.keys(counts.perGroup)) };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceShowAllDistricts(state) {
    const { filters, counts } = state,
        newFilters = { ...filters, visibleDistricts: new Set(Object.keys(counts.perDistrict)) };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceHideAllIncidentGroups(state) {
    const { filters } = state,
        newFilters = { ...filters, visibleGroups: new Set() };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceHideAllDistricts(state) {
    const { filters } = state,
        newFilters = { ...filters, visibleDistricts: new Set() };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @param action {IncidentsAction}
 * @returns {IncidentsState}
 */
function incidentsReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_INCIDENTS:
            return reduceLoadIncidents(state, payload);
        case TOGGLE_INCIDENT_GROUP:
        case TOGGLE_DISTRICT:
            return reduceToggleFilter(state, payload);
        case SHOW_ALL_GROUPS:
            return reduceShowAllIncidentGroups(state);
        case SHOW_ALL_DISTRICTS:
            return reduceShowAllDistricts(state);
        case HIDE_ALL_GROUPS:
            return reduceHideAllIncidentGroups(state);
        case HIDE_ALL_DISTRICTS:
            return reduceHideAllDistricts(state);
        default:
            throw Error(`Invalid incidents reducer action: ${type}`);
    }
}

export default function useIncidentsReducer() {
    return useReducer(incidentsReducer, INITIAL_STATE);
}
