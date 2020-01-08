import { useReducer } from 'react';

import {
    HIDE_ALL_DISTRICTS,
    HIDE_ALL_GROUPS,
    LOAD_INCIDENTS,
    LOAD_INCIDENTS_AND_RESET_FILTERS,
    RESET_FILTERS,
    SHOW_ALL_DISTRICTS,
    SHOW_ALL_GROUPS,
    TOGGLE_DISTRICT,
    TOGGLE_INCIDENT_GROUP
} from './actions';
import { getIncidentGroupName, reportUnknownCodeGroups } from '../../utils/codeGroups';
import { filterIncidents, sortIncidentsByDescendingDate } from '../../utils/incidents';

const INITIAL_STATE = {
    incidents: {
        map: {},
        sortedByDate: [],
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
        groupsChanged: false,
        visibleDistricts: new Set(),
        districtsChanged: false
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
    const visibleIds = new Set(),
        groupsPreviouslyFiltered = state.filters.groupsChanged,
        districtsPreviouslyFiltered = state.filters.districtsChanged,
        visibleGroups = groupsPreviouslyFiltered ? state.filters.visibleGroups : new Set(),
        visibleDistricts = districtsPreviouslyFiltered ? state.filters.visibleDistricts : new Set(),
        map = {},
        perGroup = {},
        perDistrict = {},
        filteredIncidents = filterIncidents(incidents);

    let total = 0,
        totalVisible = 0;

    reportUnknownCodeGroups(filteredIncidents);

    // First reset filters and counts:
    filteredIncidents.forEach(incident => {
        const groupName = getIncidentGroupName(incident),
            district = incident.DISTRICT;

        map[incident._clientSideId] = incident;
        total += 1;

        !perGroup[groupName] && (perGroup[groupName] = 0);
        perGroup[groupName] += 1;
        !groupsPreviouslyFiltered && visibleGroups.add(groupName);

        !perDistrict[district] && (perDistrict[district] = 0);
        perDistrict[district] += 1;
        !districtsPreviouslyFiltered && visibleDistricts.add(district);
    });

    // Then reset visible ids and totals:
    filteredIncidents.forEach(incident => {
        if (incidentIsVisible({ incident, filters: { visibleDistricts, visibleGroups } })) {
            visibleIds.add(incident._clientSideId);
            totalVisible += 1;
        }
    });

    return {
        incidents: {
            map,
            hiddenIds: new Set(),
            visibleIds,
            sortedByDate: sortIncidentsByDescendingDate(filteredIncidents)
        },
        counts: { total, totalVisible, perGroup, perDistrict },
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
        newFilters.groupsChanged = true;

        if (newFilters.visibleGroups.has(group)) {
            newFilters.visibleGroups.delete(group);
        } else {
            newFilters.visibleGroups.add(group);
        }
    }

    if (district) {
        newFilters.districtsChanged = true;

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
        newFilters = { ...filters, visibleGroups: new Set(Object.keys(counts.perGroup)), groupsChanged: true };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceShowAllDistricts(state) {
    const { filters, counts } = state,
        newFilters = { ...filters, visibleDistricts: new Set(Object.keys(counts.perDistrict)), districtsChanged: true };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceHideAllIncidentGroups(state) {
    const { filters } = state,
        newFilters = { ...filters, visibleGroups: new Set(), groupsChanged: true };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceHideAllDistricts(state) {
    const { filters } = state,
        newFilters = { ...filters, visibleDistricts: new Set(), districtsChanged: true };

    return reduceNewFilters(state, newFilters);
}

/**
 * @param state {IncidentsState}
 * @returns {IncidentsState}
 */
function reduceResetFilters(state) {
    return {
        ...state,
        filters: {
            visibleGroups: new Set(Object.keys(state.counts.perGroup)),
            groupsChanged: false,
            visibleDistricts: new Set(Object.keys(state.counts.perDistrict)),
            districtsChanged: false
        }
    };
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
        case LOAD_INCIDENTS_AND_RESET_FILTERS:
            return reduceLoadIncidents(reduceResetFilters(state), payload);
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
        case RESET_FILTERS:
            return reduceResetFilters(state);
        default:
            throw Error(`Invalid incidents reducer action: ${type}`);
    }
}

export default function useIncidentsReducer() {
    return useReducer(incidentsReducer, INITIAL_STATE);
}
